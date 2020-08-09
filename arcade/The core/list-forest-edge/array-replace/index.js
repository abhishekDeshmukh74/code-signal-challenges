function arrayReplace(inputArray, elemToReplace, substitutionElem) {
    return inputArray.map(e => e === elemToReplace ? substitutionElem : e)
}

// Best Solution
function arrayReplace(inputArray, elemToReplace, substitutionElem) {
    return inputArray.map(i => i == elemToReplace ? substitutionElem : i)
}

console.log(arrayReplace([1, 2, 1], 1, 3))
