/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    arr.forEach((element, index) => {
        arr[index] = fn(element, index);
    });
    return arr;
}