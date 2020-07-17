function killKthBit(n, k) {
    let b = []
    let itr = 1
    while (n !== 0) {
        if (itr === k) {
            b.push(0)
        } else {
            b.push(n % 2)
        }
        n = Math.floor(n / 2)
        itr++
    }
    itr = 0
    let num = 0
    for (let i = 0; i < b.length; i++) {
        if (b[i] === 1) {
            num += Math.pow(2, itr)
        }
        itr++
    }
    return num
}

// Best Solution
function killKthBit(n, k) {
    return n & ~(1 << k - 1);
}

console.log(killKthBit(37, 3));
console.log(killKthBit(37, 4));
