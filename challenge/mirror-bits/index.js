function mirrorBits(n) {
    let b = []
    while (n !== 0) {
        b.push(n % 2)
        n = Math.floor(n / 2)
    }
    let num = 0
    b.reverse()
    for (let i = 0; i < b.length; i++) {
        if (b[i] === 1) {
            num += Math.pow(2, i)
        }
    }
    return num
}

console.log(mirrorBits(97));
