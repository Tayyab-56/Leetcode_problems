/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number[][]} queries
 * @return {number[]}
 */
var resultArray = function (nums, k, queries) {
    const n = nums.length;
    function makeLeaf(value) {
        let r = value % k;
        let prefix = new Array(k).fill(0);
        prefix[r] = 1;
        return {
            product: r, prefix: prefix
        };
    }

    function merge(left, right) {
        let result = {
            product: (left.product * right.product) % k,
            prefix: new Array(k).fill(0)
        };
        for (let r = 0; r < k; r++) {
            result.prefix[r] += left.prefix[r];
        }
        for (let r = 0; r < k; r++) {
            let newRemainder = (left.product * r) % k;
            result.prefix[newRemainder] += right.prefix[r];
        }
        return result;
    }

    let tree = new Array(4 * n);
    function build(node, left, right) {
        if (left === right) {
            tree[node] = makeLeaf(nums[left]);
            return;
        }
        let mid = Math.floor((left + right) / 2);
        build(node * 2, left, mid);
        build(node * 2 + 1, mid + 1, right);
        tree[node] = merge(tree[node * 2], tree[node * 2 + 1]);
    }

    function update(node, left, right, index, value) {
        if (left === right) {
            tree[node] = makeLeaf(value);
            return;
        }
        let mid = Math.floor((left + right) / 2);
        if (index <= mid) {
            update(node * 2, left, mid, index, value);
        } else {
            update(node * 2 + 1, mid + 1, right, index, value);
        }
        tree[node] = merge(tree[node * 2], tree[node * 2 + 1]);
    }

    function query(node, left, right, queryLeft, queryRight) {
        if (right < queryLeft || left > queryRight) {
            return null;
        }
        if (queryLeft <= left && right <= queryRight) {
            return tree[node];
        }
        let mid = Math.floor((left + right) / 2);
        let leftResult = query(node * 2, left, mid, queryLeft, queryRight);
        let rightResult = query(node * 2 + 1, mid + 1, right, queryLeft, queryRight);
        if (leftResult === null) {
            return rightResult;
        }
        if (rightResult === null) {
            return leftResult;
        }
        return merge(leftResult, rightResult);
    }
    build(1, 0, n - 1);
    let answer = [];
    for (let [index, value, start, x] of queries) {
        update(1, 0, n - 1, index, value);
        let result = query(1, 0, n - 1, start, n - 1);
        answer.push(result.prefix[x]);
    }
    return answer;
};