function almostIncreasingSequence(sequence) {
    for (let i = 0; i < sequence.length; i++) {
        if (sequence[i + 1] <= sequence[i]) {
            if (sequence[i + 1] <= sequence[i - 1]) {
                sequence.splice(i + 1, 1);
            } else {
                sequence.splice(i, 1);
            }
            break
        }
    }
    for (let i = 0; i < sequence.length; i++) {
        if (sequence[i + 1] <= sequence[i]) {
            return false
        }
    }
    return true
}

// Best Solution
function almostIncreasingSequence(seq) {
    var bad = 0
    for (var i = 1; i < seq.length; i++) if (seq[i] <= seq[i - 1]) {
        bad++
        if (bad > 1) return false
        if (seq[i] <= seq[i - 2] && seq[i + 1] <= seq[i - 1]) return false
    }
    return true
}

console.log(almostIncreasingSequence([1, 3, 2, 1]));
console.log(almostIncreasingSequence([1, 3, 2]));
console.log(almostIncreasingSequence([1, 2, 1, 2]));
console.log(almostIncreasingSequence([10, 1, 2, 3, 4, 5]));
console.log(almostIncreasingSequence([1, 2, 3, 4, 3, 6]));
