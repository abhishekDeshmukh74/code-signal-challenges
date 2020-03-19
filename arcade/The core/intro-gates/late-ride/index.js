function lateRide(n) {

    const timeMin = n % 60
    const timeHr = Math.floor(n / 60);

    return `${timeHr}${timeMin}`.split('').reduce((a, b) => parseInt(a) + parseInt(b), 0)
}

// best solution
function lateRide(n) {
    var hours = n / 60 | 0,
        minutes = n % 60;
    return (hours / 10 | 0) + hours % 10 + (minutes / 10 | 0) + minutes % 10;
}

console.log(lateRide(240));
