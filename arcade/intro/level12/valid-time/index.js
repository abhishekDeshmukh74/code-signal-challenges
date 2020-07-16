function validTime(time) {
    const [hour, minutes] = time.split(':')
    if (parseInt(minutes) > 59 || parseInt(hour) > 23) {
        return false
    }
    return true
}

// Best Solution
validTime = t => /^([0-1]\d|2[0-3]):[0-5]\d$/.test(t);

console.log(validTime('13:58'));
