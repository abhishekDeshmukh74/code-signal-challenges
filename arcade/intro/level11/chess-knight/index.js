function chessKnight(cell) {
    const alpha = [null, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
    const nums = [null, '1', '2', '3', '4', '5', '6', '7', '8']
    let count = 0
    const [rowPos, columnPos] = cell.split('')
    if (alpha[alpha.indexOf(rowPos) + 2] && nums.indexOf(columnPos) + 1 < 9) count++
    if (alpha[alpha.indexOf(rowPos) + 2] && nums.indexOf(columnPos) - 1 > 0) count++
    if (alpha[alpha.indexOf(rowPos) - 2] && nums.indexOf(columnPos) + 1 < 9) count++
    if (alpha[alpha.indexOf(rowPos) - 2] && nums.indexOf(columnPos) - 1 > 0) count++

    if (alpha[alpha.indexOf(rowPos) + 1] && nums.indexOf(columnPos) + 2 < 9) count++
    if (alpha[alpha.indexOf(rowPos) - 1] && nums.indexOf(columnPos) + 2 < 9) count++
    if (alpha[alpha.indexOf(rowPos) + 1] && nums.indexOf(columnPos) - 2 > 0) count++
    if (alpha[alpha.indexOf(rowPos) - 1] && nums.indexOf(columnPos) - 2 > 0) count++
    return count
}

// Best Solution
function chessKnight(cell) {
    let j = 'abcdefgh'.indexOf(cell[0]) + 1,
        i = cell[1] * 1;
    return [[2, 1], [2, -1], [1, 2], [1, -2], [-2, 1], [-2, -1], [-1, 2], [-1, -2]].filter(el =>
        i + el[0] > 0 && i + el[0] <= 8 &&
        j + el[1] > 0 && j + el[1] <= 8
    ).length;
}

console.log(chessKnight('a1'))
console.log(chessKnight('b7'))
