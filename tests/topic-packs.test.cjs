const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const packs = require('../js/topic-packs.js');
const zip = require('../js/vendor/fflate.js');
const root = path.resolve(__dirname, '..');
const bytes = new Uint8Array(fs.readFileSync(path.join(root, 'learning-packs/cis221-calculus.zip')));
const sample = packs.readZip(bytes, zip);
const copy = () => structuredClone(sample);

test('網站只有 Learning Pack 課程，載入檔與 JSON / ZIP 一致', () => {
  const vm = require('node:vm');
  const bundled = JSON.parse(JSON.stringify(vm.runInNewContext(
    fs.readFileSync(path.join(root,'learning-packs/catalog.js'),'utf8')+'\nLEARNING_PACKS')));
  assert.deepEqual(bundled,[sample]);
  const library=packs.loadLibrary(bundled);
  const lessons=packs.buildLessons(library);
  assert.equal(lessons.length,27);
  assert.equal(lessons.reduce((total,node)=>total+node.quiz.length,0),270);
  assert.ok(lessons.every(node=>node.topicId==='cis221-calculus'));
  assert.ok(!fs.existsSync(path.join(root,'lessons.js')));
  assert.ok(!fs.existsSync(path.join(root,'examples')));
  const sourceNodes=fs.readdirSync(path.join(root,'learning-packs/cis221-calculus/nodes'));
  assert.equal(sourceNodes.length,27);
  for(const node of sample.nodes) {
    assert.deepEqual(JSON.parse(fs.readFileSync(path.join(root,'learning-packs/cis221-calculus/nodes',node.id+'.json'),'utf8')),node);
  }
});

test('已上傳同一主題不重複，較新自訂版本保留', () => {
  assert.equal(packs.loadLibrary([sample],[copy()]).length,1);
  const saved=copy();saved.topic.version=2;saved.nodes[0].title='自訂課程名稱';
  assert.equal(packs.loadLibrary([sample],[saved])[0].nodes[0].title,'自訂課程名稱');
});

test('預設包升級會更新同 ID，但保留使用者額外節點和其他主題', () => {
  const saved=copy();
  saved.nodes.push({...saved.nodes[0],id:'cis221-calculus.review',parents:[]});
  const current=copy();current.topic.version=2;current.nodes[0].title='新版課程';
  const other=copy();other.topic.id='review';other.nodes=[{...other.nodes[0],id:'review.first',parents:[]}];
  const library=packs.loadLibrary([current],[saved,other]);
  assert.equal(library.length,2);
  assert.equal(library[0].topic.version,2);
  assert.equal(library[0].nodes.length,28);
  assert.equal(library[0].nodes[0].title,'新版課程');
  assert.throws(()=>packs.loadLibrary([sample],[saved,saved]),/重複/);
});

