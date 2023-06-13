module.exports = function sqrt(number) {
  return sqrt_recursive(number, 0, number);
};
function sqrt_recursive(number, min_interval, max_interval) {
  const mid = (min_interval + max_interval) / 2;

  if (mid * mid === number) {
    return mid;
  } else if (mid * mid < number) {
    return sqrt_recursive(number, mid, max_interval);
  } else {
    return sqrt_recursive(number, min_interval, mid);
  }
}
