function isInfiniteProcess(a, b) {
    if (a > b) {
        return true
    }
    return (a - b) % 2 !== 0
}

// best solution
function isInfiniteProcess(a, b) {
    return a > b || a % 2 != b % 2;
}

console.log(isInfiniteProcess(2, 6))
console.log(isInfiniteProcess(2, 3))
console.log(isInfiniteProcess(3, 1))
console.log(isInfiniteProcess(10, 0))
