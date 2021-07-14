function swapDiagonals(matrix) {
  const swapDiagMatrix = [];

  for (let i = 0; i < matrix.length; i++) {
    swapDiagMatrix[i] = [];
    for (let j = 0; j < matrix[i].length; j++) {
      if (i === j || i + j === matrix[i].length - 1) {
        swapDiagMatrix[i][j] = matrix[i][matrix[i].length - 1 - j];
      } else {
        swapDiagMatrix[i][j] = matrix[i][j];
      }
    }
  }
  return swapDiagMatrix;
}

// Best solution
function swapDiagonals(matrix) {
  let { length: len } = matrix;
  for (let i = 0; i < len; i++) {
    [matrix[i][i], matrix[i][len - i - 1]] = [matrix[i][len - i - 1], matrix[i][i]];
  }
  return matrix;
}

console.log(
  swapDiagonals([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
