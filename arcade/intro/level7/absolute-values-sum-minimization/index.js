function absoluteValuesSumMinimization(a) {
    const sums = []
    a.forEach(element => {
        sums.push(a.reduce((a, c) => a + Math.abs(c - element), 0))
    });
    return a[sums.indexOf(Math.min(...sums))]
}

// Best Solution
function absoluteValuesSumMinimization(A) {
    return A[Math.ceil(A.length / 2) - 1];
}

console.log(absoluteValuesSumMinimization([2, 4, 7]));
