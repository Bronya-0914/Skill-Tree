'use strict';

// 純資料處理模組，同時供瀏覽器與 Node 驗證使用。
const TopicPacks = (() => {
  const MAX_FILE = 512 * 1024;
  const MAX_TOTAL = 4 * 1024 * 1024;
  const idPattern = /^[a-z][a-z0-9-]*(?:\.[a-z0-9-]+)*$/;
  const escape = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  function requireValue(condition, message) { if (!condition) throw new Error(message); }
  function text(value, label, max = 2000) {
    requireValue(typeof value === 'string' && value.trim().length > 0 && value.length <= max, `${label} 必須是 1–${max} 字的文字。`);
    return value.trim();
  }
  function integer(value, min, max, label) {
    requireValue(Number.isInteger(value) && value >= min && value <= max, `${label} 必須是 ${min}–${max} 的整數。`);
    return value;
  }
  function identifier(value, label) {
    requireValue(typeof value === 'string' && value.length <= 100 && idPattern.test(value), `${label} 請使用小寫英文字母、數字、連字號或句點。`);
    return value;
  }
  function validate(pack) {
    requireValue(pack && pack.topic && Array.isArray(pack.nodes), '學習包缺少 topic 或 nodes。');
    const input = pack.topic;
    requireValue(input.schemaVersion === 1, '目前只支援 schemaVersion 1。');
    const topic = {
      schemaVersion:1, id:identifier(input.id, '主題 ID'),
      title:text(input.title, '主題名稱', 60),
      version:integer(input.version, 1, 1000000, '主題版本'),
      description:text(input.description, '主題簡介'),
      attachTo:identifier(input.attachTo ?? 'start', '主題接入點')
    };
    requireValue(pack.nodes.length > 0 && pack.nodes.length <= 100, '每個主題需要 1–100 個節點。');
    const seen = new Set();
    const nodes = pack.nodes.map(raw => {
      requireValue(raw && raw.schemaVersion === 1, '每個節點必須使用 schemaVersion 1。');
      const id = identifier(raw.id, '節點 ID');
      requireValue(id.startsWith(topic.id + '.'), `節點 ${id} 的 ID 必須以 ${topic.id}. 開頭。`);
      requireValue(!seen.has(id), `節點 ID 重複：${id}`);
      seen.add(id);
      requireValue(Array.isArray(raw.parents) && raw.parents.length <= 10, `${id} 的 parents 必須是先修 ID 陣列，最多 10 個。`);
      const parents = raw.parents.map(parent => identifier(parent, `${id} 的先修 ID`));
      requireValue(new Set(parents).size === parents.length, `${id} 的先修節點重複。`);
      requireValue(Array.isArray(raw.content) && raw.content.length > 0 && raw.content.length <= 60, `${id} 需要 1–60 段教學內容。`);
      const content = raw.content.map(block => {
        requireValue(block && ['paragraph','heading','formula','example','tip'].includes(block.type), `${id} 的內容類型無效。`);
        return {type:block.type, text:text(block.text, `${id} 的教學內容`, 6000)};
      });
      requireValue(Array.isArray(raw.questions) && raw.questions.length > 0 && raw.questions.length <= 20, `${id} 需要 1–20 題練習。`);
      const questions = raw.questions.map(question => {
        requireValue(question && Array.isArray(question.options) && question.options.length >= 2 && question.options.length <= 6, `${id} 每題需要 2–6 個選項。`);
        const options = question.options.map(option => text(option, '選項', 500));
        requireValue(new Set(options).size === options.length, `${id} 的題目包含重複選項。`);
        return {
          prompt:text(question.prompt, '題目', 1000), options,
          answer:integer(question.answer, 0, options.length-1, '答案索引'),
          explanation:text(question.explanation, '答案解析')
        };
      });
      const kind = raw.kind ?? 'base';
      requireValue(['base','derivative','integral'].includes(kind), `${id} 的 kind 無效。`);
      return {schemaVersion:1,id,title:text(raw.title,'節點名稱',60),intro:text(raw.intro,'節點簡介'),
        kind,minutes:integer(raw.minutes ?? 8,1,120,'預估分鐘'),parents,content,questions,
        passCount:integer(raw.passCount,1,questions.length,'通過題數')};
    });
    return {topic,nodes};
  }
  function ordered(lessons) {
    const known = new Set(['start', ...lessons.map(node => node.id)]);
    requireValue(known.size === lessons.length+1, '節點 ID 與其他課程重複。');
    for (const node of lessons) for (const parent of node.parents) requireValue(known.has(parent), `${node.id} 的先修節點不存在：${parent}`);
    const result = [];
    const visited = new Set(['start']);
    let pending = [...lessons];
    while (pending.length) {
      const ready = pending.filter(node => node.parents.every(parent => visited.has(parent)));
      requireValue(ready.length > 0, '先修關係形成循環，請修正節點的 parents。');
      for (const node of ready) { visited.add(node.id); result.push(node); }
      pending = pending.filter(node => !visited.has(node.id));
    }
    return result;
  }
  function lessonFromNode(node, topic) {
    const blocks = node.content.map(block => {
      const content = escape(block.text).replace(/\n/g, '<br>');
      if (block.type === 'heading') return `<h3>${content}</h3>`;
      if (block.type === 'paragraph') return `<p>${content}</p>`;
      return `<div class="${block.type}">${content}</div>`;
    }).join('');
    return {id:node.id,title:escape(node.title),intro:escape(node.intro),kind:node.kind,
      topicId:topic.id,topicTitle:escape(topic.title),icon:node.kind === 'integral' ? '∫' : '◇',
      minutes:node.minutes,parents:node.parents.length ? node.parents : [topic.attachTo],
      body:blocks,passCount:node.passCount,
      quiz:node.questions.map(q => [escape(q.prompt),q.options.map(escape),q.answer,escape(q.explanation)])};
  }
  function buildLessons(packs) {
    requireValue(Array.isArray(packs) && packs.length <= 30, '最多可儲存 30 個主題。');
    const topics = new Set();
    const imported = [];
    for (const raw of packs) {
      const pack = validate(raw);
      requireValue(!topics.has(pack.topic.id), `主題 ID 重複：${pack.topic.id}`);
      topics.add(pack.topic.id);
      imported.push(...pack.nodes.map(node => lessonFromNode(node, pack.topic)));
    }
    requireValue(imported.length <= 300, '匯入節點總數上限為 300。');
    const lessons = ordered(imported);
    // 每個主題佔一段橫向空間，依先修深度排層，同層分欄。
    const depth = new Map([['start',0]]);
    for (const node of lessons) depth.set(node.id, 1 + Math.max(...node.parents.map(id => depth.get(id))));
    let left = 65;
    for (const pack of packs) {
      const layers = new Map();
      for (const node of lessons.filter(item => item.topicId === pack.topic.id)) {
        const level = depth.get(node.id);
        if (!layers.has(level)) layers.set(level, []);
        layers.get(level).push(node);
      }
      const width = Math.max(...[...layers.values()].map(nodes => nodes.length))*210;
      for (const [level,nodes] of layers) nodes.forEach((node,index) => { node.x=left+width/2+(index-(nodes.length-1)/2)*210; node.y=65+level*115; });
      left += width + 60;
    }
    return lessons;
  }
  // 預設教材與瀏覽器教材使用相同格式；同一主題只保留一份。
  // 使用者較新的版本優先，網站較新的版本則更新同 ID 並保留額外節點。
  function loadLibrary(bundled, saved = []) {
    requireValue(Array.isArray(bundled) && Array.isArray(saved), '學習包清單必須是陣列。');
    const library = bundled.map(validate);
    const seen = new Set();
    for (const raw of saved) {
      const stored = validate(raw);
      requireValue(!seen.has(stored.topic.id), `主題 ID 重複：${stored.topic.id}`);
      seen.add(stored.topic.id);
      const index = library.findIndex(pack => pack.topic.id === stored.topic.id);
      if (index < 0) library.push(stored);
      else if (stored.topic.version >= library[index].topic.version) library[index] = stored;
      else {
        const current = library[index];
        const nodes = new Map(stored.nodes.map(node => [node.id,node]));
        for (const node of current.nodes) nodes.set(node.id,node);
        library[index] = {topic:current.topic,nodes:[...nodes.values()]};
      }
    }
    buildLessons(library);
    return library;
  }
  function prepare(raw, packs) {
    const incoming = validate(raw);
    const index = packs.findIndex(pack => pack.topic.id === incoming.topic.id);
    const previous = index < 0 ? null : validate(packs[index]);
    if (previous) requireValue(incoming.topic.version >= previous.topic.version, '這個包的版本較舊，請使用相同或較新的版本。');
    const oldNodes = new Map((previous?.nodes || []).map(node => [node.id,node]));
    const changes = incoming.nodes.map(node => ({id:node.id,title:node.title,
      action:!oldNodes.has(node.id) ? '新增' : JSON.stringify(node) === JSON.stringify(oldNodes.get(node.id)) ? '相同' : '更新',
      parents:node.parents.length ? node.parents : [incoming.topic.attachTo]}));
    const changed = changes.some(change => change.action !== '相同') || JSON.stringify(incoming.topic) !== JSON.stringify(previous?.topic);
    if (previous && changed) requireValue(incoming.topic.version > previous.topic.version, '內容有修改，請把 topic.json 的 version 增加後再上傳。');
    const mergedNodes = new Map(oldNodes);
    for (const node of incoming.nodes) mergedNodes.set(node.id,node);
    const merged = {topic:incoming.topic,nodes:[...mergedNodes.values()]};
    const next = [...packs];
    if (index < 0) next.push(merged); else next[index] = merged;
    const lessons = buildLessons(next);
    return {packs:next,lessons,changes,changed,topic:incoming.topic,retained:mergedNodes.size-incoming.nodes.length};
  }
  function crc32(bytes) {
    let crc = 0xffffffff;
    for (const byte of bytes) {
      crc ^= byte;
      for (let bit=0;bit<8;bit++) crc=(crc>>>1)^((crc&1)?0xedb88320:0);
    }
    return (crc^0xffffffff)>>>0;
  }
  function readZip(bytes, zip) {
    requireValue(bytes.length >= 22 && bytes.length <= 5*1024*1024, '請選擇有效的 ZIP，檔案上限為 5 MB。');
    const view = new DataView(bytes.buffer,bytes.byteOffset,bytes.byteLength);
    let end = -1;
    for (let i=bytes.length-22;i>=Math.max(0,bytes.length-65557);i--) {
      if (view.getUint32(i,true)===0x06054b50 && i+22+view.getUint16(i+20,true)===bytes.length) {end=i;break;}
    }
    requireValue(end>=0,'ZIP 不完整或格式無效。');
    const count = view.getUint16(end+10,true);
    let offset = view.getUint32(end+16,true);
    requireValue(view.getUint16(end+4,true)===0 && view.getUint16(end+6,true)===0 && view.getUint16(end+8,true)===count,'不支援分卷 ZIP。');
    requireValue(count>0 && count<=128 && offset+view.getUint32(end+12,true)===end,'ZIP 目錄無效，或超過 128 個項目。');
    const directoryStart = offset;
    const decoder = new TextDecoder('utf-8',{fatal:true});
    const files = new Map();
    const names = new Set();
    let total = 0;
    for (let entry=0;entry<count;entry++) {
      requireValue(offset+46<=end && view.getUint32(offset,true)===0x02014b50,'ZIP 目錄損壞。');
      const flags=view.getUint16(offset+8,true), method=view.getUint16(offset+10,true);
      const crc=view.getUint32(offset+16,true), size=view.getUint32(offset+20,true), original=view.getUint32(offset+24,true);
      const nameLength=view.getUint16(offset+28,true), extra=view.getUint16(offset+30,true), comment=view.getUint16(offset+32,true);
      const local=view.getUint32(offset+42,true);
      requireValue(offset+46+nameLength+extra+comment<=end,'ZIP 檔名資料不完整。');
      const name=decoder.decode(bytes.subarray(offset+46,offset+46+nameLength));
      requireValue(name.length>0 && !name.startsWith('/') && !/[\\:\x00]/.test(name) && !name.split('/').some(part=>part==='..'||part==='.'),'ZIP 含有不支援的檔案路徑。');
      requireValue(!names.has(name),'ZIP 包含重複檔案：'+name);
      names.add(name);
      requireValue(!(flags&1) && (method===0 || method===8),'請使用未加密的普通 ZIP（Store 或 Deflate）。');
      requireValue(original<=MAX_FILE && total+original<=MAX_TOTAL,'解壓內容過大：單檔最多 512 KB，總量最多 4 MB。');
      requireValue(local+30<=directoryStart && view.getUint32(local,true)===0x04034b50,'ZIP 檔案標頭無效。');
      const localNameLength=view.getUint16(local+26,true), localExtra=view.getUint16(local+28,true);
      const start=local+30+localNameLength+localExtra;
      requireValue(start+size<=directoryStart && view.getUint16(local+8,true)===method && !(view.getUint16(local+6,true)&1),'ZIP 檔案範圍無效。');
      requireValue(decoder.decode(bytes.subarray(local+30,local+30+localNameLength))===name,'ZIP 檔名不一致。');
      const chunks=[];
      let length=0;
      const collect = chunk => {
        length+=chunk.length;
        requireValue(length<=original && total+length<=MAX_TOTAL,'ZIP 實際解壓大小超出宣告範圍。');
        chunks.push(chunk);
      };
      if (method===0) collect(bytes.slice(start,start+size));
      else {
        const inflate=new zip.Inflate(collect);
        // 小塊輸入限制單次解壓時的記憶體需求。
        for(let i=0;i<size;i+=1024) inflate.push(bytes.subarray(start+i,start+Math.min(size,i+1024)),i+1024>=size);
      }
      requireValue(length===original,'ZIP 檔案長度不一致。');
      const output=new Uint8Array(length);
      let position=0;
      for(const chunk of chunks){output.set(chunk,position);position+=chunk.length;}
      requireValue(crc32(output)===crc,'ZIP 檔案校驗失敗：'+name);
      total+=length;
      if (!name.endsWith('/')) files.set(name,output);
      offset+=46+nameLength+extra+comment;
    }
    requireValue(offset===end,'ZIP 目錄長度不一致。');
    const manifests=[...files.keys()].filter(name=>name==='topic.json'||name.endsWith('/topic.json'));
    requireValue(manifests.length===1,'每個 ZIP 必須包含一份 topic.json。');
    const prefix=manifests[0].slice(0,-'topic.json'.length);
    const nodes=[];
    let topic;
    for(const [name,bytes] of files){
      if (/\.(md|txt)$/i.test(name)) continue;
      requireValue(name===prefix+'topic.json'||(name.startsWith(prefix+'nodes/') && name.endsWith('.json') && !name.slice((prefix+'nodes/').length).includes('/')),'不支援的檔案位置：'+name);
      let value;
      try { value=JSON.parse(decoder.decode(bytes)); } catch { throw new Error(`${name} 不是有效的 UTF-8 JSON。`); }
      if(name===prefix+'topic.json') topic=value; else nodes.push(value);
    }
    return validate({topic,nodes});
  }
  function writeZip(pack, zip) {
    const files=Object.create(null);
    const encoder=new TextEncoder();
    files['topic.json']=encoder.encode(JSON.stringify(pack.topic,null,2));
    for(const node of pack.nodes) files[`nodes/${node.id}.json`]=encoder.encode(JSON.stringify(node,null,2));
    return zip.zipSync(files,{level:6});
  }
  return {validate,prepare,buildLessons,loadLibrary,ordered,readZip,writeZip,escape};
})();
if (typeof module !== 'undefined') module.exports = TopicPacks;
