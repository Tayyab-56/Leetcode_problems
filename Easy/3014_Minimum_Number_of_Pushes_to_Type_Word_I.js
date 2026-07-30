/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function(word) {
    let n = word.length;
    let pushs = 0;
    for(let i = 1;i <= 4;i++)
    {
        let num = Math.min(8,n);
        pushs += i*num;
        n -= num;
    }
    return pushs;
};