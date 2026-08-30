/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDeletions = function(nums) {
    const n = nums.length;
    let min = nums[0];
    let max = nums[0];
    let minindex = 0;
    let maxindex = 0;
    for (let i = 1; i < n; i++) {
        if (nums[i] < min) {
            min = nums[i];
            minindex = i;
        }
        if (nums[i] > max) {
            max = nums[i];
            maxindex = i;
        }
    }
    let left = Math.min(minindex, maxindex);
    let right = Math.max(minindex, maxindex);
    let deleteLeft = right + 1;
    let deleteRight = n - left;
    let deleteBoth = left + 1 + n - right;
    return Math.min(deleteLeft, deleteRight, deleteBoth);
};