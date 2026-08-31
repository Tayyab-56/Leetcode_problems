/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nodesBetweenCriticalPoints = function(head) {
    let critical = [];
    let prev = head;
    let curr = head.next;
    let index = 1;
    while (curr.next !== null) {
        if ((curr.val > prev.val && curr.val > curr.next.val) ||
            (curr.val < prev.val && curr.val < curr.next.val)) {
            critical.push(index);
        }
        prev = curr;
        curr = curr.next;
        index++;
    }
    if (critical.length < 2) {
        return [-1, -1];
    }
    let minDistance = Infinity;
    for (let i = 1; i < critical.length; i++) {
        minDistance = Math.min(
            minDistance,
            critical[i] - critical[i - 1]
        );
    }
    let maxDistance =
        critical[critical.length - 1] - critical[0];
    return [minDistance, maxDistance];
};