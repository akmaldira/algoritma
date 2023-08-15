var twoSum = function(nums, target, newNums=[]) {
  if (target == 0) return [];
  if (target < 0) return false;

  for (let i = 0; i < nums.length; i++) {
      let reminder = target - nums[i];
      nums.splice(i, 1);
      if (newNums.length < 0) newNums = nums;
      const reminderResult = twoSum(newNums, reminder, newNums);
      if (reminderResult) {
        return [...reminderResult, i]
      }

  }

  return false;
};

console.log(twoSum([3,2,4], 6));