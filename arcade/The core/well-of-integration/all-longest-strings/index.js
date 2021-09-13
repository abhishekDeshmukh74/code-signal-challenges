function allLongestStrings(inputArray) {
  let maxLength = 0;
  let output = [];

  for (const str of inputArray) {
    if (str.length > maxLength) {
      maxLength = str.length;
      output = [str];
    } else if (str.length === maxLength) {
      output.push(str);
    }
  }
  return output;
}

// Best Solution
function allLongestStrings(inputArray) {
  l = Math.max(...inputArray.map((x) => x.length));
  return inputArray.filter((x) => x.length == l);
}

console.log(allLongestStrings(['aba', 'aa', 'ad', 'vcd', 'aba']));
