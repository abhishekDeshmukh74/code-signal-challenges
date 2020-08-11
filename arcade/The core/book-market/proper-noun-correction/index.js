function properNounCorrection(noun) {
    return `${noun.charAt(0).toUpperCase()}${noun.slice(1).toLowerCase()}`
}

// Best Solution
function properNounCorrection([Upper, ...lower]) {
    return Upper.toUpperCase() + lower.join('').toLowerCase()
}

console.log(properNounCorrection('pARiS'));
