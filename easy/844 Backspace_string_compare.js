// https://leetcode.com/problems/backspace-string-compare/



var backspaceCompare = function(s, t) {
    return clear(s) === clear(t)

};

const clear = (str) => {
    let result = []
    for(let i of str){
    (i === '#')? result.pop() : result.push(i);
    }
    return result.join('')
}
