// var twoSum = function (nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         if (nums.includes(target - nums[i]) && nums.indexOf(target - nums[i]) !== i) {
//             return [i, nums.indexOf(target - nums[i])]
//         }
//     }
// }

// O(n) time | O(n) space
// var twoSum = function (nums, target) {
//     let hash = {}
//     for(let i = 0; i < nums.length; i++) {
//         if(hash[nums[i]] !== undefined){
//            return [hash[nums[i]], i]
//        } else {
//            hash[target - nums[i]] = i
//        }
//     }
// }



var twoSum = function (nums, target) {
    const map = {};
    for (let i = 0; i <= nums.length; i++) {
        if (target - nums[i] in map) {
            return [map[target - nums[i]], i]
        } else {
            map[nums[i]] = i
        }
    }
}


nums = [3, 3], target = 6

console.log(twoSum(nums, target));


