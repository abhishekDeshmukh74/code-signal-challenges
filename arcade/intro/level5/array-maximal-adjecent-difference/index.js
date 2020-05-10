function arrayMaximalAdjacentDifference(inputArray) {

    let maxAdjDiff = 0;
    for (let i = 0; i < inputArray.length - 1; i++) {
        const adjDiff = Math.abs(inputArray[i] - inputArray[i + 1]);
        if (adjDiff > maxAdjDiff) {
            maxAdjDiff = adjDiff;
        }
    }
    return maxAdjDiff
}

// Best solution
function arrayMaximalAdjacentDifference(arr) {
    return Math.max(...arr.slice(1).map((x, i) => Math.abs(x - arr[i])))
}

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));
