var peakIndexInMountainArray = function(arr) {
    let left = -1;
    let right = arr.length;
    
    while(right - left > 1) {
        let middle  = Math.floor((left + right)/2);
        if(arr[middle] < arr[middle + 1]){
            left = middle
        } else {
            right = middle
        }
    } return left + 1
};
