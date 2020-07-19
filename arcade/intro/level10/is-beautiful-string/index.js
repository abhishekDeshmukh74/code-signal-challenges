function isBeautifulString(inputString) {

    const map = new Map()
    for (let i = 0; i < inputString.length; i++) {
        if (map.has(inputString.charAt(i))) {
            map.set(inputString.charAt(i), map.get(inputString.charAt(i)) + 1)
        } else {
            map.set(inputString.charAt(i), 1)
        }
    }
    const alphabets = 'abcdefghijklmnopqrstuvwxyz';
    console.log(inputString.split('a'));
    for (let i = 0; i < alphabets.length - 1; i++) {
        if (!map.has(alphabets[i])) {
            map.set(alphabets[i], 0)
        }
        if (map.get(alphabets[i]) < map.get(alphabets[i + 1])) {
            return false
        }
    }
    return true
}

// Best Solution
function isBeautifulString(inputString) {
    s = "abcdefghijklmnopqrstuvwxyz"
    for (i = 1; i < s.length; i++) {
        if (inputString.split(s[i]).length - 1 > inputString.split(s[i - 1]).length - 1) {
            return false
        }
    }
    return true
}

console.log(isBeautifulString('bbbaacdafe'))
console.log(isBeautifulString('aabbb'))
console.log(isBeautifulString('bbc'))
