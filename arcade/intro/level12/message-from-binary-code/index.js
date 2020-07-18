function messageFromBinaryCode(code) {
    let final = ''
    for (i = 0; i < code.length; i += 8) {
        const str = code.slice(i, i + 8)
        final += String.fromCharCode(parseInt(str, 2))
    }
    return final
}

// Best Solution
function messageFromBinaryCode(code) {
    return code.match(/.{8}/g).reduce((a, b) => a + String.fromCharCode(parseInt(b, 2)), "")
}

console.log(messageFromBinaryCode('010010000110010101101100011011000110111100100001'));
