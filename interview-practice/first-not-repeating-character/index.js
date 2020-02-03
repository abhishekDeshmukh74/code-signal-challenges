function firstNotRepeatingCharacter(s) {

    const map = new Map();

    for (let i = 0; i < s.length; i++) {
        if (map.has(s.charAt(i))) {
            map.set(s.charAt(i), map.get(s.charAt(i) + 1))
        } else {
            map.set(s.charAt(i), 1)
        }
    }
    for (const [key, value] of map.entries()) {
        if (value === 1) {
            return key
        }
    }
    return '_'
}

// best answer
firstNotRepeatingCharacter = s => {
    r = {}
    for (e of s)
        r[e] = -~r[e]
    for (e in r)
        if (r[e] == 1)
            return e
    return '_'
}


console.log(firstNotRepeatingCharacter('abacabad'))
