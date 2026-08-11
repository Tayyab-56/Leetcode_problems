/**
 * @param {number[]} nums
 * @return {number}
 */
var missingInteger = function(nums) {
    let prefixSum = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if(nums[i] !== nums[i - 1] + 1) {
            break;
        }
        prefixSum += nums[i];
    }
    while (nums.includes(prefixSum)) {
        prefixSum++;
    }
    return prefixSum;
};