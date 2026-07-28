/**
 * @param {string} s
 * @return {string}
 */
var smallestPalindrome = function(s) {
    if (s.length <= 1) return s;
    else
    {
        var result = new Array(26).fill(0);
        const arr = s.split('');
        const mid = Math.floor(arr.length / 2);
        for (let i = 0; i < mid; i++)
        {
            result[arr[i].charCodeAt(0) - 97]++;
        }
        var j = 0;
        for (let i = 0; i < mid; i++)
        {
            while (result[j] === 0)
            {
                j++;
            }
            let ch = String.fromCharCode(j + 97);
            arr[i] = ch;
            arr[arr.length - 1 - i] = ch;
            result[j]--;
        }
        return arr.join('');
    }
};