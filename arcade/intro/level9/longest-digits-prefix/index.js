function longestDigitsPrefix(inputString) {
    const matches = inputString.match(/[0-9]*/)
    if (matches) {
        return matches.sort()[matches.length - 1]
    }
    return ''
}

// Best Solution
function longestDigitsPrefix(inputString) {
    return inputString.match(/^\d*/)[0]
}

console.log(longestDigitsPrefix('123aa1'));
console.log(longestDigitsPrefix('0123456789'));
