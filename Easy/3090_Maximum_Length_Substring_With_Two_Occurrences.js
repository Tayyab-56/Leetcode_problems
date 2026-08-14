/**
 * @param {string} s
 * @return {number}
 */
var maximumLengthSubstring = function(s) {
    const count = new Array(26).fill(0);
    let left = 0;
    let ans = 0;
    for (let right = 0; right < s.length; right++) {
        const index = s.charCodeAt(right) - 97;
        count[index]++;
        while (count[index] > 2) {
            const leftIndex = s.charCodeAt(left) - 97;
            count[leftIndex]--;
            left++;
        }
        ans = Math.max(ans, right - left + 1);
    }
    return ans;
};