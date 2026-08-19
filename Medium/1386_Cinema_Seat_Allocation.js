/**
 * @param {number} n
 * @param {number[][]} reservedSeats
 * @return {number}
 */
var maxNumberOfFamilies = function (n, reservedSeats) {
    let ans = 0;
    const left = 0b00001111;
    const middle = 0b00111100;
    const right = 0b11110000;
    const rows = new Map();
    for (const [row, seat] of reservedSeats) {
        const bit = 1 << (seat - 2);
        rows.set(row, (rows.get(row) || 0) | bit);
    }
    for (let reserved of rows.values()) {
        if ((reserved & left) === 0 && (reserved & right) === 0) {
            ans += 2;
        } else if ((reserved & left) === 0) {
            ans += 1;
        } else if ((reserved & right) === 0) {
            ans += 1;
        } else if ((reserved & middle) === 0) {
            ans += 1;
        }
    }
    ans += (n - rows.size) * 2;
    return ans;
};