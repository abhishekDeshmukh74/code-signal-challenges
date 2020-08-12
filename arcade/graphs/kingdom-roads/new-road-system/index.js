function newRoadSystem(roadRegister) {
    for (let i = 0; i < roadRegister.length; i++) {
        const incoming = roadRegister[i].filter(e => e).length;
        const outgoing = roadRegister.map((road, j) => roadRegister[j][i]).filter(e => e).length
        if (incoming !== outgoing) return false
    }
    return true
}

// Best Solution
function newRoadSystem(roadRegister) {
    for (var i = 0; i < roadRegister.length; i++) {
        var from = roadRegister[i].filter(v => v).length
        var to = roadRegister.map(row => row[i]).filter(v => v).length
        if (from != to) return false
    }
    return true
}

console.log(newRoadSystem([
    [false, true, false],
    [false, false, false],
    [true, false, false]
]));
console.log(newRoadSystem([
    [false, true, false, false, false, false, false],
    [true, false, false, false, false, false, false],
    [false, false, false, true, false, false, false],
    [false, false, true, false, false, false, false],
    [false, false, false, false, false, false, true],
    [false, false, false, false, true, false, false],
    [false, false, false, false, false, true, false]
]));
