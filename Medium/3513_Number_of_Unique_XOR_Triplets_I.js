/**
 * @param {number[]} nums
 * @return {number}
 */
var uniqueXorTriplets = function(nums) {
    if (nums.length < 3) return nums.length;
    else 
    {
        return 2**(1 + Math.floor(Math.log2(nums.length)));
    }  
};