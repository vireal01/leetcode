//https://leetcode.com/problems/squares-of-a-sorted-array/

var sortedSquares = function(nums) {
    // return nums.map(e => e**2).sort((a,b) => (a - b))

    let result = []
    let left = 0;
    let right = nums.length - 1;

    while(left <= right){
        if(nums[left] **2 > nums[right]**2){
            result.push(nums[left++] **2)
            // left ++;
        } else {
            result.push(nums[right--] **2)
            // right --;
        }
    }
    return result.reverse()

};
