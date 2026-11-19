'use strict';

// A small numeric expression parser, never JavaScript evaluation.
const AnswerChecker = (() => {
  function number(input) {
    const source=String(input).normalize('NFKC').replace(/−/g,'-').replace(/×/g,'*').replace(/÷/g,'/').replace(/π/g,'pi').replace(/\s/g,'').toLowerCase();
    if (!source || source.length>200) return NaN;
    const tokens=source.match(/(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|[a-z]+|[()+*/^,-]/g)||[];
    if(tokens.join('')!==source) return NaN;
    let i=0,depth=0;
    function atom(){
      if(++depth>30)throw Error();
      const t=tokens[i++];let v;
      if(t==='('){v=sum();if(tokens[i++]!==')')throw Error();}
      else if(t==='pi')v=Math.PI;
      else if(t==='e')v=Math.E;
      else if(['sqrt','sin','cos','tan','ln','exp','abs'].includes(t)){
        if(tokens[i++]!=='(')throw Error();const a=sum();if(tokens[i++]!==')')throw Error();v=({sqrt:Math.sqrt,sin:Math.sin,cos:Math.cos,tan:Math.tan,ln:Math.log,exp:Math.exp,abs:Math.abs})[t](a);
      }else {if(!t||!/^\d|^\.\d/.test(t))throw Error();v=Number(t);}
      depth--;return v;
    }
    function power(){let v=atom();if(tokens[i]==='^'){i++;v=v**unary();}return v;}
    function unary(){if(tokens[i]==='+'){i++;return unary();}if(tokens[i]==='-'){i++;return -unary();}return power();}
    function product(){let v=unary();while(tokens[i]==='*'||tokens[i]==='/'){const op=tokens[i++],b=unary();v=op==='*'?v*b:v/b;}return v;}
    function sum(){let v=product();while(tokens[i]==='+'||tokens[i]==='-'){const op=tokens[i++],b=product();v=op==='+'?v+b:v-b;}return v;}
    try{const value=sum();return i===tokens.length&&Number.isFinite(value)?value:NaN;}catch{return NaN;}
  }
  function matches(value,question){
    if(typeof value!=='string'||!value.trim())return false;
    const actual=number(value);
    return question.answers.some(expected=>{const target=number(expected);return Number.isFinite(actual)&&Number.isFinite(target)&&Math.abs(actual-target)<=(question.tolerance??1e-10)*Math.max(1,Math.abs(target));});
  }
  return {number,matches};
})();
if(typeof module!=='undefined')module.exports=AnswerChecker;
