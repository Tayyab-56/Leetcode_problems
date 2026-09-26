/**
 * @param {string} s
 * @param {string[][]} knowledge
 * @return {string}
 */
var evaluate = function(s, knowledge) {
    let map = new Map();
    for (let [key, value] of knowledge) {
        map.set(key, value);
    }
    let result = "";
    let i = 0;
    while (i < s.length) {
        if (s[i] === '(') {
            i++;
            let key = "";
            while (s[i] !== ')') {
                key += s[i];
                i++;
            }
            if (map.has(key)) {
                result += map.get(key);
            } else {
                result += "?";
            }
            i++;
        } 
        else {
            result += s[i];
            i++;
        }
    }
    return result;
};