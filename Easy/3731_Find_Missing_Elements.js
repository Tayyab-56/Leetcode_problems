/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findMissingElements = function(nums) {
    const n = nums.length;
    const min = Math.min(...nums);
    const max = Math.max(...nums);
    const missingElements = [];
    for (let i = min; i <= max; i++) {
        if (!nums.includes(i)) {
            missingElements.push(i);
        }
    }
    return missingElements;
};