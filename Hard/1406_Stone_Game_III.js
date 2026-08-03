/**
 * @param {number[]} stoneValue
 * @return {string}
 */
var stoneGameIII = function(stoneValue) {
    let arr = new Array(4).fill(0);
    for (let i = stoneValue.length - 1; i >= 0; i--) {
        let sum = 0;
        arr[i % 4] = -Infinity;
        for (let j = 0; j < 3; j++) {
            if (i + j < stoneValue.length) {
                sum += stoneValue[i + j];
                arr[i % 4] = Math.max(arr[i % 4], sum - arr[(i + j + 1) % 4]);
            }
        }
    }
    if (arr[0] > 0) {
        return "Alice";
    } else if (arr[0] < 0) {
        return "Bob";
    } else {
        return "Tie";
    }
};