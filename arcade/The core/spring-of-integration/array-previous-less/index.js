function arrayPreviousLess(items) {
    const output = []
    for (const [i, item] of items.entries()) {
        let prevIndex = i - 1
        let added = false
        while (prevIndex >= 0) {
            if (items[prevIndex] < item) {
                output.push(items[prevIndex])
                added = true
                break
            }
            prevIndex--
        }
        if (!added) output.push(-1)
    }
    return output
}

console.log(arrayPreviousLess([3, 5, 2, 4, 5]));
console.log(arrayPreviousLess([2, 2, 1, 3, 4, 5, 5, 3]));
