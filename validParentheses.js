// T: O(n) //CMIIW
var isValid = function(s) {
  let hashMap = { "{": "}", "(": ")", "[": "]" };
  let stack = [];
  for (const o of s) {
    if (hashMap[o]) {
      stack.push(hashMap[o]);
    } else if (stack.length > 0 && stack[stack.length - 1] === o) {
      stack.pop();
    } else {
      return false;
    }
  }
  return stack.length === 0;
}

console.log(isValid("({}})"));
