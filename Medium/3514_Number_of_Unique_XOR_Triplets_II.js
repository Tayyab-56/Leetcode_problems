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
    const one = new Uint8Array(u);
    const two = new Uint8Array(u);
    const three = new Uint8Array(u);
    for (const v of nums) {
        one[v] = 1;
        for (let x = 0; x < u; x++) {
            if (one[x]) {
                two[x ^ v] = 1;
            }
        }
    }
    for (const v of nums) {
        for (let x = 0; x < u; x++) {
            if (two[x]) {
                three[x ^ v] = 1;
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