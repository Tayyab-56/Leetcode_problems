/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var gcdValues = function (nums, queries) {
    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > max)
            max = nums[i];
    }
    let count = new Array(max + 1).fill(0);
    let div = new Array(max + 1).fill(0);
    let gcdPairs = new Array(max + 1).fill(0);
    for (let i = 0; i < nums.length; i++) {
        count[nums[i]]++;
    }
    for (let i = 1; i <= max; i++) {
        for (let j = i; j <= max; j += i) {
            div[i] += count[j];
        }
    }
    for (let i = max; i >= 1; i--) {
        gcdPairs[i] = (div[i] * (div[i]-1)) / 2;
        for (let j = 2 * i; j <= max; j += i) {
            gcdPairs[i] -= gcdPairs[j];
        }
    }
    for (let i = 1; i <= max; i++) {
        gcdPairs[i] += gcdPairs[i - 1];
    }
    let answer = [];
    queries.forEach((query) => {
        let left = 1;
        let right = max;
        let ans = -1;
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);

            if (gcdPairs[mid] > query) {
                ans = mid;
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        answer.push(ans);
    });
    return answer;
};