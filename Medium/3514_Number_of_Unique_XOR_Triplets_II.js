/**
 * @param {number[]} nums
 * @return {number}
 */
var uniqueXorTriplets = function (nums) {
    let m = 0;
    for (const v of nums) {
        m = Math.max(m, v);
    }
    let u = 1;
    u = Math.floor(Math.log2(m)) + 1;
    u = 2 ** u;
    const one = new Array(u).fill(false);
    const two = new Array(u).fill(false);
    const three = new Array(u).fill(false);
    for (const v of nums) {
        one[v] = true;
        for (let x = 0; x < u; x++) {
            if (one[x]) {
                two[x ^ v] = true;
            }
        }
    }
    for (const v of nums) {
        for (let x = 0; x < u; x++) {
            if (two[x]) {
                three[x ^ v] = true;
            }
        }
    }
    let ans = 0;
    for (const b of three) {
        if (b) {
            ans++;
        }
    }
    return ans;
};