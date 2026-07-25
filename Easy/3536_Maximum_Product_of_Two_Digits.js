/**
 * @param {number} n
 * @return {number}
 */
var maxProduct = function(n) {
    const digits = n.toString().split('').map(Number);
    var max = 0;
    var max1 = 0;
    var index = 0;
    for (let i = 0; i < digits.length; i++) {
        if (digits[i] > max) {
            max = digits[i];
            index = i;
        }
    }
    digits[index] = 0;
    max1 = Math.max(...digits);
    return max * max1;
};