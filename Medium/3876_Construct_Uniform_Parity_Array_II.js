/**
 * @param {number[]} nums1
 * @return {boolean}
 */
var uniformArray = function(nums1) {
    let minOdd = Infinity;
    let minEven = Infinity;
    for (let num of nums1) {
        if (num % 2 === 0) {
            minEven = Math.min(minEven, num);
        } else {
            minOdd = Math.min(minOdd, num);
        }
    }
    if (minOdd === Infinity || minEven === Infinity) {
        return true;
    }
    return minOdd < minEven;
};