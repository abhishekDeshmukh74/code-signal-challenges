// Recursive - Failing large inputs
function houseRobber(houses) {
    if (!houses || houses.length === 0) return 0
    if (houses.length === 1) return houses[0]

    const oneway = houses[0] + houseRobber(houses.slice(2))
    const otherway = houses[1] + houseRobber(houses.slice(3))

    return Math.max(oneway, otherway);
}

// Iterative
function houseRobber(houses) {
    if (!houses || houses.length === 0) return 0
    if (houses.length === 1) return houses[0]
    if (houses.length === 2) return Math.max(houses[0], houses[1])
    const dp = [houses[0], Math.max(houses[0], houses[1])]
    for (let i = 2; i < houses.length; i++) {
        dp.push(Math.max(houses[i] + dp[i - 2], dp[i - 1]))
    }
    return dp.pop()
}

// Best Solution
houseRobber = a => {
    x = y = 0
    for (k of a)
        y = Math.max(x + k, x = y)
    return y
}

console.log(houseRobber([1, 1, 1]))
console.log(houseRobber([1, 2, 1, 1]))
console.log(houseRobber([226, 174, 214, 16, 218, 48, 153, 131, 128, 17, 157, 142, 88, 43, 37, 157, 43, 221, 191, 68, 206, 23, 225, 82, 54, 118, 111, 46, 80, 49, 245, 63, 25, 194, 72, 80, 143, 55, 209, 18, 55, 122, 65, 66, 177, 101, 63, 201, 172, 130, 103, 225, 142, 46, 86, 185, 62, 138, 212, 192, 125, 77, 223, 188, 99, 228, 90, 25, 193, 211, 84, 239, 119, 234, 85, 83, 123, 120, 131, 203, 219, 10, 82, 35, 120, 180, 249, 106, 37, 169, 225, 54, 103, 55, 166, 124]))
