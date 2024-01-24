function productExceptSelf(nums) {
  /*
  start
  initialize a varible (length) to store the length of the nums array
  create a new array called products which is the same length as the nums array and fill it will 1

  initialize a for loop and create constraints with i being 1 and less than length which 
  calculate the products from the left start from the second element of the array and store the result in products

  initialize a new variable named right which has the same length as the nums array which is 4
create a for loop that i should start from the second last element of the array and reduce with each iteration
calculate the products by multiply the elements in product with the right
return products



  */

  const length = nums.length;
  const products = new Array(length).fill(1);

  for (let i = 1; i < length; i++) {
    products[i] = products[i - 1] * nums[i - 1];
  }

  let right = nums[length - 1];
  for (let i = length - 2; i >= 0; i--) {
    products[i] *= right;
    right *= nums[i];
  }

  return products;
}

console.log(productExceptSelf([1, 2, 3, 4]));
console.log(productExceptSelf([-1, 1, 0, -3, 3]));
