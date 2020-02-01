function firstDuplicate(arr) {

    const map = new Map()

    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) {
            return arr[i]
        }
        map.set(arr[i])
    }
    return -1

}

// best solution
firstDuplicate = a => {
    r = new Set()
    for (e of a)
        if (r.has(e))
            return e
        else
            r.add(e)
    return -1
}


console.log(firstDuplicate([2, 1, 3, 5, 3, 2]));
