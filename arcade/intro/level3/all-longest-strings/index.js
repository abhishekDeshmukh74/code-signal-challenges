function allLongestStrings(inputArray) {

    let maxLength = 0
    for (const input of inputArray) {
        input.length > maxLength ? maxLength = input.length : null
    }

    return inputArray.filter((input) => input.length === maxLength)

}

// best solution
function allLongestStrings(inputArray) {
    'use strict';
    let maxSize = Math.max(...inputArray.map(x => x.length));
    return inputArray.filter(x => x.length === maxSize);
}


console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));
