function alphabeticShift(inputString) {
    const alphabets = 'abcdefghijklmnopqrstuvwxyz';
    let output = '';
    for (let i = 0; i < inputString.length; i++) {
        if (inputString.charAt(i) === 'z') {
            output += 'a'
        } else {
            output += alphabets[alphabets.indexOf(inputString.charAt(i)) + 1]
        }
    }
    return output
}

// Best Solution
function alphabeticShift(s) {
    var c = "abcdefghijklmnopqrstuvwxyza"
    return s.replace(/./g, x => c[c.indexOf(x) + 1])
}

console.log(alphabeticShift('crazy'))
