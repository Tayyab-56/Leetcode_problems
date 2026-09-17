/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxPalindromes = function(s, k) {
    const n = s.length;
    const dp = Array.from({ length: n }, () => Array(n).fill(false));
    for (let r = 0; r < n; r++) {
        for (let l = r; l >= 0; l--) {
            if (s[l] === s[r] && (r - l <= 2 || dp[l + 1][r - 1])) {
                dp[l][r] = true;
            }
        }
    }
    let count = 0;
    let left = 0;
    for (let right = k - 1; right < n; right++) {
        let start = right - k + 1;
        while (start >= left) {
            if (dp[start][right]) {
                count++;
                left = right + 1;
                break;
            }
            start--;
        }
    }
    return count;
};