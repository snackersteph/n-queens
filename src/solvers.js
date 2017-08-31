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



window.findNRooksSolution = function(n) {
  var solution = []; //fixme
  
  // Create a blank board 
  var board = new Board({n: n});  
  
  // Place the first piece down at (0,0);   
  var traverse = function(aBoard, startRow, startCol) {
    // Place the first piece down at (0,0); 
    board.attributes[startRow][startCol] = 1;
    
    var count = 1;

    for (var row = 0; row < n; row++) {
      for (var col = 0; col < n; col++) {
        
        if (!board.attributes[row][col]) {

          // Place next piece at first valid spot
          board.attributes[row][col] = 1;
          count++;
        }

        // If piece creates conflict, remove piece
        if (board.hasRowConflictAt(row) || board.hasColConflictAt(col)) {
          debugger;
          board.attributes[row][col] = 0;
          count--;
        }
      }
    }

    // If valid solution, set board = solution
    if (count === n) {
      solution = board.rows();
    } else {
      startCol++;
      if (startCol >= n) {
        startCol = 0;
        startRow++;
      }
      board = new Board(n);
      traverse(board, startRow, startCol);
    }
  };

  traverse(board, 0, 0);
  
    
    // if (count === n) {
    //   return JSON.stringify(board);
    // } else {
    //   if (startRow === n - 1) {
    //     startRow++;
    //     return traverse(startRow, 0);
    // } else {
    //   //startCol++
    //   //traverse(startRow, startCol)
    //   //unless board.attributes[startRow][startCol] is equal to 1, in which case we skip
    // }

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

this.findNRooksSolution(3);

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
