function matrixElementsSum(matrix) {
    let total = 0
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                if (i + 1 >= matrix.length) {
                    continue;
                }
                matrix[i + 1][j] = 0
            } else {
                console.log('i:', i, ' j:', j)
                total += matrix[i][j]
            }
        }
    }
    return total
}

// Best Solution
function matrixElementsSum(matrix) {
    for (var r = 0, j = 0; j < matrix[0].length; j++) {
        for (var i = 0; i < matrix.length; i++) {
            if (matrix[i][j] === 0) break
            else r += matrix[i][j]
        }
    }
    return r
}

console.log(matrixElementsSum(
    [[1, 1, 1, 0],
    [0, 5, 0, 1],
    [2, 1, 3, 10]]
));
console.log(matrixElementsSum(
    [[1, 0, 3],
    [0, 2, 1],
    [1, 2, 0]]
));
