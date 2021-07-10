// https://leetcode.com/problems/longest-substring-without-repeating-characters/
//

var lengthOfLongestSubstring = function(s) {
    let result = 0
    let left = 0
    let right = 0
    let hash = {}

    while (right < s.length){
        if(!hash[s[right]]){
            hash[s[right]] = true;
            right ++
            result = (result < (right - left)? (right - left) : result)
        } if(hash[s[right]]) {
            hash[s[left]] = false;
            left ++;
        }
    } return result
};


