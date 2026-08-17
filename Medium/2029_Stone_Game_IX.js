/**
 * @param {number[]} stones
 * @return {boolean}
 */
var stoneGameIX = function(stones) {
    const dp = new Array(3).fill(0);
    for (const stone of stones) {
        dp[stone % 3]++;
    }
    if (dp[0] % 2 === 0) {
        return dp[1] > 0 && dp[2] > 0;
    }
    return Math.abs(dp[1] - dp[2]) > 2;
};