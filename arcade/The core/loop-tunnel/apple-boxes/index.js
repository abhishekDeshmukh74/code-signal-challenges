function appleBoxes(k) {
  let redCount = 0;
  let yellowCount = 0;

  for (let i = 1; i <= k; i++) {
    i % 2 === 0 ? (redCount += i * i) : (yellowCount += i * i);
  }
  return redCount - yellowCount;
}

// best solution
function appleBoxes(k) {
  return (k * (k + 1)) / (k % 2 ? -2 : 2);
}

console.log(appleBoxes(5));
