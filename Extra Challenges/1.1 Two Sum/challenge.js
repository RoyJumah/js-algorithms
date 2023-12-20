const TwoSum = (nums, target) => {
  //Two Sum Approach
  // nums.sort((a, b) => a - b);
  // let left = 0;
  // let right = nums.length - 1;
  // while (left < right) {
  //   const sum = nums[left] + nums[right];
  //   if (sum === target) {
  //     return [nums[left], nums[right]];
  //   } else if (sum < target) {
  //     left++;
  //   } else {
  //     right--;
  //   }
  // }
  // return [];
  //Map Approach

  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];

    if (map.has(complement)) {
      return [map.get(complement), i];
    }

    map.set(nums[i], i);
  }
  return [];
};

console.log(TwoSum([1, 3, 4, 5], 9));

// 9-1 = 8 (1, 0), 3, 1, 4, 2,
