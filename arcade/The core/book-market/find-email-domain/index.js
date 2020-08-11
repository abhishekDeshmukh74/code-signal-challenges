function findEmailDomain(address) {
    const splits = address.split('@')
    return splits[splits.length - 1]
}

// Best Solution
function findEmailDomain(address) {
    return address.split('@').pop()
}

console.log(findEmailDomain('prettyandsimple@example.com'));
console.log(findEmailDomain('\"very.unusual.@.unusual.com\"@usual.com'));
