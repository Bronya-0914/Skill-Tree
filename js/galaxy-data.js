'use strict';

// Shared, deterministic positions. Placeholder stars never represent completed work.
const GalaxyData = (() => {
  function point(index) {
    const arm=index%4, t=.34+(index%11)*.047, angle=arm*Math.PI/2+t*6.8;
    const r=170+t*1040;
    return {x:Math.cos(angle)*r,y:Math.sin(angle)*r*.66};
  }
  const names=[['物理','Physics'],['線性代數','Linear algebra'],['化學','Chemistry'],['天文學','Astronomy'],['生物學','Biology'],['機率','Probability'],['程式設計','Programming'],['幾何','Geometry'],['歷史','History'],['音樂','Music'],['統計','Statistics'],['哲學','Philosophy'],['語言','Languages'],['經濟學','Economics'],['地球科學','Earth science'],['邏輯','Logic'],['藝術','Art'],['電腦科學','Computer science'],['心理學','Psychology'],['工程','Engineering'],['數論','Number theory'],['文學','Literature'],['生態學','Ecology'],['設計','Design']];
  function build(packs,progress={}) {
    const completed=new Set(Array.isArray(progress.completed)?progress.completed:[]);
    const topics=packs.map((pack,i)=>{
      const calculus=pack.topic.id==='mendelson-calculus'||pack.topic.id==='cis221-calculus';
      const count=pack.nodes.filter(n=>completed.has(n.id)).length;
      return {id:pack.topic.id,...(i===0?{x:440,y:188}:point(i+24)),zh:calculus?'微積分':pack.topic.title,en:calculus?'Calculus':pack.topic.title,available:true,count,total:pack.nodes.length,lit:pack.nodes.length>0&&count===pack.nodes.length};
    });
    return topics.concat(names.map(([zh,en],i)=>({id:'unavailable-'+i,...point(i),zh,en,available:false,count:0,total:0,lit:false})));
  }
  function nearest(stars,x,y){return stars.reduce((best,s)=>!best||Math.hypot(s.x-x,s.y-y)<Math.hypot(best.x-x,best.y-y)?s:best,null);}
  return {build,nearest};
})();
if(typeof module!=='undefined')module.exports=GalaxyData;
