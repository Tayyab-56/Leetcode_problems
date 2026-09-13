/**
 * @param {number[][]} img1
 * @param {number[][]} img2
 * @return {number}
 */
var largestOverlap = function(img1, img2) {
    let n = img1.length;
    let maxOverlap = 0;
    for (let rowShift = -(n - 1); rowShift <= n - 1; rowShift++) {
        for (let colShift = -(n - 1); colShift <= n - 1; colShift++) {
            let overlap = 0;
            for (let i = 0; i < n; i++) {
                for (let j = 0; j < n; j++) {
                    if (img1[i][j] === 0) continue;
                    let newRow = i + rowShift;
                    let newCol = j + colShift;
                    if (newRow >= 0 && newRow < n && newCol >= 0 && newCol < n) {
                        if (img2[newRow][newCol] === 1) {
                            overlap++;
                        }
                    }
                }
            }
            maxOverlap = Math.max(maxOverlap, overlap);
        }
    }
    return maxOverlap;
};