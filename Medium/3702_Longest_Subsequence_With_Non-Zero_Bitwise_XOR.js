/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubsequence = function(nums) {
    let ans = 1;
    let result = 0;
    let j = 0;
    let temp = nums[0];
    for (let i = 1; i < nums.length; i++) {
        temp ^= nums[i];
        if (temp !== 0) {
            ans++;
            j = i;
            break;
        }
    }
    if(j === nums.length-1) {
        return ans;
    }
    for (let i = j+1; i < nums.length; i++) {
        temp ^= nums[i];
        if (temp !== 0) {
            ans++;
        }
        else {
            temp = nums[i];
            result = Math.max(result, ans);
            ans = 1;
        }
    }
    return Math.max(result, ans);
};