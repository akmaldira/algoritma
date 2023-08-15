class LinkedList {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new LinkedList(1);
const b = new LinkedList(4);
const c = new LinkedList(3);
const d = new LinkedList(2);
const e = new LinkedList(5);
const f = new LinkedList(2);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

var partitionList = function(head, x) {
  let left = new LinkedList(0);
  let left_head = left;
  let right = new LinkedList(0);
  let right_head = right;
  while (head != null) {
      if (head.val < x) {
          left.next = head;
          left = left.next;
      } else {
          right.next = head;
          right = right.next;
      }
      head = head.next;
  }
  right.next = null;
  left.next = right_head.next;
  return left_head.next;
};

console.log(partitionList(a, 3));