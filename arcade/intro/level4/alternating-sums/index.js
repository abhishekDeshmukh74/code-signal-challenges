function alternatingSums(a) {
    let sum1 = 0
    let sum2 = 0
    for (const [i, num] of a.entries()) {
        if (i % 2 === 0) {
            sum1 += num
        } else {
            sum2 += num
        }
    }
    return [sum1, sum2]
}

// best solution
alternatingSums = a => a.reduce((p, v, i) => (p[i & 1] += v, p), [0, 0])


console.log(alternatingSums([50, 60, 60, 45, 70]));
