/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestIndex = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        let sum = 0;
        let num = nums[i];
        while (num > 0) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }
        if (sum === i) {
            return i;
        }
    }
    return -1;
};