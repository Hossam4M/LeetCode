/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x === 0 || x === 1) return x;
    if (x === 2) return 1;
    
    for (let i = 1; i <= Math.ceil(x / 2); i++) {
        if (Math.floor((x / i) - i) === 0) return i;
        if (Math.floor((x / i) - i) === -1) return i - 1;
    }
};