function magicalWell(a, b, n) {
    let sum = 0;
    while (n!==0) {
        sum+= a*b
        n--
        a++
        b++
    }
    return sum
}

// best solution
function magicalWell(a, b, n) {
    return n != 0 ? a * b + magicalWell(++a, ++b, --n) : 0;
}

console.log(magicalWell(1,2,2));
