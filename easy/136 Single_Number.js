// https://leetcode.com/problems/single-number/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let result = 0
    for(let i of nums){
       result = result ^ i 
    }  return result
};
