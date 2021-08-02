//https://leetcode.com/problems/maximum-subarray/

var maxSubArray = function(nums) {
    let ans = nums[0]
    for(let i = 0; i < nums.length - 1; i++){
        if(nums[i+1] + nums[i] > nums[i+1]){
            nums[i+1] = nums[i] + nums[i+1];
            nums[i+1] > ans ? ans = nums [i+1] : 'k'
        } else {
            ans = nums[i+1] > ans ? nums[i+1] : ans
        }
    } return ans
};


