// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/

var findDisappearedNumbers = function(nums) {
    let n = nums.length
    let ans = []
    nums = new Set (nums)
    for(let i=1; i <= n; i++){
        nums.has(i)? "k": ans.push(i)
    }return ans
};
