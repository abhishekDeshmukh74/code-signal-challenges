function reverseOnDiagonals(matrix) {
  const revDiagMatrix = [];

  for (let i = 0; i < matrix.length; i++) {
    revDiagMatrix[i] = [];
    for (let j = 0; j < matrix[i].length; j++) {
      if (i === j) {
        revDiagMatrix[i][j] = matrix[matrix[i].length - 1 - i][matrix[i].length - 1 - j];
        continue;
      }
      if (i + j === matrix[i].length - 1) {
        revDiagMatrix[i][j] = matrix[j][i];
        continue;
      }
      revDiagMatrix[i][j] = matrix[i][j];
    }
  }
  return revDiagMatrix;
}

// Best solution
const reverseOnDiagonals = (m) => {
  for (let i = 0, j = m.length - 1; i < m.length / 2; i++, j--) {
    [m[i][i], m[j][j]] = [m[j][j], m[i][i]];
    [m[i][j], m[j][i]] = [m[j][i], m[i][j]];
  }
  return m;
};

console.log(
  reverseOnDiagonals([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
