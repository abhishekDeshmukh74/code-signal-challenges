function candies(n, m) {
    return Math.floor(m / n) * n
}

// best answer
function candies(n, m) {
    return m - m % n;
}

console.log(candies(3, 10))
