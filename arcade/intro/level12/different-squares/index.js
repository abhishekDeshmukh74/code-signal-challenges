function differentSquares(matrix) {
    const set = new Set()
    for (let i = 0; i < matrix.length - 1; i++) {
        for (let j = 0; j < matrix[i].length - 1; j++) {
            const square = parseInt(`${matrix[i][j]}${matrix[i][j + 1]}${matrix[i + 1][j]}${matrix[i + 1][j + 1]}`)
            set.add(square)
        }
    }
    return set.size
}

// Best Solution
function differentSquares(a) {
    var s = new Set;
    for (var i = 0; i < a.length - 1; i++) {
        for (var j = 0; j < a[0].length - 1; j++) {
            var hash = a[i][j] + 10 * a[i][j + 1] + 100 * a[i + 1][j] + 1000 * a[i + 1][j + 1];
            s.add(hash);
        }
    }
    return s.size;
}

console.log(differentSquares([
    [1, 2, 1],
    [2, 2, 2],
    [2, 2, 2],
    [1, 2, 3],
    [2, 2, 1]
]));
