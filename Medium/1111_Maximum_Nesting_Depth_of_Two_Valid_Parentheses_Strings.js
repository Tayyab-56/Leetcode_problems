/**
 * @param {string} seq
 * @return {number[]}
 */
var maxDepthAfterSplit = function(seq) {
    let depth = 0;
    let answer = [];
    for (let i = 0; i < seq.length; i++) {
        if (seq[i] === '(') {
            depth++;
            answer.push(depth % 2);

        } else {
            answer.push(depth % 2);
            depth--;
        }
    }
    return answer;
};