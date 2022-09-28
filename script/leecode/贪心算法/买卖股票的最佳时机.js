/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let profit = 0, n = prices.length;
    if (n == 1) return 0;
    for (let i = 0; i <= prices.length - 2; i++) {
        let price = prices[i + 1] - prices[i];
        if (price > 0) {
            profit += price;
        }
    }
    return profit
};

let result = maxProfit([1,2,3,4,5]);

console.log(result);