const test=require('node:test'),assert=require('node:assert/strict'),fs=require('fs'),path=require('path'),vm=require('vm');
const api=require('../js/topic-packs.js'),zip=require('../js/vendor/fflate.js'),checker=require('../js/answer-checker.js'),layout=require('../js/tree-layout.js');
const root=path.resolve(__dirname,'..');
const bundled=JSON.parse(JSON.stringify(vm.runInNewContext(fs.readFileSync(path.join(root,'learning-packs/catalog.js'),'utf8')+';LEARNING_PACKS')));
test('book sources, catalog, ZIP and 52-node prerequisite graph agree',()=>{
 assert.equal(bundled.length,1);const pack=bundled[0];assert.equal(pack.topic.id,'mendelson-calculus');assert.equal(pack.nodes.length,52);
 const archive=new Uint8Array(fs.readFileSync(path.join(root,'learning-packs/mendelson-calculus.zip')));
 assert.deepEqual(api.readZip(archive,zip),pack);
 assert.ok(zip.unzipSync(archive)['README.en.md']);
 let long=0,parts=0,total=0;
 for(const n of pack.nodes){assert.deepEqual(JSON.parse(fs.readFileSync(path.join(root,'learning-packs/mendelson-calculus/nodes',n.id+'.json'),'utf8')),n);
  const multipart=n.questions[0].type==='multipart';if(multipart)long++;
  assert.equal(n.questions.length,multipart?4:10);assert.equal(n.passCount,multipart?3:7);
  total+=n.questions.length;
  for(const q of n.questions)for(const p of q.parts||[q]){parts++;assert.ok(Number.isFinite(checker.number(p.answers[0])));assert.ok(checker.matches(p.answers[0],p));assert.ok(!checker.matches(String(checker.number(p.answers[0])+1),p));}
 }
 assert.equal(long,17);assert.equal(total,418);assert.equal(parts,590);
 const nodes=[{id:'start',parents:[]},...api.buildLessons(bundled)],graph=layout.build(nodes);assert.equal(graph.primary.size,52);
 for(const n of nodes){assert.ok(Number.isFinite(n.x));for(const p of n.parents)assert.ok(graph.byId.get(p).y<n.y);}
 assert.deepEqual(api.readZip(api.writeZip(pack,zip),zip),pack);
});
test('numeric answers accept equivalent values and reject invalid or unsafe expressions',()=>{
 const q={answers:['0.5']};for(const v of ['1/2','0.50',' １ / ２ ','2^(-1)'])assert.ok(checker.matches(v,q),v);
 for(const v of ['',' ','0.51','1/0','NaN','Infinity','process.exit()','1;alert(1)','Math.sqrt(2)','2x'])assert.ok(!checker.matches(v,q),v);
 assert.equal(checker.number('-2^2'),-4);assert.equal(checker.number('2^3^2'),512);
 assert.equal(checker.number('sqrt(4)+ln(e)'),3);
 assert.ok(checker.matches('pi/4',{answers:[String(Math.PI/4)]}));
});
test('multipart import requires valid parts and preserves input answer types',()=>{
 const pack=structuredClone(bundled[0]);const node=pack.nodes.find(n=>n.questions[0].type==='multipart');
 node.questions[0].parts=[];assert.throws(()=>api.validate(pack));
 node.questions[0].parts=[{type:'input',prompt:'a',answers:[],explanation:'b'}];assert.throws(()=>api.validate(pack));
});
test('representative multi-step results independently match geometric and calculus checks',()=>{
 const nodes=new Map(bundled[0].nodes.map(n=>[Number(n.id.split('-').at(-1)),n]));
 const answers=(n)=>nodes.get(n).questions[0].parts.map(p=>checker.number(p.answers[0]));
 assert.deepEqual(answers(16),[8,-1.5,3.5]);
 assert.deepEqual(answers(18),[12,6,36,-2]);
 assert.deepEqual(answers(48),[2,8,0,-4]);
 assert.deepEqual(answers(49),[2,8/3,8/6,2]);
 assert.deepEqual(answers(51),[6,0,9]);
});
