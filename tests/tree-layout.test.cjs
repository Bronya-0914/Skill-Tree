const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const packs = require('../js/topic-packs.js');
const layout = require('../js/tree-layout.js');
const bundled = JSON.parse(JSON.stringify(vm.runInNewContext(
  fs.readFileSync(path.join(__dirname, '../learning-packs/catalog.js'), 'utf8') + '\nLEARNING_PACKS')));
const makeNodes = () => [{id:'start', title:'Start', parents:[]}, ...packs.buildLessons(bundled)];

function verifyGraph(nodes) {
  const original = nodes.map(node => [...node.parents]);
  const result = layout.build(nodes);
  assert.deepEqual(nodes.map(node => node.parents), original);
  assert.equal(result.primary.size, nodes.length - 1);
  for (const node of nodes) {
    assert.ok(Number.isFinite(node.x) && Number.isFinite(node.y));
    for (const id of node.parents) assert.ok(result.byId.get(id).y < node.y);
    const originalAncestors = new Set();
    const visibleAncestors = new Set();
    function walk(id, set, displayed) {
      const current = result.byId.get(id);
      const parents = displayed
        ? [result.primary.get(id), ...(result.additional.get(id) || [])].filter(Boolean)
        : current.parents;
      for (const parent of parents) {
        if (set.has(parent)) continue;
        set.add(parent);
        walk(parent, set, displayed);
      }
    }
    walk(node.id, originalAncestors, false);
    walk(node.id, visibleAncestors, true);
    assert.deepEqual(visibleAncestors, originalAncestors);
  }
  for (let i = 0; i < nodes.length; i++) {
    for (const other of nodes.slice(i + 1)) {
      assert.ok(Math.abs(nodes[i].x-other.x) >= result.nodeWidth || Math.abs(nodes[i].y-other.y) >= result.nodeHeight);
    }
  }
  // Straight stems and branch bars must not run through unrelated course cards.
  for (const parent of nodes) {
    const children = result.children.get(parent.id);
    if (!children.length) continue;
    const busY = parent.y + result.nodeHeight / 2 + 25;
    for (const child of children) {
      for (const obstacle of nodes) {
        if (obstacle === parent || obstacle === child) continue;
        const halfWidth = result.nodeWidth / 2;
        const halfHeight = result.nodeHeight / 2;
        const crossesStem = Math.abs(child.x-obstacle.x) < halfWidth && obstacle.y+halfHeight > busY && obstacle.y-halfHeight < child.y-halfHeight;
        const crossesBar = Math.abs(busY-obstacle.y) < halfHeight && obstacle.x+halfWidth > Math.min(parent.x,child.x) && obstacle.x-halfWidth < Math.max(parent.x,child.x);
        assert.ok(!crossesStem && !crossesBar, `${parent.id} -> ${child.id} crosses ${obstacle.id}`);
      }
    }
  }
  return result;
}

test('approved full tree keeps all prerequisites and has one clear incoming stem per course', () => {
  const result = verifyGraph(makeNodes());
  assert.equal([...result.additional.values()].flat().length, 10);
  assert.ok([...result.children.values()].every(children => children.length <= 3));
  const id = suffix => 'cis221-calculus.' + suffix;
  assert.equal(result.primary.get(id('elementary')), id('product-quotient'));
  assert.deepEqual(result.additional.get(id('elementary')), [id('trigonometry'), id('exp-log')]);
  assert.equal(result.byId.get(id('functions')).x, result.byId.get('start').x);
});

test('modified and imported packs use a safe layout, with their full prerequisite graph', () => {
  const nodes = makeNodes();
  nodes.push({id:'custom.review', title:'Review', parents:['cis221-calculus.elementary', 'cis221-calculus.definite']});
  verifyGraph(nodes);
  nodes.find(node => node.id.endsWith('.surfaces')).parents = ['cis221-calculus.power'];
  verifyGraph(nodes);
});

test('wide and deep libraries fit supported 300-course layouts', () => {
  const wide = [{id:'start', title:'Start', parents:[]}];
  for (let index = 0; index < 300; index++) wide.push({id:`course.${index}`, title:`Lesson ${index}`, parents:['start']});
  verifyGraph(wide);
  const deep = [{id:'start', title:'Start', parents:[]}];
  for (let index = 0; index < 300; index++) deep.push({id:`course.${index}`, title:`Lesson ${index}`, parents:[index ? `course.${index-1}` : 'start']});
  verifyGraph(deep);
});
