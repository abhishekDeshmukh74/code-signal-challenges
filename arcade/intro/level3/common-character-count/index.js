function commonCharacterCount(s1, s2) {

    const map1 = new Map();
    const map2 = new Map();

    for (const char of s1.split('')) {
        if (map1.has(char)) {
            map1.set(char, map1.get(char) + 1)
        } else {
            map1.set(char, 1)
        }
    }

    for (const char of s2.split('')) {
        if (map2.has(char)) {
            map2.set(char, map2.get(char) + 1)
        } else {
            map2.set(char, 1)
        }
    }

    let count = 0;
    for (const [key, value] of map1.entries()) {
        if (map2.has(key)) {
            count += Math.min(value, map2.get(key))
        }
    }
    return count

}

// best solution

function commonCharacterCount(s1, s2) {
    for (var i = 0; i < s1.length; i++) {
        s2 = s2.replace(s1[i], "!");
    }
    return s2.replace(/[^!]/g, "").length;
}


console.log(commonCharacterCount('aabcc', 'adcaa'));
