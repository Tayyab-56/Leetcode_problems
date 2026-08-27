/**
 * @param {string} s
 * @param {string} target
 * @return {string}
 */
var lexGreaterPermutation = function(s, target) {
    const count = new Array(26).fill(0);
    for (const ch of s) {
        count[ch.charCodeAt(0) - 97]++;
    }
    for (let i = 0; i < target.length; i++) {
        const x = target.charCodeAt(i) - 97;
        if (count[x] === 0) {
            for (let c = x + 1; c < 26; c++) {
                if (count[c] > 0) {
                    let ans = target.slice(0, i);
                    ans += String.fromCharCode(c + 97);
                    count[c]--;
                    for (let k = 0; k < 26; k++) {
                        ans += String.fromCharCode(k + 97).repeat(count[k]);
                    }
                    return ans;
                }
            }
            for (let j = i - 1; j >= 0; j--) {
                const y = target.charCodeAt(j) - 97;
                count[y]++;
                for (let c = y + 1; c < 26; c++) {
                    if (count[c] > 0) {
                        let ans = target.slice(0, j);
                        ans += String.fromCharCode(c + 97);
                        count[c]--;
                        for (let k = 0; k < 26; k++) {
                            ans += String.fromCharCode(k + 97).repeat(count[k]);
                        }
                        return ans;
                    }
                }
            }
            return "";
        }
        count[x]--;
    }
    for (let i = target.length - 1; i >= 0; i--) {
        const x = target.charCodeAt(i) - 97;
        count[x]++;
        for (let c = x + 1; c < 26; c++) {
            if (count[c] > 0) {
                let ans = target.slice(0, i);
                ans += String.fromCharCode(c + 97);
                count[c]--;
                for (let k = 0; k < 26; k++) {
                    ans += String.fromCharCode(k + 97).repeat(count[k]);
                }
                return ans;
            }
        }
    }
    return "";
};