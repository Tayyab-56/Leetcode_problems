/**
 * @param {string} num
 * @param {number} t
 * @return {string}
 */
var smallestNumber = function(num, t) {
    const primes = [2, 3, 5, 7];
    const factors = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [1, 0, 0, 0],
        [0, 1, 0, 0],
        [2, 0, 0, 0],
        [0, 0, 1, 0],
        [1, 1, 0, 0],
        [0, 0, 0, 1],
        [3, 0, 0, 0],
        [0, 2, 0, 0]
    ];
    const need = [0, 0, 0, 0];
    for (let i = 0; i < 4; i++) {
        while (t % primes[i] === 0) {
            need[i]++;
            t /= primes[i];
        }
    }
    if (t !== 1) return "-1";
    const [A, B, C, D] = need;
    const index = (a, b, c, d) =>
        (((a * (B + 1) + b) * (C + 1) + c) * (D + 1) + d);
    const size =
        (A + 1) *
        (B + 1) *
        (C + 1) *
        (D + 1);
    const INF = 1e9;
    const dp = new Int32Array(size);
    dp.fill(INF);
    dp[0] = 0;
    for (let a = 0; a <= A; a++) {
        for (let b = 0; b <= B; b++) {
            for (let c = 0; c <= C; c++) {
                for (let d = 0; d <= D; d++) {

                    if (a === 0 && b === 0 && c === 0 && d === 0) {
                        continue;
                    }

                    for (let digit = 1; digit <= 9; digit++) {
                        const f = factors[digit];

                        const na = Math.max(0, a - f[0]);
                        const nb = Math.max(0, b - f[1]);
                        const nc = Math.max(0, c - f[2]);
                        const nd = Math.max(0, d - f[3]);

                        dp[index(a, b, c, d)] = Math.min(
                            dp[index(a, b, c, d)],
                            dp[index(na, nb, nc, nd)] + 1
                        );
                    }
                }
            }
        }
    }
    function subtract(req, digit) {
        const f = factors[digit];
        return [
            Math.max(0, req[0] - f[0]),
            Math.max(0, req[1] - f[1]),
            Math.max(0, req[2] - f[2]),
            Math.max(0, req[3] - f[3])
        ];
    }
    function build(len, req) {
        if (dp[index(...req)] > len) {
            return null;
        }
        let result = "";
        for (let i = 0; i < len; i++) {
            for (let digit = 1; digit <= 9; digit++) {
                const next = subtract(req, digit);
                const remaining = len - i - 1;
                if (dp[index(...next)] <= remaining) {
                    result += digit;
                    req = next;
                    break;
                }
            }
        }
        return result;
    }
    const n = num.length;
    const prefix = Array.from(
        { length: n + 1 },
        () => [0, 0, 0, 0]
    );
    const valid = new Uint8Array(n + 1);
    valid[0] = 1;
    for (let i = 0; i < n; i++) {
        const digit = Number(num[i]);
        const f = factors[digit];
        for (let j = 0; j < 4; j++) {
            prefix[i + 1][j] =
                prefix[i][j] + f[j];
        }
        valid[i + 1] = valid[i] && digit !== 0;
    }
    if (valid[n]) {
        const req = need.map(
            (v, j) => Math.max(0, v - prefix[n][j])
        );
        if (req.every(x => x === 0)) {
            return num;
        }
    }
    for (let i = n - 1; i >= 0; i--) {
        if (!valid[i]) continue;
        const req = need.map(
            (v, j) => Math.max(0, v - prefix[i][j])
        );
        const original = Number(num[i]);
        for (let digit = original + 1; digit <= 9; digit++) {
            const next = subtract(req, digit);
            const remaining = n - i - 1;
            if (dp[index(...next)] <= remaining) {
                return (
                    num.slice(0, i) +
                    digit +
                    build(remaining, next)
                );
            }
        }
    }
    const minLength = dp[index(...need)];
    if (minLength === INF) {
        return "-1";
    }
    const length = Math.max(n + 1, minLength);
    return build(length, need) ?? "-1";
};