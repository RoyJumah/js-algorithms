const TwoSum = (nums, target) => {
  nums.sort((a, b) => a - b);
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const sum = nums[left] + nums[right];

    if (sum === target) {
      return [nums[left], nums[right]];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  return [];
};
console.log(TwoSum([1,3,4,5],2))
console.log(TwoSum([1,3,4,5],9))