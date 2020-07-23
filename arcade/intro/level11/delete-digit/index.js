function deleteDigit(n) {
    let nArr = n.toString().split('')
    const tries = []
    for (let i = 0; i < 9; i++) {
        if (nArr.includes(i.toString())) {
            nArr.splice(nArr.indexOf(i.toString()), 1)
            tries.push(parseInt(nArr.join('')))
            nArr = n.toString().split('')
        }
    }
    return Math.max(...tries)
}

// Best Solution
function deleteDigit(n) {
    s = n.toString()
    return Math.max(...[...Array(s.length).keys()].map(i => Number(s.slice(0, i) + s.slice(i + 1))))
}

console.log(deleteDigit(152));
console.log(deleteDigit(222250));
