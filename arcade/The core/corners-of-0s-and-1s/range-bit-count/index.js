function rangeBitCount(a, b) {
    const arr = []
    for (let i = a; i <= b; i++) {
        arr.push(i)
    }
    return arr.map(n => {
        let b = []
        while (n !== 0) {
            b.push(n % 2)
            n = Math.floor(n / 2)
        }
        return b.reverse()
    }).reduce((a, c) => a + c.filter(e => e).length, 0)
}

// Best Solution
function rangeBitCount(a, b) {
    var packed = "";
    while (a <= b) {
        packed += a.toString(2);
        a++;
    }
    return packed.split('1').length - 1;
}

console.log(rangeBitCount(2, 7))
