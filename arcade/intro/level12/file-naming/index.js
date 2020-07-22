function fileNaming(names) {
    const map = new Map()
    const newNames = []
    for (let name of names) {
        let newName;
        if (map.has(name)) {
            map.set(name, map.get(name) + 1)
            newName = `${name}(${map.get(name) - 1})`
        } else {
            newName = name
            map.set(name, 1)
        }
        let i = 0
        while (newNames.includes(newName)) {
            newName = `${name}(${map.get(name) + i})`
            i++
        }
        newNames.push(newName)
    }
    return newNames
}

// Best Solution
const fileNaming = names => {
    const used = {};
    return names.map(name => {
        let newName = name;
        while (used[newName]) {
            newName = `${name}(${used[name]++})`;
        }
        used[newName] = 1;
        return newName;
    });
};

console.log(fileNaming(["doc", "doc", "image", "doc(1)", "doc"]));
console.log(fileNaming(["a(1)", "a(6)", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a"]));
console.log(fileNaming(["dd", "dd(1)", "dd(2)", "dd", "dd(1)", "dd(1)(2)", "dd(1)(1)", "dd", "dd(1)"]));
