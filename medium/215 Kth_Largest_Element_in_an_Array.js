// https://leetcode.com/problems/kth-largest-element-in-an-array/


//quick select

var findKthLargest = function(nums, k) {
    const idx = partition(nums, 0, nums.length - 1);
    
    if(idx === k-1){
        return nums[idx]
    }
    
    if(idx >= k){
        return findKthLargest(nums.slice(0, idx), k)
    }        
    return findKthLargest(nums.slice(idx + 1), k - idx - 1)
};

function partition(nums, from, to) {
    let pivot = from
    for(let i = from; i < to; i++){
        if(nums[i] > nums[to]){
            [nums[pivot], nums[i]] = [nums[i], nums[pivot]]
            pivot++;
        }  
    }
    [nums[pivot], nums[to]] = [nums[to], nums[pivot]]
    
    return pivot;
    
}
