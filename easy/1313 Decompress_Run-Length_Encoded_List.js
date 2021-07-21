//https://leetcode.com/problems/decompress-run-length-encoded-list/

// bad solution, but it works
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    let ans = []
    let splittedArray = slpitToChunks(nums, 2)
    for(let chunk of splittedArray){
        for(let j = 0; j < chunk[0]; j+=1){
            ans.push(chunk[1])
        }
    } return ans
};


const slpitToChunks = (arr, chunkSize) => {
    let ans = [];
    for(let i = 0; i < arr.length; i+= chunkSize){
        ans.push(arr.slice(i, i + chunkSize));
    } return ans
}



