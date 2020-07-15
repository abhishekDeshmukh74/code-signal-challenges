function lineEncoding(s) {
    let output = ''
    let j = 1;
    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) !== s.charAt(i + 1)) {
            if (j === 1) {
                output += s.charAt(i)
            } else {
                output += `${j}${s.charAt(i)}`
            }
            j = 0;
        }
        j++
    }
    return output
}

// Best Answer
lineEncoding = s =>
    s.replace(
        /(.)\1*/g,
        (e, i) => i == e ? i : e.length + i
    )

console.log(lineEncoding('aabbbc'));
