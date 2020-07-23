function arrayPacking(a) {
    const packs = []
    for (let e of a) {
        let b = []
        while (e !== 0) {
            b.push(e % 2)
            e = Math.floor(e / 2)
        }
        b.reverse()
        packs.unshift(b)
    }
    let finalString = ''
    for (const pack of packs) {
        finalString += '0'.repeat(8 - pack.length) + pack.join('')
    }
    return parseInt(finalString, 2)
}

// Best Solution
function arrayPacking(a) {
    return a.reduce((value, byte, i) => value + byte * Math.pow(256, i));
}

console.log(arrayPacking([24, 85, 0]));
