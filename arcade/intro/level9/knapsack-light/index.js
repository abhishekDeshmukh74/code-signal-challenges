function knapsackLight(value1, weight1, value2, weight2, maxW) {

    if (maxW >= weight1 + weight2) {
        return value1 + value2
    }

    if (value1 > value2 && maxW >= weight1) {
        return value1
    }

    if (value2 > value1 && maxW >= weight2) {
        return value2
    }

    if (maxW >= weight1) {
        return value1
    }

    if (maxW >= weight2) {
        return value2
    }

    if (value2 === value1) {
        return Math.max(value1, value2)
    }

    return 0

}

// Best Solution
function knapsackLight(value1, weight1, value2, weight2, maxW) {
    return Math.max(
        maxW >= weight1 && value1,
        maxW >= weight2 && value2,
        maxW >= weight1 + weight2 && value1 + value2
    );
}

console.log(knapsackLight(10, 5, 6, 4, 8));
console.log(knapsackLight(10, 5, 6, 4, 9));
console.log(knapsackLight(5, 3, 7, 4, 6));
console.log(knapsackLight(10, 4, 11, 5, 6));
console.log(knapsackLight(15, 2, 20, 3, 2));
