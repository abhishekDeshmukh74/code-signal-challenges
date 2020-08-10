function removeArrayPart(inputArray, l, r) {
    return [...inputArray.slice(0, l), ...inputArray.slice(r + 1)]
}

// Best Solution
function removeArrayPart(inputArray, l, r) {
    return inputArray.slice(0, l).concat(inputArray.slice(r + 1))
}

console.log(removeArrayPart([2, 3, 2, 3, 4, 5], 2, 4))
