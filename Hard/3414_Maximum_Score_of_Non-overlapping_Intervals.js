/**
 * @param {number[][]} intervals
 * @return {number[]}
 */
var maximumWeight = function(intervals) {
    let arr = intervals.map((x, i) => {
        return {
            l: x[0],
            r: x[1],
            w: x[2],
            index: i
        };
    });
    arr.sort((a, b) => a.l - b.l);
    let n = arr.length;
    let starts = arr.map(x => x.l);
    let next = new Array(n);
    function findNext(end) {
        let left = 0;
        let right = n;
        while (left < right) {
            let mid = Math.floor((left + right) / 2);

            if (starts[mid] > end) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        return left;
    }
    for (let i = 0; i < n; i++) {
        next[i] = findNext(arr[i].r);
    }
    let dp = Array.from({ length: n + 1 }, () => {
        return Array(5).fill(null);
    });
    for (let i = 0; i <= n; i++) {
        dp[i][0] = {
            score: 0,
            indices: []
        };
    }
    for (let k = 0; k <= 4; k++) {
        dp[n][k] = {
            score: 0,
            indices: []
        };
    }

    function compareLexicographically(a, b) {
        let len = Math.min(a.length, b.length);
        for (let i = 0; i < len; i++) {
            if (a[i] !== b[i]) {
                return a[i] - b[i];
            }
        }
        return a.length - b.length;
    }
    function better(a, b) {
        if (a.score !== b.score) {
            return a.score > b.score ? a : b;
        }
        return compareLexicographically(a.indices, b.indices) <= 0
            ? a
            : b;
    }
    for (let i = n - 1; i >= 0; i--) {
        for (let k = 1; k <= 4; k++) {
            let skip = dp[i + 1][k];
            let takeNext = dp[next[i]][k - 1];
            let take = {
                score: arr[i].w + takeNext.score,
                indices: [...takeNext.indices, arr[i].index]
            };
            take.indices.sort((a, b) => a - b);
            dp[i][k] = better(skip, take);
        }
    }
    return dp[0][4].indices;
};