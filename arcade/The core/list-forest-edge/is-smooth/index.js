function isSmooth(arr) {
    const center = arr.length / 2
    const middle = arr.length % 2 === 0 ? arr[center] + arr[center - 1] : arr[Math.floor(center)]
    return arr[0] === arr[arr.length - 1] && arr[0] === middle
}

// Best Solution
function isSmooth(arr) {
    const l = arr.length - 1;
    return arr[0] == arr[l] && arr[0] == arr[Math.floor(l / 2)] + (l % 2 ? arr[Math.ceil(l / 2)] : 0);
}

console.log(isSmooth([7, 2, 2, 5, 10, 7]))
console.log(isSmooth([-5, -5, 10]))
