function electionsWinners(votes, k) {
    const max = Math.max(...votes)
    if (k === 0) {
        return votes.filter(e => e === max).length > 1 ? 0 : 1
    }
    return votes.filter(e => e + k > max).length
}

// Best Solution
function electionsWinners(votes, k) {
    var max = Math.max(...votes)
    var r = votes.filter(x => x + k > max || x === max).length
    return k ? r : r == 1 ? 1 : 0
}

console.log(electionsWinners([2, 3, 5, 2], 3));
console.log(electionsWinners([5, 1, 3, 4, 1], 0));
console.log(electionsWinners([1, 3, 3, 1, 1], 0));
