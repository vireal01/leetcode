/// https://leetcode.com/problems/majority-element/

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    // Sorting solution

    // nums.sort();
    // return nums[Math.floor(nums.length/2)]


    // Hash-map solution 

    // let map = {};
    // for (let i of nums) {
    //     map[i] = map[i] ? map[i] +=1 : 1;
    // }

    // for(let k of Object.keys(map)){
    //     if(map[k] > Math.floor(nums.length/2)){
    //         return k
    //     }
    // }


    //  Divide and Conquer
    return findMajorityOnInterval(nums, 0, nums.length - 1);
};


function findMajorityOnInterval(arr, from, to) {
    if (from === to) {
        return arr[from]
    }
    const middle = Math.floor((from + to) / 2)

    const leftMajority = findMajorityOnInterval(arr, from, middle);
    const rightMajority = findMajorityOnInterval(arr, middle + 1, to);

    if (leftMajority === rightMajority) {
        return leftMajority;
    }

    const leftCount = count(arr, leftMajority, from, to)
    const rightCount = count(arr, rightMajority, from, to)
    return leftCount > rightCount ? leftMajority : rightMajority
}

function count(arr, whatTosearch, from, to) {
    let count = 0;

    for (let i = from; i <= to; i++) {
        if (arr[i] === whatTosearch) {
            count++;
        }

    } return count
}

