function addBorder(picture) {
    return [
        '*'.repeat(picture[0].length + 2),
        ...picture.map((row) => `*${row}*`),
        '*'.repeat(picture[0].length + 2)
    ]
}

// best solution
function addBorder(picture) {
    var width = picture[0].length + 2;
    return [
        '*'.repeat(width),
        ...picture.map(line => `*${line}*`),
        '*'.repeat(width)
    ];
}

console.log(addBorder(["aa", "**", "zz"]));
