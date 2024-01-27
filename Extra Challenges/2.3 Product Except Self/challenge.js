function productExceptSelf(nums) {
  const length = nums.length;
  let products = new Array(length).fill(1);

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
