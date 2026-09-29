/**
 * @param {character[][]} grid
 * @return {boolean}
 */
var hasValidPath = function (grid) {
    const m = grid.length;
    const n = grid[0].length;
    if (
        (m + n - 1) % 2 === 1 ||
        grid[0][0] === ')' ||
        grid[m - 1][n - 1] === '('
    ) {
        return false;
    }
    const memo = Array.from({ length: m }, () =>
        Array.from({ length: n }, () =>
            Array(m + n).fill(false)
        )
    );

    function dfs(i, j, balance) {
        if (memo[i][j][balance]) {
            return false;
        }
        memo[i][j][balance] = true;
        if (grid[i][j] === '(') {
            balance++;
        } else {
            balance--;
        }
        if (balance < 0) {
            return false;
        }
        if (balance > m - i + n - j) {
            return false;
        }
        if (i === m - 1 && j === n - 1) {
            return balance === 0;
        }
        if (i + 1 < m && dfs(i + 1, j, balance)) {
            return true;
        }
        if (j + 1 < n && dfs(i, j + 1, balance)) {
            return true;
        }
        return false;
    }
    return dfs(0, 0, 0);
};