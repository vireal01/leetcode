var removeKdigits = function(num, k) {
    // let counter = k; 
    let stack = [];
    for (let digit of num){
        while(k > 0 && stack.length > 0 && stack[stack.length- 1] > digit) {
            stack.pop();
            k--;
        }
        stack.push(digit);
    }
    stack.reverse()
    while(stack[stack.length- 1] === '0') {
        stack.pop()
    }
    stack.reverse()
    while(k>0){
        stack.pop();
        k--;
    }
    return (stack.length === 0)? "0" : stack.join('')
    
};
