/**
 * @param {number[]} coins
 * @param {number} k
 * @return {number}
 */
var findKthSmallest = function(coins, k) {
    coins.sort((a, b) => a - b);
    const n = coins.length;
    const gcd = (a, b) => {
        while (b !== 0) {
            [a, b] = [b, a % b];
        }
        return a;
    };
    const lcm = (a, b) => {
        return a / gcd(a, b) * b;
    };
    const count = (x) => {
        let result = 0;
        for (let mask = 1; mask < (1 << n); mask++) {
            let multiple = 1;
            let bits = 0;
            for (let i = 0; i < n; i++) {
                if (mask & (1 << i)) {
                    bits++;
                    multiple = lcm(multiple, coins[i]);
                    if (multiple > x) {
                        break;
                    }
                }
            }
            if (multiple > x) continue;
            const amount = Math.floor(x / multiple);
            if (bits % 2 === 1) {
                result += amount;
            }
            else {
                result -= amount;
            }
        }
        return result;
    };
    let left = coins[0];
    let right = coins[0] * k;
    while (left < right) {
        const mid = Math.floor((left + right) / 2);

        if (count(mid) >= k) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
};