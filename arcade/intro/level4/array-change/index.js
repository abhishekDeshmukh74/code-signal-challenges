function arrayChange(inputArray) {

    let count = 0
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i + 1] <= inputArray[i]) {
            count += inputArray[i] - inputArray[i + 1] + 1
            inputArray[i + 1] = inputArray[i] + 1
        }
    }
    return count
}

// best solution
function arrayChange(series) {
    var moves = 0;

    for (var i = 1; i < series.length; i++) {
        if (series[i] <= series[i - 1]) {
            diff = series[i - 1] - series[i] + 1;
            series[i] += diff;
            moves += diff;
        }
    }

    return moves;
}

console.log(arrayChange([1, 1, 1]));
console.log(arrayChange([2, 1, 10, 1]));
