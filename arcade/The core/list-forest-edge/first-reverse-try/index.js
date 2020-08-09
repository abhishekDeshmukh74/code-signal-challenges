function firstReverseTry(arr) {
    if (arr.length === 0) return []
    if (arr.length === 1) return arr
    return [arr[arr.length - 1], ...arr.slice(1, arr.length - 1), arr[0]]
}

// Best Solution
function firstReverseTry(arr) {
    [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];
    return arr[0] === undefined ? [] : arr;
}

console.log(firstReverseTry([1, 2, 3, 4, 5]))
