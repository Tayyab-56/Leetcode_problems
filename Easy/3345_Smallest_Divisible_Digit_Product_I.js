/**
 * @param {number} n
 * @param {number} t
 * @return {number}
 */
var smallestNumber = function(n, t) {
    let num = n;
    while (true) {
        let product = 1;
        let temp = num;
        while (temp > 0) {
            product *= temp % 10;
            temp = Math.floor(temp / 10);
        }
        let mod = product % t;
        if (mod === 0) {
            return num;
        }
        num++;
    }
};