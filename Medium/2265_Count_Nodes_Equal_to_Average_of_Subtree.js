/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var averageOfSubtree = function(root) {
    let ans = 0;
    function dfs(root) {
        if (root === null) {
            return [0, 0];
        }
        let [leftSum, leftCount] = dfs(root.left);
        let [rightSum, rightCount] = dfs(root.right);
        let sum = root.val + leftSum + rightSum;
        let count = 1 + leftCount + rightCount;
        if (Math.floor(sum / count) === root.val) {
            ans++;
        }
        return [sum, count];
    }
    dfs(root);
    return ans;
};