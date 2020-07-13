function extractEachKth(inputArray, k) {
    return inputArray.filter((element, i) => (i + 1) % k !== 0);
}

// Best Solution
function extractEachKth(arr, k) {
    return arr.filter((_, i) => (i + 1) % k)
}

console.log(extractEachKth([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3))
