/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function(s) {
    let pair = new Array(s.length);
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(i);
        }
        else if (s[i] === ')') {
            let open = stack.pop();
            pair[open] = i;
            pair[i] = open;
        }
    }
    let result = "";
    let i = 0;
    let direction = 1;
    while (i < s.length) {
        if (s[i] === '(' || s[i] === ')') {
            direction *= -1;
            i = pair[i] + direction;
        }
        else {
            result += s[i];
            i += direction;
        }
    }
    return result;
};