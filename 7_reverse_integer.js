// var reverse = function (x) {
//     let reversedX = String(Math.abs(x)).split('').reverse().join('');
//     return (reversedX > 0x7fffffff) ? 0 : (reversedX * Math.sign(x))
// }

var reverse = function (x) {
    let sign = Math.sign(x)
    let res = 0
    x = Math.abs(x)
    while (x) {
        let div = x % 10;
        x = Math.floor(x / 10);
        res = res * 10 + div
    }
    return res > 0x7fffffff ? 0 : res * sign
}




console.log(reverse(-0123));