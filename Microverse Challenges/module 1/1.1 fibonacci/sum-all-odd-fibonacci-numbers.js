module.exports = function (num) {
  // write your code here

  let prev = 0;
  let curr = 1;
  let sum = 0;

  while (curr <= num) {
    if (curr % 2 !== 0) {
      sum = sum + curr;
    }

    let next = prev + curr;
    prev = curr;
    curr = next;
  }

  return sum;
};
