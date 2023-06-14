var containsDuplicates = (nums) => {
  const numSet = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (numSet.has(nums[i])) {
      return true;
    }
    numSet.add(nums[i]);
  }
  return false;
};

console.log(containsDuplicates([1, 2, 3, 1]));
console.log(containsDuplicates([1, 2, 3, 4]));
console.log(containsDuplicates([1, 2, 3, 4, 4]));
