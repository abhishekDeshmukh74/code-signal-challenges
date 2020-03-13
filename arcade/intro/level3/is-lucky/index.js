function isLucky(n) {

    const indexToSplit = Math.floor(n.toString().length / 2)

    var first = n.toString().split('').slice(0, indexToSplit);
    var second = n.toString().split('').slice(indexToSplit);

    return first.reduce((a, b) => parseInt(a) + parseInt(b), 0) === second.reduce((a, b) => parseInt(a) + parseInt(b), 0)

}

// best solution

function isLucky(n) {
    var count = 0;
    n = String(n).split('').map(t => { return parseInt(t) });
    n.forEach((el, i) => { (i < n.length / 2) ? count += el : count -= el });
    return count == 0;
}



console.log(isLucky(1230));
console.log(isLucky(239017));
