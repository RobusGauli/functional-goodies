// we need to able to perform matrix operation

// API 
// const mat = new Matrix(2, 3);
// const b = new Matrix(3, 4);
// mat.random();
function makeArray(rows, cols) {
  const mat = [];
  for (let row = 0; row < rows; row++) {
    const rowVector = [];
    for (let col = 0; col < cols; col++) {
      rowVector.push(0)
    }
    mat.push(rowVector)
  }
  return mat;
}


class Matrix {
  constructor(rows, cols) {
    this.rows = rows;
    this.cols = cols;
    // initialize the data
    this._data = makeArray(rows, cols);
  }
  
  print() {
    console.table(this._data);
  }
}