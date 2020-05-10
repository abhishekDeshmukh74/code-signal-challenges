function isIPv4Address(inputString) {
    const array = inputString.split('.');
    return array.length === 4 &&
        array.every(
            (element) => element && !['00', '01'].includes(element) && (element >= 0 && element <= 255)
        )
}


// Best solution
function isIPv4Address(s) {
    var r = s.split(".")
    return r.length === 4 && r.every(x => x != "" && !isNaN(x) && x >= 0 && x < 256)
}

console.log(isIPv4Address('172.316.254.1'));
console.log(isIPv4Address('64.233.161.00'));
