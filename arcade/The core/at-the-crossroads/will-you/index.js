function willYou(young, beautiful, loved) {
    return (young && beautiful && !loved) || ((!young || !beautiful) && loved)
}

// best solution
function willYou(young, beautiful, loved) {
    return (young && beautiful) != loved;
}

console.log(willYou(true, true, true));
console.log(willYou(true, false, true));
console.log(willYou(false, false, false));
