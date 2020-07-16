function sumUpNumbers(inputString) {
    const matches = inputString.match(/[0-9]+/g)
    if (matches) {
        return matches.reduce((a, c) => a + parseInt(c), 0);
    }
    return 0
}

// Best Solution
function sumUpNumbers(inputString) {
    return (inputString.match(/\d+/g) || []).reduce((a, b) => a + +b, 0)
}

console.log(sumUpNumbers('2 apples, 12 oranges'));
