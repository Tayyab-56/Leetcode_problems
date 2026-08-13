/**
 * @param {string} s
 * @param {string} queryCharacters
 * @param {number[]} queryIndices
 * @return {number[]}
 */
var longestRepeating = function(s, queryCharacters, queryIndices) {
    const tree = new SegmentTree(s);
    const ans = [];
    for (let i = 0; i < queryIndices.length; i++) {
        tree.change(
            queryIndices[i],
            queryCharacters[i]
        );
        ans.push(tree.getAnswer());
    }
    return ans;
};

class Node {
    constructor(leftChar, rightChar, length, prefix, suffix, best) {
        this.leftChar = leftChar;
        this.rightChar = rightChar;
        this.length = length;
        this.prefix = prefix;
        this.suffix = suffix;
        this.best = best;
    }
}

class SegmentTree {
    constructor(s) {
        this.n = s.length;
        this.tree = new Array(4 * this.n);
        this.build(s, 1, 0, this.n - 1);
    }
    build(s, node, l, r) {
        if (l === r) {
            this.tree[node] = new Node(
                s[l],
                s[l],
                1,
                1,
                1,
                1
            );
            return;
        }
        const mid = Math.floor((l + r) / 2);
        this.build(s, node * 2, l, mid);
        this.build(s, node * 2 + 1, mid + 1, r);
        this.tree[node] = this.merge(
            this.tree[node * 2],
            this.tree[node * 2 + 1]
        );
    }
    merge(left, right) {
        const node = new Node(
            left.leftChar,
            right.rightChar,
            left.length + right.length,
            left.prefix,
            right.suffix,
            Math.max(left.best, right.best)
        );
        if (left.rightChar === right.leftChar) {

            node.best = Math.max(
                node.best,
                left.suffix + right.prefix
            );
            if (left.prefix === left.length) {
                node.prefix =
                    left.length + right.prefix;
            }
            if (right.suffix === right.length) {
                node.suffix =
                    left.suffix + right.length;
            }
        }
        return node;
    }
    update(index, char, node, l, r) {
        if (l === r) {
            this.tree[node] = new Node(
                char,
                char,
                1,
                1,
                1,
                1
            );
            return;
        }
        const mid = Math.floor((l + r) / 2);
        if (index <= mid) {
            this.update(index, char, node * 2, l, mid);
        } else {
            this.update(index, char, node * 2 + 1, mid + 1, r);
        }
        this.tree[node] = this.merge(
            this.tree[node * 2],
            this.tree[node * 2 + 1]
        );
    }
    change(index, char) {
        this.update(
            index,
            char,
            1,
            0,
            this.n - 1
        );
    }
    getAnswer() {
        return this.tree[1].best;
    }
}