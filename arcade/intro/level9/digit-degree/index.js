function digitDegree(n) {
    let degree = 0;
    while (n > 9) {
        const addition = n.toString().split('').reduce((a, c) => a + parseInt(c), 0)
        n = addition
        degree++
    }
    return degree
}

// Best Solution
function digitDegree(n) {
    c = 0
    while (n.toString().length > 1) {
        n = n.toString().split("").reduce((x, y) => Number(x) + Number(y))
        c++
    }
    return c
}

console.log(digitDegree(91));
