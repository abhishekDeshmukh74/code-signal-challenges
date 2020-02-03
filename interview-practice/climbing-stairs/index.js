const map = new Map();

function climbingStairs(n) {

    if (n === 1 || n === 2) {
        return n
    }

    if (map.has(n)) {
        return map.get(n)
    } else {
        const ways = climbingStairs(n - 1) + climbingStairs(n - 2)
        map.set(n, ways)
        return ways
    }

}

// best answer
climbingStairs = n => {
    a = [0, 1, 2]

    for (i = 2; ++i <= n;)
        a[i] = a[i - 1] + a[i - 2]

    return a[n]
}

console.log(climbingStairs(38));
