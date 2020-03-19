function circleOfNumbers(n, firstNumber) {
    return (firstNumber + Math.floor(n / 2)) % n
}

// best solution
function circleOfNumbers(n, firstNumber) {
    return (firstNumber + n / 2) % n;
}

console.log(circleOfNumbers(10, 2));
