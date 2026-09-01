/**
 * @param {string[]} classroom
 * @param {number} energy
 * @return {number}
 */
var minMoves = function(classroom, energy) {
    const m = classroom.length;
    const n = classroom[0].length;
    let sr = 0;
    let sc = 0;
    let litterCount = 0;
    const litterId = Array.from(
        { length: m },
        () => new Int8Array(n).fill(-1)
    );
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (classroom[r][c] === 'S') {
                sr = r;
                sc = c;
            } else if (classroom[r][c] === 'L') {
                litterId[r][c] = litterCount++;
            }
        }
    }
    if (litterCount === 0) {
        return 0;
    }
    const masks = 1 << litterCount;
    const fullMask = masks - 1;
    const visited = Array.from(
        { length: m },
        () => Array.from(
            { length: n },
            () => Array.from(
                { length: energy + 1 },
                () => new Uint8Array(masks)
            )
        )
    );
    let queue = [[sr, sc, energy, fullMask]];
    let moves = 0;
    visited[sr][sc][energy][fullMask] = 1;
    const dr = [-1, 1, 0, 0];
    const dc = [0, 0, -1, 1];
    while (queue.length > 0) {
        const nextQueue = [];
        for (const [r, c, currentEnergy, mask] of queue) {
            if (mask === 0) {
                return moves;
            }
            if (currentEnergy === 0) {
                continue;
            }
            for (let d = 0; d < 4; d++) {
                const nr = r + dr[d];
                const nc = c + dc[d];
                if (nr < 0 || nr >= m || nc < 0 || nc >= n) {
                    continue;
                }
                if (classroom[nr][nc] === 'X') {
                    continue;
                }
                let nextEnergy = currentEnergy - 1;
                if (classroom[nr][nc] === 'R') {
                    nextEnergy = energy;
                }
                let nextMask = mask;
                const id = litterId[nr][nc];
                if (id !== -1) {
                    nextMask &= ~(1 << id);
                }
                if (visited[nr][nc][nextEnergy][nextMask]) {
                    continue;
                }
                visited[nr][nc][nextEnergy][nextMask] = 1;
                nextQueue.push([
                    nr,
                    nc,
                    nextEnergy,
                    nextMask
                ]);
            }
        }
        queue = nextQueue;
        moves++;
    }
    return -1;
};