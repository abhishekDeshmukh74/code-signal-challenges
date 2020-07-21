function reverseInParentheses(inputString) {
    if (!inputString.includes('(')) return inputString
    const regex = /\(([^()]*)\)/i
    const subStr = regex.exec(inputString)[1]
    return reverseInParentheses(inputString.replace(regex, subStr.split('').reverse().join('')))
}

// Best Solutions
function reverseInParentheses(inputString) {
    while (inputString.includes('(')) {
        inputString = inputString.replace(/\(([^()]*)\)/, (_, str) => [...str].reverse().join(''));
    }
    return inputString;
}

function reverseInParentheses(s) {
    while (true) {
        let c = s.indexOf(")");

        if (c === -1) {
            break;
        }

        let o = s.substring(0, c).lastIndexOf("(");

        let start = s.substring(0, o);
        let middle = s.substring(o + 1, c).split("").reverse().join("");
        let end = s.substring(c + 1, s.length);

        s = start + middle + end;
    }

    return s;
}


console.log(reverseInParentheses('abc'))
console.log(reverseInParentheses('(bar)'))
console.log(reverseInParentheses('bar(baz)'))
console.log(reverseInParentheses('lol(bar(baz))lol'))
console.log(reverseInParentheses('bar(baz)oo'))
console.log(reverseInParentheses('foo(bar(baz))blim'))
console.log(reverseInParentheses('foo(bar)baz(blim)'))
