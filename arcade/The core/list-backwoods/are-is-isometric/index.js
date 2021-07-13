function areIsomorphic(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  return array1.every((row, i) => array2[i] && array1[i].length === array2[i].length);
}

// Best solution
function areIsomorphic(a1, a2) {
  return a1.map((i) => i.length).toString() == a2.map((i) => i.length).toString();
}

console.log(
  areIsomorphic(
    [
      [1, 1, 1],
      [0, 0],
    ],
    [
      [2, 1, 1],
      [2, 1],
    ]
  )
);
