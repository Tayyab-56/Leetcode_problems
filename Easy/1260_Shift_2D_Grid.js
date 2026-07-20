/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function(grid, k) {
    let arr = grid.flat();
    let n = arr.length;
    k = k % n;
    arr = arr.slice(n - k).concat(arr.slice(0, n - k));
    let m = grid[0].length;
    let result = [];
    for (let i = 0; i < arr.length; i += m) {
        result.push(arr.slice(i, i + m));
    }
    return result;
};