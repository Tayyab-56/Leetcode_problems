/**
 * @param {number[]} stoneValue
 * @return {number}
 */
var stoneGameV = function(stoneValue) {
    const n = stoneValue.length;
    const prefix = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) {
        prefix[i + 1] = prefix[i] + stoneValue[i];
    }
    const memo = Array.from(
        { length: n },
        () => new Int32Array(n)
    );
    const seen = Array.from(
        { length: n },
        () => new Uint8Array(n)
    );
    function dfs(l, r) {
        if (l >= r) {
            return 0;
        }
        if (seen[l][r]) {
            return memo[l][r];
        }
        seen[l][r] = 1;
        let ans = 0;
        let left = 0;
        const total = prefix[r + 1] - prefix[l];
        let right = total;
        for (let k = l; k < r; k++) {
            left += stoneValue[k];
            right -= stoneValue[k];
            if (left < right) {
                if (ans >= 2 * left) {
                    continue;
                }
                ans = Math.max(
                    ans,
                    left + dfs(l, k)
                );
            } else if (left > right) {
                if (ans >= 2 * right) {
                    break;
                }
                ans = Math.max(
                    ans,
                    right + dfs(k + 1, r)
                );
            } else {
                ans = Math.max(
                    ans,
                    left + dfs(l, k),
                    right + dfs(k + 1, r)
                );
            }
        }
        memo[l][r] = ans;
        return ans;
    }
    return dfs(0, n - 1);
};