var searchRange = function(nums, target) {
    return [getFirstOccurrence(nums, target), getLastOccurrence(nums, target)]
};

function getFirstOccurrence(nums, target) {
    let left = -1;
    let right = nums.length;
    
    while(right - left > 1){
        let middle = Math.floor((right + left)/2)
        
        if(nums[middle] >= target){
            right = middle
        } else {
            left = middle
        }
    } return (nums[right] === target)? right : -1
}

function getLastOccurrence(nums, target) {
    let left = -1;
    let right = nums.length;
    
    while(right - left > 1) {
        let middle = Math.floor((right + left)/2);
        
        if(nums[middle] <= target){
            left = middle
        } else {
            right = middle
        }
    } return (nums[left] === target)? left : -1
}
