function stringsRearrangement(inputArray) {
    function checkIfOnlyOneCharDifferent(string1, string2) {
        let diff = 0
        for (let i = 0; i < string1.length; i++) {
            if (string1.charAt(i) !== string2.charAt(i)) {
                diff++
            }
        }
        return diff === 1
    }
    function permutation(array) {
        function p(array, temp) {
            var i, x;
            if (!array.length) {
                result.push(temp);
            }
            for (i = 0; i < array.length; i++) {
                x = array.splice(i, 1)[0];
                p(array, temp.concat(x));
                array.splice(i, 0, x);
            }
        }
        var result = [];
        p(array, []);
        return result;
    }

    const combinations = permutation(inputArray)
    for (let i = 0; i < combinations.length; i++) {
        const tests = []
        for (let j = 0; j < combinations[i].length - 1; j++) {
            if (checkIfOnlyOneCharDifferent(combinations[i][j], combinations[i][j + 1])) {
                tests.push(true)
            } else {
                tests.push(false)
            }
        }
        if (tests.every(e => e)) return true
    }
    return false
}

// Best Solution
function stringsRearrangement(a) {
    for (let i = 0; i < a.length; i++) {
        let remaining = findNext(a[i], a);
        if (remaining.length === 0) return true;
    }
    return false;
}

function findNext(current, a) {
    if (a.length === 0) return a;
    for (let i = 0; i < a.length; i++) {
        if (differsByOneChar(current, a[i])) {
            let remaining = findNext(a[i], a.slice(0, i).concat(a.slice(i + 1)));
            if (remaining.length === 0) return remaining;
        }
    }
    return a;
}

function differsByOneChar(s1, s2) {
    let mismatches = 0;
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) mismatches++;
        if (mismatches > 1) break;
    }
    return mismatches === 1;
}

console.log(stringsRearrangement(["aba", "bbb", "bab"]));
console.log(stringsRearrangement(["abc", "bef", "bcc", "bec", "bbc", "bdc"]));
