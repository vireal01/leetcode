// https://leetcode.com/problems/longest-common-prefix/



var longestCommonPrefix = function(strs) {
    let result = ""
    let curLetter = ""
    strs.sort((a, b) => a.length - b.length);
    for(let i = 0; i < strs[0].length; i++){  // letters
        if(curLetter === ""){
            curLetter = strs[0][i]
        }
        for(let j = 0; j < strs.length; j++){ //words
            if(strs[j][i] !== curLetter){
                return result
            }
        } result += curLetter;
        curLetter = ''
    } return result
};
