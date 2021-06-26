function additionWithoutCarrying(param1, param2) {

    const param1arr = param1.toString().split('')
    const param2arr = param2.toString().split('')
    const result = []

    if (param2arr.length !== param1arr.length) {
        if (param2arr.length > param1arr.length) {
            let diff = param2arr.length - param1arr.length
            while (diff !== 0) {
                param1arr.unshift('0')
                diff--
            }

        } else {
            let diff = param1arr.length - param2arr.length
            while (diff !== 0) {
                param2arr.unshift('0')
                diff--
            }
        }
    }

    for (let i = param2arr.length - 1; i >= 0; i--) {
        result.push((Number(param2arr[i])+Number(param1arr[i]) )% 10)
    }
    return Number(result.reverse().join(''))
}

// best solution
function additionWithoutCarrying(param1, param2) {
    var result = 0,
        num = 1;
    while (param1 + param2 > 0) {
        num *= 10;
        result += (param1 + param2) % num;
        param1 -= param1 % num;
        param2 -= param2 % num;
    }
    return result;
}

console.log(additionWithoutCarrying(456, 1734));
console.log(additionWithoutCarrying(99999,0));
