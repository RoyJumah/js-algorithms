//pseudocode

//Start
// initialize maxProduct as the first element of the nums array
// initialize minProduct as the first element of the nums array
//initialize a variable named result as the maxProduct
// create a for loop with i as 1 and less than nums.length
//create a if statement that swaps a minProduct and maxProduct if num[i] is less than zero
// find the maxProduct using Math.max and swap num[i] with the value of nums[i]* maxProduct
// find the mainProduct using Math.max and swap num[i] with the value of nums[i]* minProduct
//update the value of result by replacing the result with the updated value of maxProduct
//return result
//end

const maxProductSubArray = (nums) => {
  var maxProduct = nums[0];
  var minProduct = nums[0];
  var result = maxProduct;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < 0) {
      let temp = maxProduct;
      maxProduct = minProduct;
      minProduct = temp;
    }

    maxProduct = Math.max(nums[i], nums[i] * maxProduct);
    minProduct = Math.max(nums[i], nums[i] * minProduct);
    result = Math.max(result, maxProduct);
  }

  return result;
};

console.log(maxProductSubArray([2, 3, -2, 4]));
console.log(maxProductSubArray([-2, 0, -1]));
