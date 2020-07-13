function evenDigitsOnly(n) {
    return n.toString().split('').every(e => e % 2 === 0)
}

// Best solution
function evenDigitsOnly(n) {
    return !(n + '').match(/[13579]/)
}

console.log(evenDigitsOnly(248622))
