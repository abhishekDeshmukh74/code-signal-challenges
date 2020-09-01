function isPower(n) {
    if (n === 1) return true
    let i = 2;
    while (i <= 20) {
        if (n % i === 0) {
            let newN = n / i
            while (newN % i === 0) {
                if (newN === i) {
                    return true
                }
                newN = newN / i
            }
            i++
        } else {
            i++
        }
    }
    return false
}

// Best Solution
function isPower(n) {
    if (n == 1) return true;
    for (i = 2; i <= Math.sqrt(n); i++) {
        for (j = 2; Math.pow(i, j) < n; j++);
        if (Math.pow(i, j) == n) return true;
    }
    return false;
}

console.log(isPower(125))
console.log(isPower(72))
console.log(isPower(100))
console.log(isPower(1))
