/**
 * @param {string} s
 * @param {string} target
 * @return {string}
 */
var lexPalindromicPermutation = function(s, target) {
    const n = s.length;
    const half = Math.floor(n / 2);
    const count = new Array(26).fill(0);
    for (let ch of s) {
        count[ch.charCodeAt(0) - 97]++;
    }
    let middle = "";
    for (let i = 0; i < 26; i++) {
        if (count[i] % 2 === 1) {
            if (n % 2 === 0 || middle !== "") {
                return "";
            }
            middle = String.fromCharCode(i + 97);
        }
    }
    const leftCount = new Array(26).fill(0);
    for (let i = 0; i < 26; i++) {
        leftCount[i] = Math.floor(count[i] / 2);
    }
    function makePalindrome(left) {
        let right = "";
        for (let i = left.length - 1; i >= 0; i--) {
            right += left[i];
        }
        return left + middle + right;
    }
    let left = "";
    for (let i = 0; i < half; i++) {
        const x = target.charCodeAt(i) - 97;
        if (leftCount[x] > 0) {
            left += target[i];
            leftCount[x]--;
            continue;
        }
        for (let c = x + 1; c < 26; c++) {
            if (leftCount[c] > 0) {
                let answerLeft = left;
                answerLeft += String.fromCharCode(c + 97);
                leftCount[c]--;
                for (let k = 0; k < 26; k++) {
                    answerLeft += String.fromCharCode(k + 97)
                        .repeat(leftCount[k]);
                }
                return makePalindrome(answerLeft);
            }
        }
        for (let j = left.length - 1; j >= 0; j--) {
            const old = left.charCodeAt(j) - 97;
            leftCount[old]++;
            for (let c = old + 1; c < 26; c++) {
                if (leftCount[c] > 0) {
                    let answerLeft = left.slice(0, j);
                    answerLeft += String.fromCharCode(c + 97);
                    leftCount[c]--;
                    for (let k = 0; k < 26; k++) {
                        answerLeft += String.fromCharCode(k + 97)
                            .repeat(leftCount[k]);
                    }
                    return makePalindrome(answerLeft);
                }
            }
            left = left.slice(0, j);
        }
        return "";
    }
    const answer = makePalindrome(left);
    if (answer > target) {
        return answer;
    }
    for (let i = left.length - 1; i >= 0; i--) {
        const old = left.charCodeAt(i) - 97;
        leftCount[old]++;
        for (let c = old + 1; c < 26; c++) {
            if (leftCount[c] > 0) {
                let answerLeft = left.slice(0, i);
                answerLeft += String.fromCharCode(c + 97);
                leftCount[c]--;
                for (let k = 0; k < 26; k++) {
                    answerLeft += String.fromCharCode(k + 97)
                        .repeat(leftCount[k]);
                }
                return makePalindrome(answerLeft);
            }
        }
        left = left.slice(0, i);
    }
    return "";
};