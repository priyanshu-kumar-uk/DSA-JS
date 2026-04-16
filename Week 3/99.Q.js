let matrix = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1]
];

let rowIdx = [];
let colIdx = [];

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    if (matrix[i][j] === 0) {
      rowIdx.push(i);
      colIdx.push(j);
    }
  }
}

for (let k = 0; k < rowIdx.length; k++) {
  let r = rowIdx[k];
  let c = colIdx[k];

  for (let j = 0; j < matrix[r].length; j++) {
    matrix[r][j] = 0;
  }

  for (let i = 0; i < matrix.length; i++) {
    matrix[i][c] = 0;
  }
}

console.log(matrix);