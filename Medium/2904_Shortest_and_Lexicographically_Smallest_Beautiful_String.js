/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var shortestBeautifulSubstring = function (s, k) {
    let n = s.length;
    let result = "";
    for (let left = 0; left < n; left++) {
        if (s[left] !== '1') continue;
        let count = 0;
        for (let right = left; right < n; right++) {
            if (s[right] === '1') {
                count++;
            }
            if (count === k) {
                while (left < right && s[left] === '0') {
                    left++;
                }
                let substring = s.slice(left, right + 1);
                if (result === "" || substring.length < result.length ||
                    (substring.length === result.length && substring < result)) {
                    result = substring;
                }
                break;
            }
        }
    }
    return result;
};