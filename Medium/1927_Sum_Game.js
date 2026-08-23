/**
 * @param {string} num
 * @return {boolean}
 */
var sumGame = function(num) {
    const n = num.length;
    const mid = n / 2;
    let leftQ = 0;
    let rightQ = 0;
    let diff = 0;
    for (let i = 0; i < mid; i++) {
        if (num[i] === '?') {
            leftQ++;
        } else {
            diff += Number(num[i]);
        }
    }
    for (let i = mid; i < n; i++) {
        if (num[i] === '?') {
            rightQ++;
        } else {
            diff -= Number(num[i]);
        }
    }
    if ((leftQ + rightQ) % 2 === 1) {
        return true;
    }
    return diff !== 9 * (rightQ - leftQ) / 2;
};