// Binary Tree 
// a. 1 node hanya boleh memiliki 0 >= node <= 2
// b. setiap node tidak boleh terhubung ke child dari parent yang sama
//       a
//     /   \
//    b     c
//   / \   / \
// d    e f   g

// Bukan Binary Tree
//        a
//      /   \
//     b --- c

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node(1);
const b = new Node(2);
const c = new Node(3);
const d = new Node(4);
const e = new Node(5);
const f = new Node(6);
const g = new Node(7);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;
c.right = g;

var sumBinaryTree = function (root) {
  if (root == null) return 0;
  
  const sum = sumBinaryTree(root.left) + sumBinaryTree(root.right);

  return sum + root.val;
}

// console.log(sumBinaryTree(a));

var minValBinaryTree = function (root) {
  if (root == null) return Infinity;

  const min = Math.min(minValBinaryTree(root.left), minValBinaryTree(root.right))

  return Math.min(root.val, min);
}

// console.log(minValBinaryTree(a));

var maxPathSumBinaryTree = function (root) {
  if (root == null) return -Infinity;
  if (root.right == null && root.left == null) return root.val;

  const maxChild = Math.max(maxPathSumBinaryTree(root.left), maxPathSumBinaryTree(root.right));

  return root.val + maxChild;
}

// console.log(maxPathSumBinaryTree(a));

var findTargetBinaryTree = function (root, target) {
  if (root == null) return false;
  if (root.val == target) return true;

  if (findTargetBinaryTree(root.left, target) || 
      findTargetBinaryTree(root.right, target)) {
    return true;
  }
  return false;
}

// console.log(findTargetBinaryTree(a, 7));