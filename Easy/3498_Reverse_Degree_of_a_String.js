/**
 * @param {string} s
 * @return {number}
 */
var reverseDegree = function(s) {
    let sum = 0;
    for(let i = 1; i<= s.length;i++)
    {
        sum += (i * (26 - (s.charCodeAt(i-1) - 97)));
    }
    return sum;
};