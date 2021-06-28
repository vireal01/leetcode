// var smallerNumbersThanCurrent = function(nums) {
//    ans = new Array;
//    nums.forEach(element => {
//        ans.push((nums.filter(e=> e < element)).length)
//    }); return ans
// };

var smallerNumbersThanCurrent = function(nums) {
    newArr = [...nums].sort((a,b) => a - b)
    return nums.map(e=> e = newArr.indexOf(e))
}



nums = [8,1,2,2,3]
console.log(smallerNumbersThanCurrent(nums));