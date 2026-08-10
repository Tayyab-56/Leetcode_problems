/**
 * @param {number} n
 * @return {boolean}
 */
var winnerSquareGame = function(n) {
    const memo = new Array(n + 1).fill(-1);

    const passing = function(num) {
        if (num === 0)
            return false;

        if (memo[num] !== -1)
            return memo[num];

        for (let i = 1; i * i <= num; i++) {
            if (!passing(num - i * i)) {
                memo[num] = true;
                return true;
            }
        }

        memo[num] = false;
        return false;
    };

    return passing(n);
};