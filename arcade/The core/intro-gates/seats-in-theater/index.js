function seatsInTheater(nCols, nRows, col, row) {
    return (nCols + 1 - col) * (nRows - row)
}

// best solution
function seatsInTheater(nCols, nRows, col, row) {
    return (nCols - (col - 1)) * (nRows - row);
}

console.log(seatsInTheater(16, 11, 5, 3));
