function firstDigit(inputString) {
    for (let i = 0; i < inputString.length; i++) {
        const value = parseInt(inputString.charAt(i))
        if (value || value === 0) {
            return inputString.charAt(i)
        }
    }
}

// Best Solution
function firstDigit(s) {
    return s.match(/\d/)[0]
}

console.log(firstDigit('var_1__Int'))
console.log(firstDigit('0ss'))
