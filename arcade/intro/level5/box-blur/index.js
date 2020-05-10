function boxBlur(image) {

    let output = [];

    for (let i = 0; i + 2 < image.length; i++) {

        output[i] = [];

        for (let j = 0; j + 2 < image[0].length; j++) {

            if (i + 2 < image.length && j + 2 < image[0].length) {

                output[i][j] = Math.floor((
                    image[i][j] + image[i][j + 1] + image[i][j + 2]
                    + image[i + 1][j] + image[i + 1][j + 1] + image[i + 1][j + 2]
                    + image[i + 2][j] + image[i + 2][j + 1] + image[i + 2][j + 2]
                ) / 9
                )
            }
        }
    }

    return output
}

// Best solution
boxBlur = I => {
    //Slice off the border
    var B = I.slice(1, -1).map(e => e.slice(1, -1))

    //Replace every element with the average
    // of its neighbors
    return B.map((row, i) =>
        row.map((elem, j) => {
            var sum = 0
            for (var x = 0; x < 3; ++x)
                for (var y = 0; y < 3; ++y)
                    sum += I[i + x][j + y]
            return sum / 9 | 0
        })
    )
}

console.log(boxBlur([
    [7, 4, 0, 1],
    [5, 6, 2, 2],
    [6, 10, 7, 8],
    [1, 4, 2, 0]
]))
