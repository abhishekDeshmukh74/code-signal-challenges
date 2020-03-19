function phoneCall(min1, min2_10, min11, s) {

    let longestCall = 0;
    if (Math.floor(s / min1) > 0) {
        longestCall += 1
        s = s - min1
    } else {
        return 0
    }

    if (s >= 2 && s <= 10) {
        longestCall += Math.floor(s / min2_10)
        return longestCall
    } else if (s === 0) {
        return longestCall
    } else {
        longestCall += 9
        s -= min2_10 * 9
    }
    if (s > 1) {
        longestCall += Math.floor(s / min11)
    }
    return longestCall
}

// best solution
function phoneCall(min1, min2_10, min11, S) {
    if (S < min1) return 0;
    S -= min1;
    if (S < min2_10 * 9) return S / min2_10 + 1 | 0;
    S -= min2_10 * 9;
    return S / min11 + 10 | 0;
}

console.log(phoneCall(1, 2, 1, 6));
console.log(phoneCall(10, 10, 10, 8));
