function buildPalindrome(st) {
    const isPalindrome = str => str === str.split('').reverse().join('')
    let pass = st.length - 1
    let shortPalindrome
    while (pass >= 0) {
        const possibleShortPalindrome = `${st.slice(0, st.length)}${st.split('').slice(0, pass).reverse().join('')}`
        pass--
        if (isPalindrome(possibleShortPalindrome)) {
            shortPalindrome = possibleShortPalindrome
        }
    }
    return shortPalindrome
}

// Best Solution
function buildPalindrome(st) {
    if (isPalindrome(st)) return st;
    for (var i = 0; i < st.length; i++) {
        if (isPalindrome(st.slice(i, st.length))) {
            return st + Array.from(st.slice(0, i)).reverse().join('');
        }
    }
}

function isPalindrome(string) {
    return string == Array.from(string).reverse().join('')
}

console.log(buildPalindrome('abcdc'));
