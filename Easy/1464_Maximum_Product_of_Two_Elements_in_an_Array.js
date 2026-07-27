/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    var max1 = 0;
    var max2 = 0;
    var index = 0;
    for(var i = 0; i < nums.length; i++) 
    {
        if(nums[i] > max1)
        {
            max1 = nums[i];
            index = i;
        }
    }
    nums[index] = 0;
    max2 = Math.max(...nums);
    return (max1 - 1) * (max2 - 1);
};