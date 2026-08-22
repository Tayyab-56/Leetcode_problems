/**
 * @param {number} n
 * @return {boolean}
 */
var checkDivisibility = function(n) {
    let digitSum = 0;
    let digitProduct = 1;
    let originalN = n;
    while (n > 0) {
        const digit = n % 10;
        digitSum += digit;
        digitProduct *= digit;
        n = Math.floor(n / 10);
    }
    let flag = false;
    if(originalN % (digitSum + digitProduct) === 0) {
        flag = true;
    }
    return flag;
};