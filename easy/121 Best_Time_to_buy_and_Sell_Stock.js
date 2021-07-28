//https://leetcode.com/problems/best-time-to-buy-and-sell-stock/ 


var maxProfit = function(prices) {
    let maxProfit = 0
    let minPrice = Number.MAX_SAFE_INTEGER
    
    for(let i=0; i < prices.length; i++){
        if (prices[i] < minPrice){
            minPrice = prices[i]
        } else if (prices[i] - minPrice > maxProfit){
            maxProfit = prices[i] - minPrice
        }
    } return maxProfit
    
};
