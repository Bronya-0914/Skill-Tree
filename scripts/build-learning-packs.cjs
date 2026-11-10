'use strict';

// topic.json 和 nodes/*.json 是唯一需要編輯的教材來源。
// 同時產生網站載入檔及可上傳的 ZIP，避免維護兩套教材。
const fs = require('node:fs');
const path = require('node:path');
const api = require('../js/topic-packs.js');
const zip = require('../js/vendor/fflate.js');
const root = path.resolve(__dirname, '..', 'learning-packs');
const packs = fs.readdirSync(root, {withFileTypes:true})
  .filter(entry => entry.isDirectory() && fs.existsSync(path.join(root,entry.name,'topic.json')))
  .sort((a,b) => a.name.localeCompare(b.name))
  .map(entry => {
    const dir = path.join(root,entry.name);
    const read = file => JSON.parse(fs.readFileSync(file,'utf8'));
    const pack = api.validate({
      topic:read(path.join(dir,'topic.json')),
      nodes:fs.readdirSync(path.join(dir,'nodes')).filter(name => name.endsWith('.json')).sort()
        .map(name => read(path.join(dir,'nodes',name)))
    });
    pack.nodes.sort((a,b) => a.title.localeCompare(b.title,'zh-Hant',{numeric:true}));
    return {pack,dir};
  });
if (!packs.length) throw new Error('learning-packs 至少需要一個主題。');
const library = api.loadLibrary(packs.map(item => item.pack));
for (const {pack,dir} of packs) {
  const files = {'topic.json':zip.strToU8(JSON.stringify(pack.topic,null,2))};
  for (const node of pack.nodes) files['nodes/'+node.id+'.json'] = zip.strToU8(JSON.stringify(node,null,2));
  if (fs.existsSync(path.join(dir,'README.md'))) files['README.md'] = zip.strToU8(fs.readFileSync(path.join(dir,'README.md'),'utf8'));
  const bytes = zip.zipSync(files,{level:6});
  api.readZip(bytes,zip);
  fs.writeFileSync(path.join(root,pack.topic.id+'.zip'),bytes);
}
fs.writeFileSync(path.join(root,'catalog.js'),
  '// 此檔由 scripts/build-learning-packs.cjs 產生，請編輯各主題的 JSON。\n' +
  'const LEARNING_PACKS = '+JSON.stringify(library,null,2)+';\n','utf8');
console.log(`已建立 ${library.length} 個 Learning Pack、${library.reduce((sum,p)=>sum+p.nodes.length,0)} 個節點。`);
