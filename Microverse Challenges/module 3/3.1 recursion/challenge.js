function resursiveSum(num, total = 0) {
  if (num <= 0) {
    return total;
  }
  return resursiveSum(num - 1, total + num);
}

console.log(resursiveSum(4));

module.exports = resursiveSum;
