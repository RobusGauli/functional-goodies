// we need to able to perform matrix operation

// API 
// const mat = new Matrix(2, 3, {random: true});
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
  constructor(rows, cols, options={random: false}) {
    this.rows = rows;
    this.cols = cols;
    // Initialize the two dimensional array
    this.value = Array(this.rows)
      .fill()
      .map(() => Array(this.cols).fill(0))    
  }
  
  random() {
    return this.map(Math.random);
  }
  
  static map(predicate, mat) {
    if (mat === undefined) {
      return Matrix.map.apply(this, [predicate]);
    }
    if (!(mat instanceof Matrix)) {
      throw new Error('mat must be instance of Matrix.')
    }
    
    
  }
  map(predicate) {
    // apply the predicate to the value and return it's instance
    if (typeof predicate !== 'function') {
      throw new Error('Argument must be of type function.')
    }
    this.value = this.value.map(rowVector => rowVector.map(predicate));
    return this;
  }
  
  // add
  
}

function main() {
  const  mat = new Matrix(3, 4);
  console.log(mat);
}

main();
