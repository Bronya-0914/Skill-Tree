const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const root=process.env.I18N_TEST_ROOT || path.resolve(__dirname,'..');
const catalogRoot=process.env.I18N_CATALOG_ROOT || root;
const sandbox={window:{}};
vm.runInNewContext(fs.readFileSync(path.join(root,'js/i18n-messages.js'),'utf8'),sandbox);
vm.runInNewContext(fs.readFileSync(path.join(root,'js/i18n.js'),'utf8'),sandbox);
const {english}=sandbox.window.SkillTreeI18n;
const packs=vm.runInNewContext(fs.readFileSync(path.join(catalogRoot,'learning-packs/catalog.js'),'utf8')+';LEARNING_PACKS');
test('every built-in course string has an English display translation',()=>{
  let questions=0,lessons=0;
  function check(value){
    if(typeof value==='string') for(const line of value.split('\n')) {
      if(/\p{Script=Han}/u.test(line)) assert(!/\p{Script=Han}/u.test(english(line)),line);
    }
    else if(Array.isArray(value)) value.forEach(check);
    else if(value && typeof value==='object') Object.values(value).forEach(check);
  }
  check(packs);
  for(const pack of packs) for(const node of pack.nodes){lessons++;questions+=node.questions.length;}
  assert.equal(lessons,27);assert.equal(questions,270);
});
test('dynamic labels translate embedded course names and maintain values',()=>{
  assert.equal(english('已作答 3 / 10 題 · 全部作答後才能交卷'),'3 / 10 answered · Answer every question to submit');
  assert.equal(english('「01 · 函數、定義域與值域」已點亮！'),'“01 · Functions, Domain and Range” unlocked!');
  assert.equal(english('飽和度 58% · 亮度 91%'),'Saturation 58% · Brightness 91%');
  assert.equal(english('  練習 · 10 題  '),'  Practice · 10 questions  ');
  assert.equal(english('  √(x−2) ≤ 1/2  '),'  √(x−2) ≤ 1/2  ');
});
test('unknown imported content stays unchanged and output is plain text',()=>{
  assert.equal(english('自訂教材甲，自己的內容乙'),'自訂教材甲，自己的內容乙');
  assert.equal(english('<img src=x onerror=alert(1)>'),'<img src=x onerror=alert(1)>');
  assert.equal(english('無法匯入：ZIP 不完整或格式無效。'),'Unable to import: Incomplete or invalid ZIP.');
});
