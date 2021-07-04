/// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/


var twoSum = function (nums, target) {
for(let i = 0; i < nums.length; i++) {
    const foundIndex = binarySearch(nums, i, nums.length,  target - nums[i])  
    
    if (foundIndex > -1){
        return [i + 1 , foundIndex + 1];
        }
    }
    throw new Error("Invalid state!")
};

function binarySearch(nums, from, to, target) {
    let left = from;
    let right = to;
    while(right - left > 1) {
        const middle = Math.floor((right + left)/2);
        if (nums[middle] === target ) {
            return middle
        } else if(nums[middle] < target ) {
            left = middle
        } else {
            right = middle
        } 
    } return -1;
    
}

