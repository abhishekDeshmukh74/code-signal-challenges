function reachNextLevel(experience, threshold, reward) {
    if (experience + reward >= threshold) {
        return true
    }
    return false
}

// best solution
function reachNextLevel(experience, threshold, reward) {
    return experience + reward >= threshold
}

console.log(reachNextLevel(10, 15, 5));
