function adjacentElementsProduct(inputArray) {

    const adjacentSum = [];
    for (let i = 0; i < inputArray.length - 1; i++) {
        adjacentSum.push(inputArray[i] * inputArray[i + 1])
    }

    return Math.max(...adjacentSum)
}

// best solution
function adjacentElementsProduct(arr) {
    return Math.max(...arr.slice(1).map((x, i) => [x * arr[i]]))
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
