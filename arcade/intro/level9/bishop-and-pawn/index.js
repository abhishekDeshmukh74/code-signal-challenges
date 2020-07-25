function bishopAndPawn(bishop, pawn) {
    const alpha = [null, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
    const nums = [null, '1', '2', '3', '4', '5', '6', '7', '8']
    const [bishopRow, bishopColumn] = bishop.split('')
    const tracks = []
    for (let i = 1; i <= 9; i++) {
        if (alpha[alpha.indexOf(bishopRow) + i] && parseInt(nums[nums.indexOf(bishopColumn) + i]) < 9) {
            tracks.push(`${alpha[alpha.indexOf(bishopRow) + i]}${nums[nums.indexOf(bishopColumn) + i]}`)
        }
        if (alpha[alpha.indexOf(bishopRow) - i] && parseInt(nums[nums.indexOf(bishopColumn) - i]) > 0) {
            tracks.push(`${alpha[alpha.indexOf(bishopRow) - i]}${nums[nums.indexOf(bishopColumn) - i]}`)
        }
        if (alpha[alpha.indexOf(bishopRow) + i] && parseInt(nums[nums.indexOf(bishopColumn) - i]) > 0) {
            tracks.push(`${alpha[alpha.indexOf(bishopRow) + i]}${nums[nums.indexOf(bishopColumn) - i]}`)
        }
        if (alpha[alpha.indexOf(bishopRow) - i] && parseInt(nums[nums.indexOf(bishopColumn) + i]) < 9) {
            tracks.push(`${alpha[alpha.indexOf(bishopRow) - i]}${nums[nums.indexOf(bishopColumn) + i]}`)
        }
    }
    return tracks.includes(pawn)
}

// Best Solution
function bishopAndPawn(bishop, pawn) {
    return Math.abs(bishop[0].charCodeAt() - pawn[0].charCodeAt()) === Math.abs(bishop[1] - pawn[1])
}

console.log(bishopAndPawn('a1', 'c3'));
console.log(bishopAndPawn('h1', 'h3'));
console.log(bishopAndPawn('a5', 'c3'));
