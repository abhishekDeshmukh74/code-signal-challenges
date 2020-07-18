function digitsProduct(product) {
    let divisor = 9
    let nums = ''
    if (product === 0) return 10
    if (product === 1) return 1

    while (product !== 1) {
        if (product % divisor !== 0) {
            divisor--
        } else {
            nums += divisor;
            product = product / divisor
            divisor = 9
        }
        if (divisor === 1) {
            return -1
        }
    }
    return parseInt(nums.split('').reverse().join(''))
}

// Best Solution
function digitsProduct(product) {
    if (product == 0) return 10;
    if (product == 1) return 1;
    var divisor = 10,
        power = 1,
        result = 0;
    while (product > 1) {
        if (--divisor == 1) return -1;
        while (product % divisor == 0) {
            product /= divisor;
            result += divisor * power;
            power *= 10;
        }
    }
    return result;
}

console.log(digitsProduct(12));
console.log(digitsProduct(19));
console.log(digitsProduct(13));
