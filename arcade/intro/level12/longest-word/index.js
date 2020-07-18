function longestWord(text) {
    const regex = /[^\W_]+/gi
    const matches = text.match(regex)
    const lengths = matches.map(e => e.length)
    return matches[lengths.indexOf(Math.max(...lengths))]
}

// Best Solution
function longestWord(text) {
    return text.match(/[A-Za-z]+/g).sort((a, b) => { return b.length > a.length })[0];
}

console.log(longestWord('Ready, steady, go!'));
console.log(longestWord('ab-CDE-fg_hi'));
