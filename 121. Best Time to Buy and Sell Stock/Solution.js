/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let buy = -1;
    let sell = -1;

    let result = -1

    for (const [index, price] of prices.entries()) {
        if (index === 0) {
            buy = price
            sell = price
            result = 0
        } else {
            if (sell < price) {
                sell = price;
                result = Math.max(0, sell - buy, result)
            }

            if (buy > price) {
                buy = price;
                sell = price;
                result = Math.max(0, sell - buy, result)
            }
        }
    }

    return result
};