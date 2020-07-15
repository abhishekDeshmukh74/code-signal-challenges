function variableName(name) {
    return /^[a-zA-Z_$][a-zA-Z_$0-9]*$/.test(name)
}

// Best Solution
function variableName(name) {
    return /^[a-z_]\w*$/i.test(name)
}

console.log(variableName('var_1__Int'));
console.log(variableName('qq-q'));
console.log(variableName('2w2'));
