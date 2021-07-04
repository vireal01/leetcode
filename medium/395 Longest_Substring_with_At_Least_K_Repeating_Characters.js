
// https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/

var longestSubstring = function(s, k) {
    
    function lenOfTheMaxSubstr(from, to) {
        const mapa = {};
        for(let i = from; i < to; i++){
            mapa[s[i]] = mapa[s[i]] ? (mapa[s[i]] + 1) : 1;
        }

        let pivotElement = -1;
        
        for(let i = from; i < to; i++) {
            if(mapa[s[i]] < k){
                pivotElement = i;
                break;
            }
        }
        
        if(pivotElement === -1){
            return to - from;
        }
        return Math.max(lenOfTheMaxSubstr(from, pivotElement),lenOfTheMaxSubstr(pivotElement + 1, to))
    } 
    
    return lenOfTheMaxSubstr(0, s.length)
};
