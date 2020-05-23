function extraNumber(a, b, c) {
    if (a === b) {
        return c
    }
    if (b === c) {
        return a
    }
    return b
}

// best solution
function extraNumber(a, b, c) {
    return (a ^ b) ^ c
}


console.log(extraNumber(2, 7, 2))
