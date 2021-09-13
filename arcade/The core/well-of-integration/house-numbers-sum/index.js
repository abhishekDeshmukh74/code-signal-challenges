function houseNumbersSum(arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      break;
    }
    newArr.push(arr[i]);
  }
  return newArr.reduce((a, c) => a + c, 0);
}

// Best solution
function houseNumbersSum(arr) {
  return arr.slice(0, arr.indexOf(0)).reduce((a, b) => a + b, 0);
}

console.log(houseNumbersSum([5, 1, 2, 3, 0, 1, 5, 0, 2]));
console.log(houseNumbersSum([4, 2, 1, 6, 0]));
