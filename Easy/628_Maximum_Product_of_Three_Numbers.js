/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    if(nums.length <= 3)
    {
        return nums[0] * nums[1] * nums[2];
    }
    nums.sort((a, b) => b - a);
    var max = 0;
    if(nums[0] < 0)
    {
        return nums[0] * nums[1] * nums[2];
    }
    if(nums[0] * nums[1] * nums[2] > nums[0] * nums[nums.length - 1] * nums[nums.length - 2])
    {
        max = nums[0] * nums[1] * nums[2];
    }
    else
    {
        max = nums[0] * nums[nums.length - 1] * nums[nums.length - 2];
    }
    return max;
};