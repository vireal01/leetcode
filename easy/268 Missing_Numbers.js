//https://leetcode.com/problems/missing-number/

var missingNumber = function(nums) {
    n = nums.length;
    return (n)*((n+1)/2) - nums.reduce((acc, cur)=> acc+cur)
};
