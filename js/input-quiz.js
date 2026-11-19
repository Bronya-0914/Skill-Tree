'use strict';

function renderInputQuiz(lesson) {
  const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const attempt=attempts.get(lesson.id)||{answers:{},submitted:false};
  attempts.set(lesson.id,attempt);
  const units=lesson.quiz.flatMap((q,i)=>q.type==='multipart'?q.parts.map((part,j)=>({key:`${i}.${j}`,part})): [{key:String(i),part:q,choice:Array.isArray(q)}]);
  const correct=q=>q.type==='input'?AnswerChecker.matches(attempt.answers[String(lesson.quiz.indexOf(q))],q):q.type==='multipart'?q.parts.every((p,j)=>AnswerChecker.matches(attempt.answers[`${lesson.quiz.indexOf(q)}.${j}`],p)):attempt.answers[String(lesson.quiz.indexOf(q))]===q[2];
  const filled=u=>u.choice?Number.isInteger(attempt.answers[u.key]):!!attempt.answers[u.key]?.trim();
  const score=lesson.quiz.filter(correct).length;
  const passed=score>=lesson.passCount;
  const status=attempt.submitted?`${score} / ${lesson.quiz.length} 題正確 · ${passed?'技能已點亮 ✓':'再試一次，就更接近了'}`:'每小問輸入答案；長題全部小問正確才算通過該題。';
  function field(part,key,label){const right=AnswerChecker.matches(attempt.answers[key],part);
    return `<div class="input-question"><label for="answer-${key}">${esc(label)}${esc(part.prompt)}</label><input id="answer-${key}" name="${key}" type="text" inputmode="text" autocomplete="off" spellcheck="false" maxlength="200" value="${esc(attempt.answers[key]||'')}" ${attempt.submitted?'disabled':'required'}>${attempt.submitted?`<div class="feedback ${right?'correct':'incorrect'}"><strong>${right?'✓ 答對了':'↗ 正確答案為 '+esc(part.answers[0])}</strong><span class="feedback-detail">${esc(part.explanation)}</span></div>`:''}</div>`;
  }
  $('#quiz-content').innerHTML=`<p class="lead" role="status">${esc(status)}</p><p class="input-help">可輸入整數、小數、分數，或 sqrt(2)、pi 等數值式；乘法請用 *。不需輸入單位。</p><p>通過題數：${lesson.passCount} / ${lesson.quiz.length}</p><form id="quiz-form">${lesson.quiz.map((q,i)=>`<fieldset class="quiz-question"><legend>${i+1}. ${Array.isArray(q)?q[0]:esc(q.prompt)}</legend>${Array.isArray(q)?q[1].map((option,j)=>`<label class="option"><input type="radio" name="${i}" value="${j}" ${attempt.answers[i]===j?'checked':''} ${attempt.submitted?'disabled':'required'}>${option}</label>`).join('')+(attempt.submitted?`<div class="feedback">${q[1][q[2]]}<br>${q[3]}</div>`:''):q.type==='multipart'?q.parts.map((p,j)=>field(p,`${i}.${j}`,`(${j+1}) `)).join(''):field({...q,prompt:'輸入答案'},String(i),'')}</fieldset>`).join('')}<p id="quiz-progress" role="status"></p><button class="primary" id="quiz-submit" type="${attempt.submitted?'button':'submit'}">${attempt.submitted?'再練習一次 ↺':'檢查答案 · 點亮技能'}</button></form>${attempt.submitted&&passed?'<button class="primary" id="next-lesson">繼續探索 →</button>':''}`;
  function update(){if(attempt.submitted)return;const done=units.filter(filled).length;$('#quiz-progress').textContent=`${done} / ${units.length}`;$('#quiz-submit').disabled=done!==units.length;}
  $('#quiz-form').oninput=e=>{if(attempt.submitted||!units.some(u=>u.key===e.target.name))return;attempt.answers[e.target.name]=e.target.type==='radio'?Number(e.target.value):e.target.value;saveSession();update();};
  $('#quiz-form').onsubmit=e=>{
    e.preventDefault();if(attempt.submitted||units.some(u=>!filled(u)))return;
    const value=lesson.quiz.filter(correct).length;attempt.submitted=true;
    progress.scores[lesson.id]=Math.max(progress.scores[lesson.id]||0,value);
    const passed=value>=lesson.passCount,first=passed&&!isCompleted(lesson.id);
    if(first)progress.completed.push(lesson.id);
    saveProgress();saveSession();renderTree();renderLesson();
    if(passed)presentCompletion(lesson,first);
  };
  if(attempt.submitted)$('#quiz-submit').onclick=()=>{attempts.delete(lesson.id);renderLesson();};
  if($('#next-lesson'))$('#next-lesson').onclick=()=>selectNode(lessons.find(n=>!isCompleted(n.id)&&isAvailable(n))?.id||'start');
  update();
}
