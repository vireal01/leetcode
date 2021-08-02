// https://leetcode.com/problems/find-all-duplicates-in-an-array/

var findDuplicates = function(nums) {
    let hash = {}
    let ans = []
    for(let i = 0; i < nums.length; i++){
        if(hash[nums[i]] === undefined){
            hash[nums[i]] = true
        } else {
            ans.push(nums[i])
        }
    } return ans
};

