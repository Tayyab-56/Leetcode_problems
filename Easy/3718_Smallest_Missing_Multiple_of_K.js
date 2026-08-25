/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var missingMultiple = function(nums, k) {
    let sortarr = nums.sort((a, b) => a - b);
    let multiple = 0;
    for (let i = 0; i < sortarr.length; i++) {
        let newMul = multiple;
        if (sortarr[i] % k === 0) {
            multiple = sortarr[i]/k;
            if(multiple > newMul + 1) {
                return (newMul + 1) * k;
            }
        }
    }
    return (multiple + 1) * k;
};