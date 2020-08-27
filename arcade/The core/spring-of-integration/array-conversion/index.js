function arrayConversion(inputArray, iteration = 1) {

    if (inputArray.length === 1) return inputArray.pop();
    let i = 0
    const newArr = []
    while (i < inputArray.length) {
        if (iteration % 2 !== 0) {
            newArr.push(inputArray[i] + inputArray[i + 1])
        }
        else {
            newArr.push(inputArray[i] * inputArray[i + 1])
        }
        i += 2
    }
    return arrayConversion(newArr, ++iteration)
}

// Best Solution
function arrayConversion(inputArray) {
    let addFlag = true,
        tempArray = [],
        i = 0;

    while (inputArray.length > 1) {
        while (i < inputArray.length - 1) {
            tempArray.push(addFlag ? inputArray[i] + inputArray[i + 1] : inputArray[i] * inputArray[i + 1]);
            i += 2;
        }
        i = 0;
        inputArray = tempArray;
        tempArray = [];
        addFlag = !addFlag;
    }

    return inputArray[0];
}

console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]));
