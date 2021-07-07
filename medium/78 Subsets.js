
//https://leetcode.com/problems/subsets/

// 1. cycle from 0 to 2 ** nums.length to iterate through all the possible combination. Example for nums.length = 3 (000, 001, 010, 011, 100, 101, 110, 111)
//  1.1. cycle from 0 to to nums.length to iterate throug all the array positions (j)
//   1.1.1. create a mask to convert position (j) to bits. example: 1<<0 = 001; 1<<1 = 010; 1<<2 = 100 
//   1.1.2. bitwise AND between mask and i
//   1.1.3.1 if bitwise AND result !== 0  - add nums[j] to subAns array
//  1.2. Add subAns to result
// 2. return result


var subsets = function(nums) {
    const result = []
    
    for (let i = 0; i < 2 ** nums.length ; i++){
        let subAns = []
        for (let j = 0; j < nums.length; j++){
            const mask = 1 << j;
            if((i & mask) !== 0 ){
                subAns.push(nums[j])
            }
        }  
        result.push(subAns)
    } return result
};
