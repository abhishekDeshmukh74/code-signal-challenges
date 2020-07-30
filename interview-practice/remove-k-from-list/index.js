function removeKFromList(l, k) {
    const output = []
    while (l) {
        if (l.value !== k) {
            output.push(l.value)
        }
        l = l.next
    }
    return output
}

// Best Solution
function removeKFromList(l, k) {
    if (l === null) return null;
    else {
        l.next = removeKFromList(l.next, k);
        return (l.value === k) ? l.next : l
    }
}

console.log(removeKFromList({
    value: 3,
    next: {
        value: 1,
        next: {
            value: 2,
            next: {
                value: 3,
                next: {
                    value: 4,
                    next: {
                        value: 5,
                        next: null
                    }
                }
            },
        },
    },
}, 3));
