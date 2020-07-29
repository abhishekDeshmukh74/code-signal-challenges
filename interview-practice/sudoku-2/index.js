function sudoku2(grid) {
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === '.' || grid[i][j] === ',') grid[i][j] = ''
        }
    }
    for (let i = 0; i < grid.length; i++) {
        const filteredRow = grid[i].filter(e => e !== '')
        if (filteredRow.length !== new Set(filteredRow).size) return false
        const columns = [
            grid[0][i], grid[1][i], grid[2][i], grid[3][i], grid[4][i],
            grid[5][i], grid[6][i], grid[7][i], grid[8][i]
        ]
        const filteredCol = columns.filter(e => e !== '')
        if (filteredCol.length !== new Set(filteredCol).size) return false
        if (i % 3 === 0) {
            for (let j = 0; j < grid[i].length; j += 3) {
                const subGrid = [
                    grid[i][j], grid[i][j + 1], grid[i][j + 2],
                    grid[i + 1][j], grid[i + 1][j + 1], grid[i + 1][j + 2],
                    grid[i + 2][j], grid[i + 2][j + 1], grid[i + 2][j + 2],
                ]
                const filteredSubGrid = subGrid.filter(e => e !== '')
                if (filteredSubGrid.length !== new Set(filteredSubGrid).size) return false
            }
        }
    }
    return true
}

// Best Solution
function sudoku2(grid) {
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            var c = grid[i][j];
            if (c !== '.') {
                // check row
                for (var z = 0; z < 9; z++) {
                    if (j !== z && grid[i][z] === c)
                        return false;
                }
                // check column
                for (var z = 0; z < 9; z++) {
                    if (i !== z && grid[z][j] === c)
                        return false;
                }
                // check square
                var a = i - i % 3,
                    b = j - j % 3;
                for (var x = a; x < a + 3; x++) {
                    for (var y = b; y < b + 3; y++) {
                        if (x !== i && y !== j && grid[x][y] === c)
                            return false;
                    }
                }
            }
        }
    }
    return true;
}

console.log(sudoku2([
    ['.', '.', '.', '1', '4', '.', '.', '2', '.'],
    ['.', '.', '6', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '1', '.', '.', '.', '.', '.', '.'],
    ['.', '6', '7', '.', '.', '.', '.', '.', '9'],
    ['.', '.', '.', '.', '.', '.', '8', '1', '.'],
    ['.', '3', '.', '.', '.', '.', '.', '.', '6'],
    ['.', '.', '.', '.', '.', '7', '.', '.', '.'],
    ['.', '.', '.', '5', '.', '.', '.', '7', '.']
]));
