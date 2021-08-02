//https://leetcode.com/problems/range-sum-query-immutable/


/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    let summs = []
    
    let curSumm = 0
    for(let number of nums) {
        summs.push(curSumm + number);
        curSumm = summs[summs.length - 1]
    }
    this.summs = summs
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    if(left === 0){
        return this.summs[right]
    }
    return this.summs[right] - this.summs[left -1 ]
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
