function containsDuplicates(arr) {

    const map = new Map()

    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) {
            return true
        }
        map.set(arr[i])
    }
    return false

}

// best solution
containsDuplicates = a => a.length > new Set(a).size


console.log(containsDuplicates([1, 2, 3, 1]));
