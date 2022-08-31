function isSudokuValid(board) {
  const isValid = (rows) =>
    rows.every(
      (row) =>
        row.sort((first, second) => first - second).join("") === "123456789"
    );

  const rows = [...board];
  const columns = [[], [], [], [], [], [], [], [], []]; //[[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]....]
  const subGrids = [[], [], [], [], [], [], [], [], []];
  board.forEach((row, rowIndex) => {
    row.forEach((column, columnIndex) => {
      columns[columnIndex][rowIndex] = column;
      if (rowIndex < 3) {
        //sub-grid 0-1-2
        if (columnIndex < 3) {
          subGrids[0].push(column);
        } else if (columnIndex < 6) {
          subGrids[1].push(column);
        } else if (columnIndex < 9) {
          subGrids[2].push(column);
        }
      } else if (rowIndex < 6) {
        //sub-grid 3-4-5
        if (columnIndex < 3) {
          subGrids[3].push(column);
        } else if (columnIndex < 6) {
          subGrids[4].push(column);
        } else if (columnIndex < 9) {
          subGrids[5].push(column);
        }
      } else {
        //sub-grid 6-7-8
        if (columnIndex < 3) {
          subGrids[6].push(column);
        } else if (columnIndex < 6) {
          subGrids[7].push(column);
        } else if (columnIndex < 9) {
          subGrids[8].push(column);
        }
      }
    });
  });
  return isValid(rows) && isValid(columns) && isValid(subGrids);
}
const board = [
  [1, 5, 2, 4, 8, 9, 3, 7, 6],
  [7, 3, 9, 2, 5, 6, 8, 4, 1],
  [4, 6, 8, 3, 7, 1, 2, 9, 5],
  [3, 8, 7, 1, 2, 4, 6, 5, 9],
  [5, 9, 1, 7, 6, 3, 4, 2, 8],
  [2, 4, 6, 8, 9, 5, 7, 1, 3],
  [9, 1, 4, 6, 3, 7, 5, 8, 2],
  [6, 2, 5, 9, 4, 8, 1, 3, 7],
  [8, 7, 3, 5, 1, 2, 9, 6, 4],
];
console.log(isSudokuValid(board)); // true

const board2 = [
  [8, 2, 9, 3, 6, 5, 1, 4, 7],
  [6, 4, 3, 7, 1, 8, 5, 1, 9],
  [7, 5, 1, 4, 9, 2, 6, 3, 8],
  [3, 1, 8, 5, 2, 7, 4, 9, 6],
  [5, 9, 6, 1, 4, 1, 7, 8, 2],
  [4, 7, 2, 9, 8, 6, 3, 1, 5],
  [9, 8, 4, 6, 5, 1, 2, 7, 3],
  [2, 6, 7, 8, 3, 4, 9, 5, 1],
  [9, 3, 5, 2, 7, 9, 8, 6, 4],
];
console.log(isSudokuValid(board2)); // true
