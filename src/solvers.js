/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other
window.findAsolution = function(aBoard, startRow, startCol, validator, n, callback) {
  // Place the first piece down at (0,0); 
  aBoard.attributes[startRow][startCol] = 1;
  var count = 1;

  for (var row = 0; row < n; row++) {
    for (var col = 0; col < n; col++) {
      if (!aBoard.attributes[row][col]) {
        // Place next piece at first valid spot
        aBoard.attributes[row][col] = 1;
        count++;
      }
      //*****add a callback to check for these (below) conflicts or for queen conflicts
      // If piece creates conflict, remove piece
      if (aBoard[validator](row) || aBoard[validator](col)) {
        aBoard.attributes[row][col] = 0;
        count--;
      }
    }
  }
   
  // If valid solution, set board = solution
  if (count === n) {
    return callback();
  } else {
    startCol++;
    if (startCol >= n) {
      startCol = 0;
      startRow++;
    }
    aBoard = new Board(n);
    return findAsolution(aBoard, startRow, startCol, validator, n, callback);
  }
};

window.findNRooksSolution = function(n) {
  // Create a blank board 
  var board = new Board({n: n});  
  
  // Place the first piece down at (0,0);   

  var solution = findAsolution(board, 0, 0, 'hasAnyRooksConflicts', n, function() {
    return _.map(board.rows(), function(row){
      return row.slice();
    });
  });

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
