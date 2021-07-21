//https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/



/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let product = 1;
    let summ = 0;

    for(let i of n.toString()){
        product *= i;
        summ+=parseInt(i);
    }
    return product - summ
};
