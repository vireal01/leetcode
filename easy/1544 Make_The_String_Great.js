var makeGood = function (s) {
    let stack = []
    for (let i of s) {
        stack.push(i)
        if (stack.length > 1) {
            last = stack[stack.length - 1];
            preLast = stack[stack.length - 2];
            if (isBad(last, preLast)) {
                stack.pop()
                stack.pop()
            }
        }
    } return stack.join('')
};

const isBad = function (last, preLast) {
    return (Math.abs(last.charCodeAt(0) - preLast.charCodeAt(0)) === 32)
}