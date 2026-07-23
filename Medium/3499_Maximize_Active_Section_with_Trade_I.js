/**
 * @param {string} input
 * @return {number}
 */
var maxActiveSectionsAfterTrade = function (input) {
    let totalNumOfOnes = 0;
    let numOfZerosBeforeOnes = 0;
    let maxNumOfZerosToTrans = 0;
    for (let i = 0; i < input.length; ++i) {
        let numOfOnesBetweenZeros = 0;
        while (i < input.length && input.charAt(i) === '1') {
            ++i;
            ++totalNumOfOnes;
            ++numOfOnesBetweenZeros;
        }
        let numOfZerosAfterOnes = 0;
        while (i < input.length && input.charAt(i) === '0') {
            ++i;
            ++numOfZerosAfterOnes;
        }
        if (numOfZerosBeforeOnes > 0 && numOfOnesBetweenZeros > 0 && numOfZerosAfterOnes > 0) {
            maxNumOfZerosToTrans = Math.max(maxNumOfZerosToTrans, numOfZerosBeforeOnes + numOfZerosAfterOnes);
        }
        --i;
        numOfZerosBeforeOnes = numOfZerosAfterOnes;
    }
    return totalNumOfOnes + maxNumOfZerosToTrans;
};