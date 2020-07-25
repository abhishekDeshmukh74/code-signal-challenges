function sudoku(grid) {
    for (let i = 0; i < grid.length; i++) {
        if (grid[i].length !== new Set(grid[i]).size) return false
        const columns = [
            grid[0][i], grid[1][i], grid[2][i], grid[3][i], grid[4][i],
            grid[5][i], grid[6][i], grid[7][i], grid[8][i]
        ]
        if (columns.length !== new Set(columns).size) return false
        if (i % 3 === 0) {
            for (let j = 0; j < grid[i].length; j += 3) {
                const subGrid = [
                    grid[i][j], grid[i][j + 1], grid[i][j + 2],
                    grid[i + 1][j], grid[i + 1][j + 1], grid[i + 1][j + 2],
                    grid[i + 2][j], grid[i + 2][j + 1], grid[i + 2][j + 2],
                ]
                if (subGrid.length !== new Set(subGrid).size) return false
            }
        }
    }
    return true
}

// Best Solution
// True, if product of #s in row is 9!
p = a => eval(a.join`*`) == 362880

// Check each row, column and 3 block grid using p()
sudoku = grid =>
    grid.every((r, i) =>
        p(r) &&
        p(grid.map(r => r[i])) &&
        p(r.map((_, j) => grid[3 * (i / 3 | 0) + (j / 3 | 0)][3 * (i % 3) + (j % 3)])))


console.log(sudoku([
    [1, 3, 2, 5, 4, 6, 9, 8, 7],
    [4, 6, 5, 8, 7, 9, 3, 2, 1],
    [7, 9, 8, 2, 1, 3, 6, 5, 4],
    [9, 2, 1, 4, 3, 5, 8, 7, 6],
    [3, 5, 4, 7, 6, 8, 2, 1, 9],
    [6, 8, 7, 1, 9, 2, 5, 4, 3],
    [5, 7, 6, 9, 8, 1, 4, 3, 2],
    [2, 4, 3, 6, 5, 7, 1, 9, 8],
    [8, 1, 9, 3, 2, 4, 7, 6, 5]
]));
