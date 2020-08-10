function replaceMiddle(arr) {
    const center = arr.length / 2
    if (arr.length % 2 === 0) {
        return [...arr.slice(0, center - 1), arr[center] + arr[center - 1], ...arr.slice(center + 1)]
    }
    return arr
}

// Best Solution
function replaceMiddle(arr) {
    const l = arr.length - 1;
    if (l % 2) {
        arr[Math.floor(l / 2)] += arr[Math.ceil(l / 2)];
        arr.splice(Math.ceil(l / 2), 1);
    }
    return arr;
}

console.log(replaceMiddle([7, 2, 2, 5, 10, 7]));
console.log(replaceMiddle([-5, -5, 10]))
