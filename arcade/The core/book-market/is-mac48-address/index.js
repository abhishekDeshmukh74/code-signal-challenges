function isMAC48Address(inputString) {
    const a = ['A', 'B', 'C', 'D', 'E', 'F']
    const b = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

    const splits = inputString.split('-')
    if (splits.length !== 6) return false
    for (const split of splits) {
        const splitAgain = split.split('')
        if (splitAgain.length !== 2) return false
        if (!(a.includes(splitAgain[0]) || b.includes(splitAgain[0])) ||
            !(a.includes(splitAgain[1]) || b.includes(splitAgain[1]))
        ) return false
    }
    return true
}

// Best Solution
isMAC48Address = s => /^([0-9A-F]{2}-){5}[0-9A-F]{2}$/.test(s)

console.log(isMAC48Address('00-1B-63-84-45-E6'))
console.log(isMAC48Address('Z1-1B-63-84-45-E6'))
