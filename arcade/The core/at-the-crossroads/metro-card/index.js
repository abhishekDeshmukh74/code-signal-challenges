function metroCard(lastNumberOfDays) {
    const set = new Set();
    const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    for (const [index, month] of months.entries()) {
        if (month === lastNumberOfDays) {
            set.add(months[(index + 1) % months.length])
        }
    }
    return [...set]
}

// best solution
metroCard = (l) => l < 31 ? [31] : [28, 30, 31]

console.log(metroCard(30));
console.log(metroCard(31));
