/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var resultArray = function(nums, k) {
    let arr = new Array(k).fill(0);
    let current = new Array(k).fill(0);
    for(let num of nums)
    {
        let next = new Array(k).fill(0);
        next[num % k]++;
        for (let r = 0; r < k; r++) {
            let newRemainder = (r * num) % k;
            next[newRemainder] += current[r];
        }
        for (let r = 0; r < k; r++) {
            arr[r] += next[r];
        }
        current = next;
    }
    return arr;
};