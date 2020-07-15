function depositProfit(deposit, rate, threshold) {
    let count = 0
    while (deposit < threshold) {
        deposit += deposit * rate / 100
        count++
    }
    return count
}

// Best Solution
function depositProfit(d, r, t) {
    return Math.ceil(Math.log(t / d) / Math.log(r / 100 + 1));
}

console.log(depositProfit(100, 20, 170))
