function areSimilar(a, b) {

    if (a.toString() === b.toString()) {
        return true
    }

    const c = []
    const d = []
    for (const [i, value] of a.entries()) {
        if (a[i] !== b[i]) {
            c.push(a[i])
            d.push(b[i])
        }
    }
    return c.length === 2 && (c.reverse().toString() === d.toString())
}

// best solution
function areSimilar(a, b) {
    const ad = a.filter((v, i) => v != b[i])
    const bd = b.filter((v, i) => v != a[i])
    return ad.length == 0 || (ad.length == 2 && ad.join('') == bd.reverse().join(''))
}

console.log(areSimilar([1, 2, 3], [2, 1, 3]));
console.log(areSimilar([1, 1, 4], [1, 2, 3]));
