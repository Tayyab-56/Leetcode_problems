/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var smallestPalindrome = function(s, k) {
    k = BigInt(k);
    if (s.length <= 1) return s;
    const arr = s.split("");
    const mid = Math.floor(arr.length / 2);
    const result = new Array(26).fill(0);
    for (let i = 0; i < mid; i++) {
        result[arr[i].charCodeAt(0) - 97]++;
    }
    let middle = "";
    if (arr.length % 2 === 1)
    {
        middle = arr[mid];
    }
    var left = "";
    for(let i = 0;i<mid;i++)
    {
        var found = false;
        for(let j = 0;j<26;j++)
        {
            if(result[j] !== 0)
            {
                var res1 = 1n;
                var total = mid - i - 1;
                result[j]--;
                for(let z = 0;z<26;z++)
                {
                    if(result[z] != 0)
                    {
                        res1 *= nCr(total,result[z],k);
                        total -= result[z];
                    }
                    if(res1 >= k)
                    {
                        break;
                    }
                }
                if(res1 >= k)
                {
                    left += String.fromCharCode(j+97);
                    found = true;
                    break;
                }
                else
                {
                    k -= res1;
                    result[j]++;
                }
            }
        }
        if(!found)
        {
            return "";
        }
    }
    if(left.length === 0)
    {
        middle = '';
    }
    const right = left.split("").reverse().join("");
    return left + middle + right;
};

const nCr = (n, r, k) => {
    if (r > n - r)
    {
        r = n - r;
    }
    let res = 1n;
    k = BigInt(k);
    for (let i = 1; i <= r; i++) {
        res = res * BigInt(n - i + 1) / BigInt(i);
        if (res >= k)
        {
            return k;
        }
    }
    return res;
};