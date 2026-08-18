/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestInteger = function(nums, k) {
    const n = nums.length;
    const freq = new Map();
    for (const num of nums) {
        freq.set(num, (freq.get(num) || 0) + 1);
    }
    if (k === 1) {
        let ans = -1;
        for (const [num, count] of freq) {
            if (count === 1) {
                ans = Math.max(ans, num);
            }
        }
        return ans;
    }
    if (k === n) {
        return Math.max(...nums);
    }
    let ans = -1;
    if (freq.get(nums[0]) === 1) {
        ans = Math.max(ans, nums[0]);
    }
    if (freq.get(nums[n - 1]) === 1) {
        ans = Math.max(ans, nums[n - 1]);
    }
    return ans;
};