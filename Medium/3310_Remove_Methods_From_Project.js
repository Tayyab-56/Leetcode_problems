/**
 * @param {number} n
 * @param {number} k
 * @param {number[][]} invocations
 * @return {number[]}
 */
var remainingMethods = function(n, k, invocations) {
    const graph = Array.from({ length: n }, () => []);
    for (const [u, v] of invocations) {
        graph[u].push(v);
    }
    const suspicious = new Array(n).fill(false);
    const queue = [k];
    suspicious[k] = true;
    let front = 0;
    while (front < queue.length) {
        const node = queue[front++];
        for (const next of graph[node]) {
            if (!suspicious[next]) {
                suspicious[next] = true;
                queue.push(next);
            }
        }
    }
    for (const [u, v] of invocations) {
        if (!suspicious[u] && suspicious[v]) {
            return Array.from({ length: n }, (_, i) => i);
        }
    }
    const ans = [];
    for (let i = 0; i < n; i++) {
        if (!suspicious[i]) {
            ans.push(i);
        }
    }
    return ans;
};