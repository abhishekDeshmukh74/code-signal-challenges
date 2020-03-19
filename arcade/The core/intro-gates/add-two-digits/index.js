function addTwoDigits(n) {
    return n.toString().split('').reduce((a, b) => parseInt(a) + parseInt(b), 0)
}

// best answer
function addTwoDigits(n) {
    return n % 10 + Math.floor(n / 10)
}

console.log(addTwoDigits(29));