test('讀取每節點一檔的主題包，匯出後可重新匯入', () => {
  assert.equal(sample.nodes.length, 27);
  assert.deepEqual(packs.readZip(packs.writeZip(sample,zip),zip), sample);
});
test('接受單一外層資料夾與未壓縮 ZIP', () => {
  const files = zip.unzipSync(bytes);
  const wrapped = Object.fromEntries(Object.entries(files).map(([name,data])=>['course/'+name,data]));
  assert.deepEqual(packs.readZip(zip.zipSync(wrapped,{level:0}),zip),sample);
});
test('先修拓樸排序不依賴檔名，新增節點不重疊', () => {
  const prepared = packs.prepare(sample,[]);
  assert.equal(prepared.lessons.length,27);
  const tangent = prepared.lessons.find(node=>node.id==='cis221-calculus.functions');
  const implicit = prepared.lessons.find(node=>node.id==='cis221-calculus.implicit');
  assert.ok(tangent.y < implicit.y);
  assert.ok(tangent.x >= 65);
  assert.equal(tangent.quiz.length,10);
  assert.equal(tangent.passCount,7);
});
test('相同包冪等，較新版本更新同 ID 並保留未列出的舊節點', () => {
  const first = packs.prepare(sample,[]);
  assert.equal(packs.prepare(sample,first.packs).changed,false);
  const newer=copy();
  newer.topic.version=2;
  newer.nodes=[newer.nodes.find(node=>node.id.endsWith('.functions'))];
  newer.nodes[0].title='更新切線課';
  const result=packs.prepare(newer,first.packs);
  assert.equal(result.changes[0].action,'更新');
  assert.equal(result.retained,26);
  assert.equal(result.lessons.length,27);
  assert.throws(()=>packs.prepare(sample,result.packs),/較舊/);
});
test('內容變更必須提高版本，失敗不修改原集合', () => {
  const library=[copy()];
  const before=JSON.stringify(library);
  const changed=copy();changed.nodes[0].title='不同名稱';
  assert.throws(()=>packs.prepare(changed,library),/version/);
  assert.equal(JSON.stringify(library),before);
});
test('拒絕缺失先修、循環依賴與重複 ID', () => {
  const missing=copy();missing.nodes[0].parents=['missing'];
  assert.throws(()=>packs.prepare(missing,[]),/不存在/);
  const cyclic=copy();cyclic.nodes[0].parents=[cyclic.nodes[1].id];cyclic.nodes[1].parents=[cyclic.nodes[0].id];
  assert.throws(()=>packs.prepare(cyclic,[]),/循環/);
  const duplicate=copy();duplicate.nodes.push(duplicate.nodes[0]);
  assert.throws(()=>packs.validate(duplicate),/重複/);
});
test('拒絕無效答案、通過門檻、命名空間及格式版本', () => {
  const invalid=copy();invalid.nodes[0].questions[0].answer=99;
  assert.throws(()=>packs.validate(invalid),/答案索引/);
  invalid.nodes[0]=copy().nodes[0];invalid.nodes[0].passCount=30;
  assert.throws(()=>packs.validate(invalid),/通過題數/);
  invalid.nodes[0]=copy().nodes[0];invalid.nodes[0].id='other.node';
  assert.throws(()=>packs.validate(invalid),/必須以/);
  invalid.topic.schemaVersion=2;
  assert.throws(()=>packs.validate(invalid),/schemaVersion/);
});
test('節點文字與教材 HTML 轉義', () => {
  const malicious=copy();
  malicious.nodes[0].title='<img src=x onerror=alert(1)>';
  malicious.nodes[0].content=[{type:'paragraph',text:'<script>alert(1)</script>'}];
  const node=packs.prepare(malicious,[]).lessons.find(node=>node.id===malicious.nodes[0].id);
  assert.ok(node.title.includes('&lt;img'));
  assert.ok(node.body.includes('&lt;script&gt;'));
  assert.ok(!node.body.includes('<script>'));
});
test('ZIP 拒絕截斷、無效 JSON、路徑穿越和缺失主題', () => {
  assert.throws(()=>packs.readZip(bytes.slice(0,-1),zip),/ZIP/);
  assert.throws(()=>packs.readZip(zip.zipSync({'topic.json':zip.strToU8('{bad')}),zip),/JSON/);
  assert.throws(()=>packs.readZip(zip.zipSync({'../topic.json':zip.strToU8('{}')}),zip),/路徑/);
  assert.throws(()=>packs.readZip(zip.zipSync({'nodes/test.json':zip.strToU8('{}')}),zip),/topic.json/);
});
test('ZIP 拒絕超大解壓檔案與 CRC 損壞', () => {
  assert.throws(()=>packs.readZip(zip.zipSync({'topic.json':new Uint8Array(513*1024)}),zip),/過大/);
  const stored=zip.zipSync({'topic.json':zip.strToU8(JSON.stringify(sample.topic))},{level:0});
  const view=new DataView(stored.buffer,stored.byteOffset,stored.byteLength);
  const dataStart=30+view.getUint16(26,true)+view.getUint16(28,true);
  stored[dataStart]^=1;
  assert.throws(()=>packs.readZip(stored,zip),/校驗/);
});
test('跨主題先修可解析，更新後也檢查整體關係', () => {
  const second=copy();second.topic.id='advanced';second.topic.attachTo='cis221-calculus.implicit';
  second.nodes=[{...second.nodes[0],id:'advanced.review',parents:[]}];
  const result=packs.prepare(second,[sample]);
  assert.ok(result.lessons.findIndex(node=>node.id==='advanced.review') > result.lessons.findIndex(node=>node.id==='cis221-calculus.implicit'));
  const circular=copy();circular.topic.version=2;circular.topic.attachTo='advanced.review';
  assert.throws(()=>packs.prepare(circular,result.packs),/循環/);
});
