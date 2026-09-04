/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var firstStableIndex = function(nums, k) {
    let n = nums.length;
    for (let i = 0; i < n; i++) {
        let max = Math.max(...nums.slice(0, i + 1));
        let min = Math.min(...nums.slice(i));

        if (max - min <= k) {
            return i;
        }
    }
    return -1;
};