//pseudocode
//Start
//initialize a largest product sum to zero
//create a loop where i is zero and is less than nums.length
//initialize a sum variable to zero
//increase sum and update sum in each iteration
//get the maxsum and update the value based on the sum
//using an if statement return the sum to be zero
//return maxsum
//end

const maxSubArray = (nums) => {
  let maxSum = 0;
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    maxSum = Math.max(maxSum, sum);
    if (sum < 0) {
      sum = 0;
    }
  }
  return maxSum;
};

console.log(maxSubArray([1, 1, 3, -4]));
console.log(maxSubArray([5, 4, -1, 7, 8]));
console.log(maxSubArray([1]));
