function chessBoardCellColor(cell1, cell2) {
    const alpha = [null, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
    const s1 = cell1.split('')
    const s2 = cell2.split('')
    return (parseInt(s1[1]) + alpha.indexOf(s1[0])) % 2 === (parseInt(s2[1]) + alpha.indexOf(s2[0])) % 2
}

// Best Solution
// Get the color (0=black, 1=white) for a given cell
var color = s => (Buffer(s)[0] - s[1]) % 2

var chessBoardCellColor = (a, b) => color(a) == color(b)


console.log(chessBoardCellColor('A1', 'B2'));
console.log(chessBoardCellColor('A1', 'C3'));
console.log(chessBoardCellColor('A1', 'A2'));
