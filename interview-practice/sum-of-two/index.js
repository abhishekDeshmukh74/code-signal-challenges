function sumOfTwo(a, b, v) {

    for (let i = 0; i < a.length; i++) {

        for (let j = 0; j < b.length; j++) {

            if (a[i] + b[j] === v) {
                return true
            }

        }
    }

    return false
}

function sumOfTwo(a, b, v) {

    const set = new Set();
    a.forEach(num => set.add(v - num))

    for (let i = 0; i < b.length; i++) {
        if (set.has(b[i])) {
            return true
        }
    }

    return false
}

// best solution
sumOfTwo = (a, b, v) => (
    b = new Set(b),
    a.some(e => b.has(v - e))
)

console.log(sumOfTwo([1, 2, 3], [10, 20, 30, 40], 42));
