function growingPlant(upSpeed, downSpeed, desiredHeight) {

    let currentHeight = 0
    let day = 0
    while (currentHeight < desiredHeight) {
        day++
        currentHeight += upSpeed
        if (currentHeight >= desiredHeight) break;
        currentHeight -= downSpeed
    }
    return day
}

// Best Solution
function growingPlant(upSpeed, downSpeed, desiredHeight) {
    return upSpeed > desiredHeight ? 1 : Math.ceil((desiredHeight - upSpeed) / (upSpeed - downSpeed)) + 1;
}

console.log(growingPlant(100, 10, 910));
