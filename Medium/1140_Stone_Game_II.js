/**
 * @param {number[]} piles
 * @return {number}
 */
var stoneGameII = function(piles) {
    const n = piles.length;
    const suffix = new Array(n + 1).fill(0);
    for (let i = n - 1; i >= 0; i--) {
        suffix[i] = piles[i] + suffix[i + 1];
    }
    const memo = new Map();
    function dp(i, M) {
        if (i >= n) {
            return 0;
        }
        if (i + 2 * M >= n) {
            return suffix[i];
        }
        const key = `${i},${M}`;
        if (memo.has(key)) {
            return memo.get(key);
        }
        let best = 0;
        for (let X = 1; X <= 2 * M && i + X <= n; X++) {
            const opponent = dp(
                i + X,
                Math.max(M, X)
            );
            const current = suffix[i] - opponent;
            best = Math.max(best, current);
        }
        memo.set(key, best);
        return best;
    }
    return dp(0, 1);
};