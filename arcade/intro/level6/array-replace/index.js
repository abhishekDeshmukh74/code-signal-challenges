function arrayReplace(inputArray, elemToReplace, substitutionElem) {
    return inputArray.map((element) => element === elemToReplace ? substitutionElem : element)
}

// Best Solution
function arrayReplace(inputArray, elemToReplace, substitutionElem) {
    return inputArray.map(i => i == elemToReplace ? substitutionElem : i)
}


console.log(arrayReplace([1, 2, 1], 1, 3))
