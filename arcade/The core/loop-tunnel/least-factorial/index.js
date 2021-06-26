function leastFactorial(n) {
    const factorials = [1, 1]
    let i = 2
    while (factorials[i - 1] < n) {
        factorials.push(factorials[i - 1] * i)
        i++
    }
    return factorials[i - 1]
}

// Best Solution
function leastFactorial(n) {
    var k = 1;
    for (var i = 2; k < n; i++)
        k *= i;
    return k;
}

console.log(leastFactorial(17));
