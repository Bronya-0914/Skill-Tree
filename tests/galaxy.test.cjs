const test=require('node:test'),assert=require('node:assert/strict'),data=require('../js/galaxy-data.js');
const pack={topic:{id:'mendelson-calculus',title:'Book'},nodes:[{id:'new.a'},{id:'new.b'}]};
test('subject stars light only when every current node is complete',()=>{
 for(const completed of [[],['new.a'],['new.a','new.a'],['cis221-calculus.functions']])assert.equal(data.build([pack],{completed})[0].lit,false);
 const stars=data.build([pack],{completed:['new.a','new.b','other.node']});assert.equal(stars[0].lit,true);assert.equal(stars[0].count,2);
 assert.ok(stars.length>=25);assert.ok(stars.slice(1).every(s=>!s.available&&!s.lit&&s.total===0));
 assert.equal(data.build([{...pack,nodes:[]}],{completed:[]})[0].lit,false);
});
test('new and imported subjects keep separate progress and deterministic positions',()=>{
 const second={topic:{id:'physics',title:'Physics'},nodes:[{id:'physics.a'}]};
 const stars=data.build([pack,second],{completed:['physics.a']});assert.equal(stars[0].lit,false);assert.equal(stars[1].lit,true);assert.equal(stars[1].en,'Physics');
 assert.deepEqual(data.build([pack]),data.build([pack]));
 assert.equal(data.nearest(stars,stars[1].x,stars[1].y).id,'physics');
 assert.equal(data.nearest([],0,0),null);
});
