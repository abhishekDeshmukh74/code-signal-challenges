function arrayMaxConsecutiveSum(arr, k) {
    // parse to typedArray
    let LIMIT = arr.length;
    let typedArray = new Int32Array(new ArrayBuffer(LIMIT * 4));
    const arraySum = (array) => {
        let total = 0;
        for (let i = 0; i < array.length; i++) {
            total += array[i]
        }
        return total;
    }
    for (let i = 0; i < arr.length; i++) {
        typedArray[i] = arr[i];
    }
    return Math.max(...typedArray.map((e, i) => arraySum(typedArray.slice(i, i + k))))
}

// Best Solution
function arrayMaxConsecutiveSum(inputArray, k) {
    s = m = inputArray.slice(0, k).reduce((x, y) => x + y)
    for (i = k; i < inputArray.length; i++) {
        s += inputArray[i] - inputArray[i - k]
        if (s > m) { m = s }
    }
    return m
}

console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2));
console.log(arrayMaxConsecutiveSum([1, 3, 2, 4], 3));
console.log(arrayMaxConsecutiveSum([963, 741, 22, 851, 399, 382, 190, 247, 494, 452, 891, 532, 795, 920, 465, 831, 344, 391, 582, 897, 763, 951, 735, 806, 320, 702, 200, 59, 870, 345, 695, 321, 817, 83, 416, 36, 914, 335, 117, 985, 690, 303, 875, 556, 292, 309, 496, 791, 509, 360, 235, 784, 607, 341], 23));
