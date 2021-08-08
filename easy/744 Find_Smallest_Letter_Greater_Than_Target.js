//  https://leetcode.com/problems/find-smallest-letter-greater-than-target/


/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    let left = 0
    let right = letters.length -1
    let middle 
    if(target < letters[0] || target >= letters[letters.length -1]){
        return letters[0]
    }
    
    while(right - left > 0){
        middle = Math.floor((right + left)/2)         
        if (right - left === 1) {
            return letters[right]
        } else if (letters[middle] <= target ){
            left = middle  
        
        } else if (letters[middle] > target) {
            right = middle
        }
    }
};
