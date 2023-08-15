// T: O(n log(n)) //CMIIW
var partition = function (arr, start, end) {
  let pivot = arr[end];
  let i = start - 1;

  for (let j = start; j <= end; j++) {
    if (arr[j] < pivot) {
      i++;
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  };
  i++;
  let temp = arr[i];
  arr[i] = arr[end];
  arr[end] = temp;
  return i;
}

var quickSort = function (arr, start = 0, end = arr.length - 1) {
  if (start >= end) return;

  let index = partition(arr, start, end);
  quickSort(arr, start, index - 1);
  quickSort(arr, index + 1, end);
  return arr;
}


console.log(quickSort([10, 1, 2, 3, 4, 1, 1, -1, 120, 2]));