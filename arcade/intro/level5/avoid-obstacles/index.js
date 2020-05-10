function avoidObstacles(inputArray) {

    let doBreak = false
    for (let i = 1; i < 1100;) {
        for (const value of inputArray) {
            if (value % i === 0) {
                i++;
                doBreak = true;
                break;
            }
        }
        if (doBreak) {
            doBreak = false
        } else {
            return i
        }
    }
}

// Best solution
function avoidObstacles(arr) {
    for (var n = 1; ; n++) if (arr.every(x => x % n)) return n
}

console.log(avoidObstacles([5, 3, 6, 7, 9]));
console.log(avoidObstacles([1, 4, 10, 6, 2]));
