function makeArrayConsecutive2(statues) {
    return Math.max(...statues) - Math.min(...statues) - (statues.length - 1)
}

// best solution
function makeArrayConsecutive2(sequence) {
    return Math.max(...sequence) - Math.min(...sequence) + 1 - sequence.length
}


console.log(makeArrayConsecutive2([6, 2, 3, 8]));
console.log(makeArrayConsecutive2([0, 3]));
