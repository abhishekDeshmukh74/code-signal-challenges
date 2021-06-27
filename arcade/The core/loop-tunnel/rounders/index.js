function rounders(n) {
  const rounded = [];
  let itr = 1;
  let shouldCarry = 0;
  while (itr !== n.toString().length) {
    const last = Math.floor((n / Math.pow(10, itr - 1)) % 10);
    last + shouldCarry < 5 ? (shouldCarry = 0) : (shouldCarry = 1);
    rounded.push(0);
    itr++;
  }
  rounded.unshift(Number(n.toString()[0]) + shouldCarry);
  return Number(rounded.join(''));
}

// best solution
function rounders(value) {
  var r = 0;
  while (value > 10) {
    value = Math.round(value / 10);
    r++;
  }
  return value * Math.pow(10, r);
}

console.log(rounders(15));
console.log(rounders(1234));
console.log(rounders(98765432));
