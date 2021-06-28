var removeDuplicates = function (s) {
    let stack = []
    for (let i of s) {
        if (stack.length !== 0) {
            lastInStack = stack.pop()
            if (lastInStack !== i) {
                stack.push(lastInStack);
                stack.push(i)
            }
        } else {
            stack.push(i)
        }
    } return stack.join('')
};