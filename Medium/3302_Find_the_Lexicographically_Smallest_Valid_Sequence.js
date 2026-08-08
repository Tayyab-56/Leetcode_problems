/**
 * @param {string} word1
 * @param {string} word2
 * @return {number[]}
 */
var validSequence = function(word1, word2) {
    const n = word1.length;
    const m = word2.length;
    if (m > n) {
        return [];
    }
    const dp = new Int32Array(n + 1);
    let j = m - 1;
    for (let i = n - 1; i >= 0; i--) {
        if (
            j >= 0 &&
            word1.charCodeAt(i) === word2.charCodeAt(j)
        ) {
            dp[i] = dp[i + 1] + 1;
            j--;
        } else {
            dp[i] = dp[i + 1];
        }
    }
    const ans = new Array(m);
    let i = 0;
    j = 0;
    while (i < n && j < m) {
        if (word1.charCodeAt(i) === word2.charCodeAt(j)) {
            ans[j] = i;
            i++;
            j++;
        }
        else if (
            dp[i + 1] >= m - j - 1
        ) {
            ans[j] = i;
            i++;
            j++;
            break;
        }
        else {
            i++;
        }
    }
    while (i < n && j < m) {
        if (
            word1.charCodeAt(i) ===
            word2.charCodeAt(j)
        ) {
            ans[j] = i;
            j++;
        }
        i++;
    }
    if (j !== m) {
        return [];
    }
    return ans;
};