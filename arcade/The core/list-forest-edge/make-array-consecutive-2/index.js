function makeArrayConsecutive2(statues) {
    return Math.max(...statues) - Math.min(...statues) - new Set(statues).size + 1
}

// Best Solution
function makeArrayConsecutive2(sequence) {
    return Math.max(...sequence) - Math.min(...sequence) - sequence.length + 1;
}

console.log(makeArrayConsecutive2([6, 2, 3, 8]))
