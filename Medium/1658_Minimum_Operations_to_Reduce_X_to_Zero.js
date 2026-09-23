/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minOperations = function(nums, x) {
    let total = 0;
    for (let num of nums) {
        total += num;
    }
    let target = total - x;
    if (target < 0) {
        return -1;
    }
    let left = 0;
    let sum = 0;
    let maxLength = -1;
    for (let right = 0; right < nums.length; right++) {
        sum += nums[right];
        while (sum > target && left <= right) {
            sum -= nums[left];
            left++;
        }
        if (sum === target) {
            maxLength = Math.max(maxLength, right - left + 1);
        }
    }
    if (maxLength === -1) {
        return -1;
    }
    return nums.length - maxLength;
};