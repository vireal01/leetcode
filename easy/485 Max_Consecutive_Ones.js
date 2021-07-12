//https://leetcode.com/problems/max-consecutive-ones/

var findMaxConsecutiveOnes = function(nums) {
    let counter = 0;
    let maxCounter = 0;
    for (let i = 0; i < nums.length; i++){
        if(nums[i] === 1){
            counter+=1
        } else {
            counter = 0
        }
        maxCounter = counter > maxCounter ? counter : maxCounter
    } return maxCounter
};
