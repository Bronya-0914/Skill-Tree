'use strict';

// Presentation-only graph. The original parents remain the authority for unlocking.
const SkillTreeLayout = (() => {
  const nodeWidth = 282;
  const nodeHeight = 74;
  const layerStep = 168;
  const columnStep = 350;
  const prefix = 'cis221-calculus.';
  // Approved preview: id, x, y, original prerequisites, displayed parent.
  const preview = [
    ["start", 1572, 65, [], null],
    ["functions", 1572, 233, ["start"], "start"],
    ["graphs", 1572, 401, ["functions"], "functions"],
    ["trigonometry", 495, 905, ["graphs"], "graphs"],
    ["exp-log", 205, 1073, ["functions"], "functions"],
    ["rates", 1572, 569, ["graphs"], "graphs"],
    ["limits", 1572, 737, ["rates"], "rates"],
    ["power", 1572, 905, ["limits"], "limits"],
    ["product-quotient", 785, 1073, ["power"], "power"],
    ["elementary", 785, 1241, ["product-quotient", "trigonometry", "exp-log"], "product-quotient"],
    ["chain", 785, 1409, ["elementary", "product-quotient"], "elementary"],
    ["implicit", 234, 1577, ["chain"], "chain"],
    ["extrema", 1809, 1073, ["power"], "power"],
    ["optimization", 1809, 1241, ["extrema", "graphs"], "extrema"],
    ["surfaces", 1178, 905, ["functions", "graphs"], "graphs"],
    ["partials", 706, 1577, ["surfaces", "chain"], "chain"],
    ["higher-implicit", 549, 1745, ["partials", "implicit"], "partials"],
    ["multi-chain", 864, 1745, ["partials", "chain"], "partials"],
    ["antiderivatives", 2360, 1073, ["power"], "power"],
    ["elementary-integrals", 2124, 1409, ["antiderivatives", "elementary"], "antiderivatives"],
    ["definite", 2596, 1241, ["antiderivatives"], "antiderivatives"],
    ["integral-properties", 2439, 1409, ["definite", "trigonometry"], "definite"],
    ["substitution", 2124, 1577, ["elementary-integrals", "chain"], "elementary-integrals"],
    ["integral-applications", 2754, 1577, ["definite", "elementary-integrals"], "definite"],
    ["linearization", 1336, 1577, ["chain"], "chain"],
    ["taylor", 1179, 1745, ["linearization", "elementary"], "linearization"],
    ["newton-roots", 1494, 1745, ["linearization", "chain"], "linearization"],
    ["newton-optimization", 1494, 1913, ["newton-roots", "optimization", "taylor"], "newton-roots"]
  ];
  const fullId = id => id === 'start' ? id : prefix + id;

  function build(nodes) {
    const byId = new Map(nodes.map(node => [node.id, node]));
    const ancestors = new Map();
    const depth = new Map();
    function visit(id) {
      if (ancestors.has(id)) return ancestors.get(id);
      const node = byId.get(id);
      const result = new Set();
      let level = 0;
      for (const parentId of node.parents) {
        for (const ancestor of visit(parentId)) result.add(ancestor);
        result.add(parentId);
        level = Math.max(level, depth.get(parentId) + 1);
      }
      ancestors.set(id, result);
      depth.set(id, level);
      return result;
    }
    for (const node of nodes) visit(node.id);

    const matchesPreview = nodes.length === preview.length && preview.every(([id, x, y, parents]) => {
      const node = byId.get(fullId(id));
      return node && node.parents.length === parents.length && parents.every(parent => node.parents.includes(fullId(parent)));
    });
    const preferred = new Map(preview.filter(row => row[4]).map(row => [fullId(row[0]), fullId(row[4])]));
    const primary = new Map();
    const additional = new Map();
    const children = new Map(nodes.map(node => [node.id, []]));
    for (const node of nodes) {
      // A prerequisite already implied by another prerequisite needs no extra wire.
      const direct = node.parents.filter(parent => !node.parents.some(other => other !== parent && ancestors.get(other).has(parent)));
      if (!direct.length) continue;
      let parent = direct[0];
      if (matchesPreview) parent = preferred.get(node.id);
      primary.set(node.id, parent);
      additional.set(node.id, direct.filter(id => id !== parent));
      children.get(parent).push(node);
    }

    if (matchesPreview) {
      for (const [id, x, y] of preview) Object.assign(byId.get(fullId(id)), {x, y});
    } else {
      // Imported or changed packs use non-overlapping subtrees with the same visual grammar.
      let column = 0;
      function place(node) {
        const branch = children.get(node.id);
        branch.sort((a, b) => a.id.localeCompare(b.id));
        for (const child of branch) place(child);
        node.x = branch.length ? (branch[0].x + branch[branch.length - 1].x) / 2 : 180 + column++ * columnStep;
        node.y = 65 + depth.get(node.id) * layerStep;
      }
      place(byId.get('start'));
    }
    const minX = Math.min(...nodes.map(node => node.x)) - nodeWidth / 2 - 24;
    // Reserve room for long titles in imported prerequisite badges as well as cards.
    const maxX = Math.max(...nodes.map(node => node.x + (additional.get(node.id)?.length ? 267 : nodeWidth / 2))) + 24;
    const maxY = Math.max(...nodes.map(node => node.y)) + nodeHeight / 2 + 24;
    return {byId, primary, additional, children, bounds:{minX, maxX, maxY}, nodeWidth, nodeHeight};
  }
  return {build};
})();
if (typeof module !== 'undefined') module.exports = SkillTreeLayout;
