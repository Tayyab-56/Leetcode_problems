/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
    const minNum = Math.min(...nums);
    const maxNum = Math.max(...nums);
    var result = gcd(minNum, maxNum);
    return result;
};

const gcd = (a, b) => {
    while (b !== 0) 
    {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
};