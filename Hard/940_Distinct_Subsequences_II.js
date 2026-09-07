/**
 * @param {string} s
 * @return {number}
 */
var distinctSubseqII = function(s) {
    const MOD = 1000000007;
    let dp = 1;
    let last = new Array(26).fill(0);
    for (let ch of s) {
        let index = ch.charCodeAt(0) - 97;
        let newDp = (2 * dp - last[index]) % MOD;
        last[index] = dp;
        dp = newDp;
    }
    return (dp - 1 + MOD) % MOD;
};