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

// Best Solutions
function mirrorBits(a) {
    r = 0;
    while (a) {
        r = r << 1
        r += a % 2
        a = a >> 1
    }
    return r
}

function mirrorBits(a) {
    return parseInt([...a.toString(2)].reverse().join(''), 2);
}

console.log(mirrorBits(97));
