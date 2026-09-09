/**
 * @param {number} n
 * @return {number}
 */
var countCommas = function(n) {
    let count = 0;
    let start = 1000;
    let commas = 1;
    while (start <= n) {
        let end = start * 1000 - 1;
        count += (Math.min(n, end) - start + 1) * commas;
        start *= 1000;
        commas++;
    }
    return count;
};