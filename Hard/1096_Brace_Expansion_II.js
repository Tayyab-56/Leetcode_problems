/**
 * @param {string} expression
 * @return {string[]}
 */
var braceExpansionII = function(expression) {
    let i = 0;
    function parseExpression() {
        let result = new Set();
        let current = new Set([""]);
        while (i < expression.length && expression[i] !== '}' && expression[i] !== ',') {
            let part = parseTerm();
            let next = new Set();
            for (let a of current) {
                for (let b of part) {
                    next.add(a + b);
                }
            }
            current = next;
        }
        for (let word of current) {
            result.add(word);
        }
        return result;
    }

    function parseTerm() {
        if (expression[i] === '{') {
            i++;
            let result = new Set();
            while (i < expression.length && expression[i] !== '}') {
                let part = parseExpression();
                for (let word of part) {
                    result.add(word);
                }
                if (expression[i] === ',') {
                    i++;
                }
            }
            i++;
            return result;
        }
        let result = new Set([expression[i]]);
        i++;
        return result;
    }
    let result = parseExpression();
    return [...result].sort();
};