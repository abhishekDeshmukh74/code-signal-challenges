function drawRectangle(canvas, rectangle) {
  const paintedCanvas = [];

  for (let i = 0; i < canvas.length; i++) {
    paintedCanvas[i] = [];
    for (let j = 0; j < canvas[i].length; j++) {
      if (
        (i === rectangle[1] && j === rectangle[0]) ||
        (i === rectangle[1] && j === rectangle[2]) ||
        (i === rectangle[3] && j === rectangle[0]) ||
        (i === rectangle[3] && j === rectangle[2])
      ) {
        paintedCanvas[i][j] = '*';
        continue;
      }

      if (
        (i === rectangle[1] && j < rectangle[2] && j > rectangle[0]) ||
        (i === rectangle[3] && j < rectangle[2] && j > rectangle[0])
      ) {
        paintedCanvas[i][j] = '-';
        continue;
      }

      if (
        (i > rectangle[1] && i < rectangle[3] && j === rectangle[0]) ||
        (i > rectangle[1] && i < rectangle[3] && j === rectangle[2])
      ) {
        paintedCanvas[i][j] = '|';
        continue;
      }
      paintedCanvas[i][j] = canvas[i][j];
    }
  }
  return paintedCanvas;
}

// Best solution
const drawRectangle = (canvas, [x1, y1, x2, y2]) =>
  canvas.map((row, i) =>
    row.map((col, j) =>
      j > x1 && j < x2 && (i === y1 || i === y2)
        ? `-`
        : i > y1 && i < y2 && (j === x1 || j === x2)
        ? `|`
        : (j === x1 || j === x2) && (i === y1 || i === y2)
        ? `*`
        : col
    )
  );

console.table(
  drawRectangle(
    [
      ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'],
      ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'],
      ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'],
      ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'],
      ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'],
    ],
    [1, 1, 4, 3]
  )
);

console.table(
  drawRectangle(
    [
      ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'],
      ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'],
      ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'],
      ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'],
    ],
    [0, 2, 7, 3]
  )
);
