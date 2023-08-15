class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const head = new Node(1);
const x = new Node(2);
const y = new Node(2);
const z = new Node(1);

head.next = x;
x.next = y;
y.next = z;

var reverse = function (head) {
  let current = head;
  let prev = null;
  let next;

  while (current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
}

// T: O(n) //CMIIW
var isPalindrome = function(head) {
  let fast = head;
  let slow = head;
  let pointer = head;
  let length = 0;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
    length++;
  };

  let mid = reverse(slow);

  while(length) {
    length--;
    if (mid.val !== pointer.val) return false;
    mid = mid.next;
    pointer = pointer.next;
  }

  return true;
};

console.log(isPalindrome(head));