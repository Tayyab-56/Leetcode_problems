/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number[]}
 */
var lexicographicallySmallestArray = function (nums, limit) {
    const n = nums.length;
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push([nums[i], i]);
    }
    arr.sort((a, b) => a[0] - b[0]);
    let ans = new Array(n);
    let i = 0;
    while (i < n) {
        let j = i;
        while (j + 1 < n && arr[j + 1][0] - arr[j][0] <= limit) {
            j++;
        }
        let indices = [];
        for (let k = i; k <= j; k++) {
            indices.push(arr[k][1]);
        }
        indices.sort((a, b) => a - b);
        for (let k = i; k <= j; k++) {
            ans[indices[k - i]] = arr[k][0];
        }
        i = j + 1;
    }
    return ans;
};