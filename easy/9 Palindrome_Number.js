var isPalindrome = function(x) {
    let stack = []
    for (let i of x.toString()){
        stack.push(i)
    }
    return stack.join('') === stack.reverse().join('')
};