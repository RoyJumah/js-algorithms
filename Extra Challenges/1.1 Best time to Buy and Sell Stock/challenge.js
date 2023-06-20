const maxProfit = (prices) => {
  let left = 0;
  let right = 1;
  const largestProfit = 0;

  while (right < prices.length) {
    if (prices[right] > prices[left]) {
      const profit = prices[right] - prices[left];

      maxProfit = Math.max(maxProfit, profit);
    } else {
      left = right;
    }
    right++;
  }
  return largestProfit;
};
