// The width of one level is defined as the length between the end-nodes
// (the leftmost and right most non-null nodes in the level, where the null nodes
// between the end-nodes are also counted into the length calculation.

// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
    const arr = [root, 's']; // 's' is stopper
    const counters = [0]; // levels of the tree

    while (arr.length > 1) {
        const node = arr.shift();

        if (node === 's') {
            counters.push(0);
            arr.push('s');
        } else {
            arr.push(...node.children);
            counters[counters.length - 1]++;
        }
    }

    return counters; // [1, 1, 2, 1]
}

module.exports = levelWidth;