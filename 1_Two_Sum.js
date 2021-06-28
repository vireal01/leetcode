// var twoSum = function (nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         if (nums.includes(target - nums[i]) && nums.indexOf(target - nums[i]) !== i) {
//             return [i, nums.indexOf(target - nums[i])]
//         }
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


