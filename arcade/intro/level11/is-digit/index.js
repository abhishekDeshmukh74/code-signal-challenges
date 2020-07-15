function isDigit(symbol) {
    return (parseInt(symbol) || parseInt(symbol) == 0) ? true : false
}

// Best Solution
function isDigit(symbol) {
    return !isNaN(symbol)
}

console.log(isDigit('0'));
console.log(isDigit('-'));
console.log(isDigit('1'));
