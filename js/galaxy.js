'use strict';

(() => {
  const $=id=>document.getElementById(id), stage=$('galaxy'), canvas=$('sky'), ctx=canvas.getContext('2d');
  const reduced=matchMedia('(prefers-reduced-motion: reduce)');
  const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
  let language='zh-Hant',stars=[],selected=null,width=0,height=0,fit=1,raf=0,animation=null;
  let camera={x:0,y:0,scale:1}, texture;
  const elements=new Map(),pointers=new Map();
  let gesture=null,dragged=false,pinched=false,tap=null,tapTimer,lastTouch=0;
  try{language=localStorage.getItem('skill-tree-language')==='en'?'en':'zh-Hant';}catch(_){}
  const say=(zh,en)=>language==='en'?en:zh;
  function read(key,fallback){try{return JSON.parse(localStorage.getItem(key))??fallback;}catch{return fallback;}}
  function load(){
    const saved=read('calculus-tree-packs-v1',{packs:[]});
    let packs=LEARNING_PACKS;
    try{
      let stored=Array.isArray(saved.packs)?saved.packs:[];
      const dependent=stored.some(p=>p.topic?.id!=='cis221-calculus'&&(p.topic?.attachTo?.startsWith('cis221-calculus.')||p.nodes?.some(n=>n.parents?.some(id=>id.startsWith('cis221-calculus.')))));
      if(LEARNING_PACKS.some(p=>p.topic.id==='mendelson-calculus')&&!dependent)stored=stored.filter(p=>p.topic?.id!=='cis221-calculus');
      packs=TopicPacks.loadLibrary(LEARNING_PACKS,stored);
      $('load-warning').hidden=true;
    }catch(_){$('load-warning').hidden=false;$('load-warning').textContent=say('自訂教材無法載入，暫時顯示預設主題。','Custom content could not load. Showing bundled subjects.');}
    const before=selected?.id;
    stars=GalaxyData.build(packs,read('calculus-tree-progress-v1',{}));
    selected=stars.find(s=>s.id===before)||null;
    const color=read('calculus-tree-glow-v1',{}).color;
    if(/^#[0-9a-f]{6}$/i.test(color||''))document.documentElement.style.setProperty('--star-light',color);
    $('stars').replaceChildren();elements.clear();
    for(const star of stars){
      const el=document.createElement(star.available?'button':'div');
      el.className='star '+(star.available?'available':'unavailable')+(star.lit?' lit':'');
      el.dataset.star=star.id;
      const dot=document.createElement('span');dot.className='core';dot.setAttribute('aria-hidden','true');
      const label=document.createElement('span');label.className='star-name';
      el.append(dot,label);
      if(star.available){
        el.type='button';
        el.addEventListener('focus',()=>{if(!pointers.size&&el.matches(':focus-visible'))focusStar(star,Math.max(camera.scale,fit*3));});
        el.addEventListener('click',event=>{
          if(event.detail!==0&&dragged)return;
          clearTimeout(tapTimer);
          if(event.detail===0)focusStar(star,Math.max(camera.scale,fit*3));
          else if(Date.now()-lastTouch>600)tapTimer=setTimeout(()=>focusStar(star,Math.max(camera.scale,fit*3)),240);
        });
      }else el.setAttribute('aria-hidden','true');
      $('stars').append(el);elements.set(star.id,el);
    }
    setLanguage(language,false);render();
  }
  function setLanguage(next,persist=true){
    language=next==='en'?'en':'zh-Hant';document.documentElement.lang=language;
    if(persist)try{localStorage.setItem('skill-tree-language',language);}catch(_){}
    document.querySelectorAll('[data-zh]').forEach(el=>el.textContent=language==='en'?el.dataset.en:el.dataset.zh);
    document.querySelectorAll('[data-lang]').forEach(el=>el.setAttribute('aria-pressed',String(el.dataset.lang===language)));
    stage.setAttribute('aria-label',say('知識星系。拖曳探索，雙擊或雙點放大。方向鍵平移，+ 和 - 縮放，Home 返回全域。','Knowledge galaxy. Drag to explore; double-click or double-tap to zoom. Arrow keys pan, + and - zoom, Home returns to overview.'));
    for(const star of stars){const el=elements.get(star.id);el.querySelector('.star-name').textContent=language==='en'?star.en:star.zh;if(star.available)el.setAttribute('aria-label',`${language==='en'?star.en:star.zh} · ${star.count}/${star.total} · ${star.lit?say('已點亮','Lit'):say('可學習','Available')}`);}
    const available=stars.filter(s=>s.available);
    $('galaxy-status').textContent=say(`${available.length} 個可學習主題 · ${available.filter(s=>s.lit).length} 顆已點亮`,`${available.length} available · ${available.filter(s=>s.lit).length} lit`);
    $('locate').disabled=!available.length;updateCard();
  }
  function updateCard(){
    $('topic-card').hidden=!selected;$('intro').classList.toggle('away',!!selected||camera.scale>fit*1.6);
    for(const s of stars)elements.get(s.id).classList.toggle('selected',s===selected);
    if(!selected)return;
    $('topic-title').textContent=language==='en'?selected.en:selected.zh;
    $('topic-state').textContent=selected.available?(selected.lit?say('星星已點亮','STAR ILLUMINATED'):say('你的學習星球','YOUR LEARNING STAR')):say('尚未開放','UNEXPLORED');
    $('topic-detail').textContent=selected.available?say(`${selected.count} / ${selected.total} 個節點完成${selected.lit?' · 已掌握此主題':' · 全部完成後點亮'}`,`${selected.count} / ${selected.total} skills complete${selected.lit?' · Subject mastered':' · Complete all to illuminate'}`):say('這是一顆尚未開放的星星，可以繼續放大探索。','This star is not open yet. You can still zoom in and explore.');
    $('enter-topic').hidden=!selected.available;$('topic-track').hidden=!selected.available;
    $('topic-progress').style.width=(selected.total?selected.count/selected.total*100:0)+'%';
    if(selected.available)$('enter-topic').href='tree.html?topic='+encodeURIComponent(selected.id);
  }
  function world(x,y){return {x:camera.x+(x-width/2)/camera.scale,y:camera.y+(y-height*.46)/camera.scale};}
  function screen(star){return {x:width/2+(star.x-camera.x)*camera.scale,y:height*.46+(star.y-camera.y)*camera.scale};}
  function go(next){
    next.scale=clamp(next.scale,fit,fit*(width<600?12:8));next.x=clamp(next.x,-1300,1300);next.y=clamp(next.y,-1000,1000);
    animation=reduced.matches?null:{from:{...camera},to:next,start:performance.now()};
    if(!animation)camera=next;render();
  }
  function focusStar(star,scale){if(!star)return;selected=star;go({x:star.x,y:star.y,scale});updateCard();}
  function approach(x=width/2,y=height*.46,multiplier=1.9){const p=world(x,y);focusStar(GalaxyData.nearest(stars,p.x,p.y),camera.scale*multiplier);}
  function overview(){selected=null;go({x:0,y:0,scale:fit});updateCard();}
  function zoomOut(){const scale=Math.max(fit,camera.scale/1.7);if(scale<=fit*1.05)overview();else go({...camera,scale});}
  // Seeded textures retain their shape while zooming and cost no per-frame particle simulation.
  function nebula(){
    let seed=5938;const rand=()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296;};
    const normal=()=>Math.sqrt(-2*Math.log(Math.max(.00001,rand())))*Math.cos(2*Math.PI*rand());
    const tex=document.createElement('canvas');tex.width=tex.height=2400;const c=tex.getContext('2d');c.translate(1200,1200);
    const puff=document.createElement('canvas');puff.width=puff.height=96;const p=puff.getContext('2d'),g=p.createRadialGradient(48,48,0,48,48,48);g.addColorStop(0,'rgba(177,188,207,.18)');g.addColorStop(.35,'rgba(138,150,174,.08)');g.addColorStop(1,'rgba(90,104,130,0)');p.fillStyle=g;p.fillRect(0,0,96,96);
    c.globalCompositeOperation='screen';
    for(let i=0;i<14500;i++){
      const t=Math.pow(rand(),.8),arm=i%4,angle=arm*Math.PI/2+t*6.8,r=50+t*1080,spread=22+76*t;
      const x=Math.cos(angle)*r+normal()*spread,y=(Math.sin(angle)*r+normal()*spread)*.66;
      const size=35+rand()*115;c.globalAlpha=(.25+rand()*.7)*(1-t*.55)*.25;c.drawImage(puff,x-size/2,y-size/2,size,size*.8);
    }
    c.globalAlpha=1;
    const core=c.createRadialGradient(0,0,2,0,0,270);core.addColorStop(0,'rgba(225,220,208,.30)');core.addColorStop(.18,'rgba(189,188,184,.23)');core.addColorStop(.55,'rgba(134,143,159,.09)');core.addColorStop(1,'rgba(99,110,133,0)');c.save();c.scale(1,.7);c.fillStyle=core;c.fillRect(-280,-280,560,560);c.restore();
    c.globalCompositeOperation='source-over';
    for(let i=0;i<11500;i++){
      const t=Math.pow(rand(),.73),a=(i%4)*Math.PI/2+t*6.8,r=40+t*1090;
      const x=Math.cos(a)*r+normal()*(18+80*t),y=(Math.sin(a)*r+normal()*(18+80*t))*.66;
      const size=rand()<.025?1.3+rand():.25+rand()*.65;
      c.fillStyle=`rgba(213,221,236,${.12+rand()*.55})`;c.beginPath();c.arc(x,y,size,0,Math.PI*2);c.fill();
    }
    return tex;
  }
  let background=[];
  function resize(){
    const oldFit=fit;width=innerWidth;height=innerHeight;fit=Math.min(width/2300,height/1650)*1.12;
    const ratio=oldFit?camera.scale/oldFit:1;
    const dpr=Math.min(devicePixelRatio||1,2);canvas.width=Math.round(width*dpr);canvas.height=Math.round(height*dpr);ctx.setTransform(dpr,0,0,dpr,0,0);
    animation=null;camera.scale=fit*clamp(ratio,1,width<600?12:8);
    background=Array.from({length:Math.min(550,Math.floor(width*height/2200))},(_,i)=>({x:((i*631.39)%1000)/1000*width,y:((i*419.71)%1000)/1000*height,r:i%7===0?.9:.45,a:.12+(i%9)*.035}));render();
  }
  function render(){if(!raf)raf=requestAnimationFrame(draw);}
  function draw(now){
    raf=0;if(animation){const t=clamp((now-animation.start)/650,0,1),e=1-(1-t)**3;for(const key of ['x','y','scale'])camera[key]=animation.from[key]+(animation.to[key]-animation.from[key])*e;if(t===1)animation=null;}
    ctx.fillStyle='#050609';ctx.fillRect(0,0,width,height);
    for(const s of background){ctx.fillStyle=`rgba(194,205,225,${s.a})`;ctx.fillRect(s.x,s.y,s.r,s.r);}
    ctx.save();ctx.translate(width/2-camera.x*camera.scale,height*.46-camera.y*camera.scale);ctx.scale(camera.scale,camera.scale);if(texture)ctx.drawImage(texture,-1200,-1200);ctx.restore();
    stage.classList.toggle('labels-visible',camera.scale>=fit*1.65);
    for(const star of stars){const p=screen(star),el=elements.get(star.id);el.style.transform=`translate(${p.x}px,${p.y}px)`;el.style.visibility=p.x<-100||p.x>width+100||p.y<-60||p.y>height+60?'hidden':'visible';}
    $('view-scale').textContent=(camera.scale/fit).toFixed(1)+'×';$('intro').classList.toggle('away',!!selected||camera.scale>fit*1.6);
    $('zoom-out').disabled=camera.scale<=fit*1.01;$('zoom-in').disabled=camera.scale>=fit*(width<600?12:8)*.99;
    if(animation)render();
  }
  stage.addEventListener('dragstart',e=>e.preventDefault());
  stage.addEventListener('pointerdown',e=>{
    if(e.pointerType==='mouse'&&e.button!==0)return;
    clearTimeout(tapTimer);animation=null;
    if(e.pointerType==='mouse')e.preventDefault();
    pointers.set(e.pointerId,{x:e.clientX,y:e.clientY});
    if(pointers.size===1){dragged=false;pinched=false;gesture={x:e.clientX,y:e.clientY,cx:camera.x,cy:camera.y,star:e.target.closest('[data-star]')?.dataset.star};}
    else if(pointers.size===2){const [a,b]=[...pointers.values()];pinched=dragged=true;tap=null;gesture={distance:Math.hypot(a.x-b.x,a.y-b.y),scale:camera.scale};}
  });
  stage.addEventListener('pointermove',e=>{
    if(!pointers.has(e.pointerId)||!gesture)return;
    pointers.set(e.pointerId,{x:e.clientX,y:e.clientY});
    if(pointers.size===2&&gesture.distance){const [a,b]=[...pointers.values()];camera.scale=clamp(gesture.scale*Math.hypot(a.x-b.x,a.y-b.y)/gesture.distance,fit,fit*(width<600?12:8));render();return;}
    const dx=e.clientX-gesture.x,dy=e.clientY-gesture.y;
    if(pointers.size===1&&!gesture.distance&&(dragged||Math.hypot(dx,dy)>6)){
      dragged=true;tap=null;stage.classList.add('dragging');stage.setPointerCapture(e.pointerId);
      camera.x=clamp(gesture.cx-dx/camera.scale,-1300,1300);camera.y=clamp(gesture.cy-dy/camera.scale,-1000,1000);render();
    }
  });
  function end(e){
    if(!pointers.has(e.pointerId))return;
    const wasTap=!dragged&&!pinched&&e.type==='pointerup';
    if(e.pointerType==='touch')lastTouch=Date.now();
    if(wasTap&&e.pointerType==='touch'){
      if(tap&&Date.now()-tap.time<340&&Math.hypot(e.clientX-tap.x,e.clientY-tap.y)<32){clearTimeout(tapTimer);tap=null;approach(e.clientX,e.clientY);}
      else{tap={time:Date.now(),x:e.clientX,y:e.clientY};const star=stars.find(s=>s.id===gesture.star&&s.available);if(star)tapTimer=setTimeout(()=>focusStar(star,Math.max(camera.scale,fit*3)),350);}
    }
    pointers.delete(e.pointerId);
    if(pointers.size===1){const [p]=pointers.values();gesture={x:p.x,y:p.y,cx:camera.x,cy:camera.y};}
    else if(!pointers.size){gesture=null;stage.classList.remove('dragging');}
  }
  window.addEventListener('pointerup',end);window.addEventListener('pointercancel',end);
  stage.addEventListener('dblclick',e=>{e.preventDefault();clearTimeout(tapTimer);if(dragged||Date.now()-lastTouch<600)return;approach(e.clientX,e.clientY);});
  stage.addEventListener('wheel',e=>{e.preventDefault();clearTimeout(tapTimer);if(e.deltaY<0){const p=world(e.clientX,e.clientY);focusStar(GalaxyData.nearest(stars,p.x,p.y),camera.scale*1.25);}else zoomOut();},{passive:false});
  stage.addEventListener('keydown',e=>{
    if(['+','=','-','Home','Escape','ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].includes(e.key))e.preventDefault();else return;
    if(e.key==='Home'||e.key==='Escape')overview();else if(e.key==='+'||e.key==='=')approach();else if(e.key==='-')zoomOut();
    else{animation=null;const d=70/camera.scale;camera.x=clamp(camera.x+(e.key==='ArrowRight'?d:e.key==='ArrowLeft'?-d:0),-1300,1300);camera.y=clamp(camera.y+(e.key==='ArrowDown'?d:e.key==='ArrowUp'?-d:0),-1000,1000);render();}
  });
  $('locate').onclick=()=>focusStar(stars.find(s=>s.available&&!s.lit)||stars.find(s=>s.available),fit*(width<600?4:3));
  $('zoom-in').onclick=()=>{if(selected)focusStar(selected,camera.scale*1.8);else approach();};
  $('zoom-out').onclick=zoomOut;$('overview').onclick=overview;$('dismiss-topic').onclick=()=>{selected=null;updateCard();};
  document.querySelectorAll('[data-lang]').forEach(button=>button.onclick=()=>setLanguage(button.dataset.lang));
  window.addEventListener('resize',resize);
  window.addEventListener('storage',e=>{if(!e.key||['calculus-tree-progress-v1','calculus-tree-packs-v1','calculus-tree-glow-v1'].includes(e.key))load();else if(e.key==='skill-tree-language')setLanguage(e.newValue,false);});
  window.addEventListener('pageshow',load);
  texture=nebula();resize();camera={x:0,y:0,scale:fit};load();
})();
