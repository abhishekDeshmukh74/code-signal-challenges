function palindromeRearranging(inputString) {

    const map = new Map()
    for (const char of inputString.split('')) {
        if (map.has(char)) {
            map.set(char, map.get(char) + 1)
        } else {
            map.set(char, 1)
        }
    }

    let count = 0
    for (const [key, value] of map.entries()) {
        if (value % 2 === 1) {
            count++
        }
    }

    return count < 2
}

// Best answer
function palindromeRearranging(inputString) {
    return inputString.split('').sort().join('').replace(/(\w)\1/g, '').length < 2;
}

console.log(palindromeRearranging('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaabc'));
