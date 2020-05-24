function tennisSet(score1, score2) {
    if (score1 === 7 && (score2 === 5 || score2 === 6)) {
        return true
    }
    if (score2 === 7 && (score1 === 5 || score1 === 6)) {
        return true
    }
    if (score1 === 6 && score2 < 5) {
        return true
    }
    if (score2 === 6 && score1 < 5) {
        return true
    }
    return false
}

// best solution
function tennisSet(score1, score2) {
    var max = Math.max(score1, score2),
        min = Math.min(score1, score2);
    return (max == 6 && min < 5) || (max == 7 && min >= 5 && min <= 6);
}

console.log(tennisSet(3, 6));
