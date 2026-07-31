/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function(word) {
    if(word.length < 8)
    {
        return word.length;
    }
    let freq = new Array(26).fill(0);
    let n = 0;
    for(let i = 0;i<word.length;i++)
    {
        let ascii = word[i].charCodeAt(0) - 97;
        if(freq[ascii] === 0)
        {
            n++;
        }
        freq[ascii]++;
    }
    if(n < 9)
    {
        return word.length;
    }
    let ans = 0;
    let itterate = 0;
    let itterate1 = 0;
    freq.sort((a,b) => b-a);
    for(let i = 1;n>0;i++)
    {
        itterate += Math.min(8,n);
        n -= 8;
        for(let j =itterate1;j< itterate;j++)
        {
            ans += i*freq[j];
        }
        itterate1 = itterate;
    }
    return ans;
};