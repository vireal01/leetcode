//https://leetcode.com/problems/contains-duplicate/

var containsDuplicate = function(nums) {
    let set = {}
    for(let i of nums){
        if(set[i] === undefined){
            set[i] = false
        } else return true
    } return false
};
