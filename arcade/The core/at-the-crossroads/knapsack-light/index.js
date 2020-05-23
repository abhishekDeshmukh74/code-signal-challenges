function knapsackLight(value1, weight1, value2, weight2, maxW) {
    if (maxW >= weight1 + weight2) {
        return value1 + value2
    } else if (maxW < weight1 && maxW < weight2) {
        return 0
    } else if (weight2 > maxW) {
        return value1
    } else {
        return Math.max(value1, value2)
    }
}

// best solution
function knapsackLight(value1, weight1, value2, weight2, maxW) {
    return Math.max(
        maxW >= weight1 && value1,
        maxW >= weight2 && value2,
        maxW >= weight1 + weight2 && value1 + value2
    );
}

console.log(knapsackLight(10, 5, 6, 4, 10));
console.log(knapsackLight(10, 5, 6, 4, 9));
console.log(knapsackLight(10, 2, 11, 3, 1));
console.log(knapsackLight(10, 4, 11, 5, 6));
console.log(knapsackLight(15, 2, 20, 3, 2));
