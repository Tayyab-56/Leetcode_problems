/**
 * @param {string} s
 * @return {string}
 */
var smallestSubsequence = function(s) {
    let stack = [];
    let seen = new Set();
    let lastIndex = new Map();
    for (let i = 0; i < s.length; i++) {
        lastIndex.set(s[i], i);
    }
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (!seen.has(char)) {
            while (stack.length > 0 && stack[stack.length - 1] > char && lastIndex.get(stack[stack.length - 1]) > i) {
                seen.delete(stack.pop());
            }
            stack.push(char);
            seen.add(char);
        }
    }
    return stack.join('');
};