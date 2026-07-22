/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {number[]}
 */
class SparseTable {
    constructor(nums) {
        this.n = nums.length;
        if (this.n === 0) {
            this.st = [];
            return;
        }
        const LOG = Math.floor(Math.log2(this.n)) + 1;
        this.st = Array.from({ length: LOG }, () => Array(this.n).fill(0));
        for (let i = 0; i < this.n; i++)
            this.st[0][i] = nums[i];
        for (let k = 1; k < LOG; k++) {
            let len = 1 << k;
            let half = len >> 1;
            for (let i = 0; i + len <= this.n; i++) {
                this.st[k][i] = Math.max(
                    this.st[k - 1][i],
                    this.st[k - 1][i + half]
                );
            }
        }
    }

    query(l, r) {
        if (l > r) return -Infinity;
        let len = r - l + 1;
        let k = Math.floor(Math.log2(len));
        return Math.max(
            this.st[k][l],
            this.st[k][r - (1 << k) + 1]
        );
    }
}

var maxActiveSectionsAfterTrade = function (s, queries) { 
    const ones = [...s].filter(c => c === '1').length;
    const { zeroGroups, zeroGroupIndex } = getZeroGroups(s);
    if (zeroGroups.length === 0)
        return Array(queries.length).fill(ones);
    const mergeLengths = getZeroMergeLengths(zeroGroups);
    const st = new SparseTable(mergeLengths);
    const ans = [];
    for (const [l, r] of queries) {
        let left = -1;
        if (zeroGroupIndex[l] !== -1) {
            let g = zeroGroups[zeroGroupIndex[l]];
            left = g.length - (l - g.start);
        }
        let right = -1;
        if (zeroGroupIndex[r] !== -1) {
            let g = zeroGroups[zeroGroupIndex[r]];
            right = r - g.start + 1;
        }
        let startAdjacent = zeroGroupIndex[l] + 1;
        let endAdjacent =
            s[r] === '1'
                ? zeroGroupIndex[r]
                : zeroGroupIndex[r] - 1;
        endAdjacent--;
        let active = ones;
        if (
            s[l] === '0' &&
            s[r] === '0' &&
            zeroGroupIndex[l] + 1 === zeroGroupIndex[r]
        ) {
            active = Math.max(active, ones + left + right);
        }
        else if (startAdjacent <= endAdjacent) {
            active = Math.max(
                active,
                ones + st.query(startAdjacent, endAdjacent)
            );
        }
        if (
            s[l] === '0' &&
            zeroGroupIndex[l] + 1 <=
            (s[r] === '1'
                ? zeroGroupIndex[r]
                : zeroGroupIndex[r] - 1)
        ) {
            active = Math.max(
                active,
                ones +
                left +
                zeroGroups[zeroGroupIndex[l] + 1].length
            );
        }
        if (
            s[r] === '0' &&
            zeroGroupIndex[l] < zeroGroupIndex[r] - 1
        ) {
            active = Math.max(
                active,
                ones +
                right +
                zeroGroups[zeroGroupIndex[r] - 1].length
            );
        }
        ans.push(active);
    }
    return ans;
};

// find all groups of consecutive zeros and their lengths
function getZeroGroups(s) {
    const zeroGroups = [];
    const zeroGroupIndex = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '0') {
            if (i > 0 && s[i - 1] === '0') {
                zeroGroups[zeroGroups.length - 1].length++;
            } else {
                zeroGroups.push({
                    start: i,
                    length: 1
                });
            }
        }
        zeroGroupIndex.push(zeroGroups.length - 1);
    }
    return {
        zeroGroups,
        zeroGroupIndex
    };
}

// get the lengths of all possible merges of two adjacent zero groups
function getZeroMergeLengths(zeroGroups) {
    const res = [];
    for (let i = 0; i + 1 < zeroGroups.length; i++) {
        res.push(
            zeroGroups[i].length +
            zeroGroups[i + 1].length
        );
    }
    return res;
}