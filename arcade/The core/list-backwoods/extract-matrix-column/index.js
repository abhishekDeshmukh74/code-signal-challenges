function extractMatrixColumn(matrix, column) {
  let nthValues = [];
  for (let i = 0; i < matrix.length; i++) {
    nthValues.push(matrix[i][column]);
  }
  return nthValues;
}

// Best solution
const extractMatrixColumn = (matrix, column) => matrix.map((val) => val[column]);

console.log(
  extractMatrixColumn(
    [
      [1, 1, 1, 2],
      [0, 5, 0, 4],
      [2, 1, 3, 6],
    ],
    2
  )
);
