function spiralNumbers(n) {
    const spiral = []
    for (let i = 0; i < n; i++) {
        spiral[i] = []
        for (let j = 0; j < n; j++) {
            spiral[i][j] = null
        }
    }
    let num = 0
    let i = 0
    let j = 0
    const centerIndex = Math.floor(n / 2)
    while (num <= n * n - 1) {
        num++
        spiral[i][j] = num
        // LeftTop-RightTop
        if ((i - 1 === j && i <= centerIndex) || (i <= j && i < centerIndex && i + j < n - 1)) {
            j++
            continue
        }
        // RightTop-RightDown
        if (i < j && j >= centerIndex && i + j >= n - 1) {
            i++
            continue
        }
        // RightDown-LeftDown
        if (i >= j && i >= centerIndex && i + j > n - 1) {
            j--
            continue
        }
        // LeftDown-LeftUp
        if (i > j && j < centerIndex && i + j <= n - 1) {
            i--
            continue
        }
    }
    return spiral
}

// Best Solution
function spiralNumbers(n) {
    var matrix = [...Array(n)].map(_ => []),
        x = 0,
        y = 0,
        dir = 2,
        size = n,
        c = 0;
    for (var i = 1; i <= n * n; i++) {
        matrix[y][x] = i;
        if (++c == size) {
            dir = (dir + 1) % 4;
            size -= dir % 2;
            c = 0;
        }
        if (dir % 2 == 0) x += dir > 1 ? 1 : -1;
        else y += dir > 1 ? 1 : -1;
    }
    return matrix;
}

console.log(spiralNumbers(1));
console.log(spiralNumbers(2));
console.log(spiralNumbers(3));
console.log(spiralNumbers(5));
console.log(spiralNumbers(6));
