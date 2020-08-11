function isCaseInsensitivePalindrome(inputString) {
    return inputString.toLowerCase() === inputString.split('').reverse().join('').toLowerCase()
}

// Best Solution
function isCaseInsensitivePalindrome(inputString) {
    const r = inputString.split('').reverse().join('');
    return inputString.toLowerCase() == r.toLowerCase();
}

console.log(isCaseInsensitivePalindrome('AaBaa'));
