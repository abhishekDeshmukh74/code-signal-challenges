function maxMultiple(divisor, bound) {
    while (bound > 0) {
        if (bound % divisor === 0) {
            return bound
        }
        bound--
    }
}

// best solution
function maxMultiple(divisor, bound) {
    return bound - (bound % divisor);
}

console.log(maxMultiple(3, 10));
