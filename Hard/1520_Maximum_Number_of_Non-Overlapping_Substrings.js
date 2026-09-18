/**
 * @param {string} s
 * @return {string[]}
 */
var maxNumOfSubstrings = function(s) {
    const n = s.length;
    const first = new Array(26).fill(n);
    const last = new Array(26).fill(-1);
    for (let i = 0; i < n; i++) {
        const c = s.charCodeAt(i) - 97;
        first[c] = Math.min(first[c], i);
        last[c] = i;
    }
    const intervals = [];
    for (let c = 0; c < 26; c++) {
        if (last[c] === -1) continue;
        let left = first[c];
        let right = last[c];
        let valid = true;
        for (let i = left; i <= right; i++) {
            const current = s.charCodeAt(i) - 97;
            if (first[current] < left) {
                valid = false;
                break;
            }
            right = Math.max(right, last[current]);
        }
        if (valid) {
            intervals.push([left, right]);
        }
    }
    intervals.sort((a, b) => {
        if (a[1] !== b[1]) {
            return a[1] - b[1];
        }
        return b[0] - a[0];
    });
    const answer = [];
    let previousEnd = -1;
    for (const [left, right] of intervals) {
        if (left > previousEnd) {
            answer.push(s.slice(left, right + 1));
            previousEnd = right;
        }
    }
    return answer;
};