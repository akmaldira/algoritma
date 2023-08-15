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

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");
const g = new Node("g");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;
c.right = g;

// T: O(n)
var stackExample = function (root) {
  // if (root == null) return "";
  // const stack = [root];
  // let result = "";
  // while (stack.length) {
  //   const curr = stack.pop();
  //   if (curr.right) stack.push(curr.right);
  //   if (curr.left) stack.push(curr.left);
  //   result += curr.val;
  // };
  // return result;

  if (root == null) return [];
  const left = stackExample(root.left);
  const right = stackExample(root.right);

  return [root.val, ...left, ...right]
};

console.log(stackExample(a));
