function sortByHeight(array) {
    const TREE = -1
    const people = array.filter(e => e !== TREE).sort((a, b) => a - b)
    return array.map((e, index) => e === TREE ? TREE : people.shift())
}

// Best Solution
function sortByHeight(a) {
    var s = a.filter(h => h > 0).sort((a, b) => a - b)
    return a.map(p => {
        if (p !== -1) {
            return s.shift();
        }

        return -1;
    })
}

console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));
console.log(sortByHeight([4, 2, 9, 11, 2, 16]));
