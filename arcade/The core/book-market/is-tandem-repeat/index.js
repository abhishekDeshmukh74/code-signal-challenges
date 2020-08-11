function isTandemRepeat(inputString) {
    return inputString.slice(0, inputString.length / 2) === inputString.slice(inputString.length / 2)
}

// Best Solution
function isTandemRepeat(inputString) {
    var middle = inputString.length / 2;
    return inputString.slice(0, middle) == inputString.slice(middle);
}

console.log(isTandemRepeat('tandemtandem'));
