const boardfn: string[][] = [
  ["A", "B", "C"],
  ["D", "E", "F"],
  ["G", "H", "I"],
];

const rowLength = boardfn.length;
const colLength = boardfn[0]!.length;

const movefn: string[] = [];

// Start at A (0,0)
let rowfn = 0;
let colfn = 0;

movefn.push(boardfn[rowfn]![colfn]!);

// Movement functions
function moveRight() {
  if (colfn < colLength - 1) {
    colfn++;
    movefn.push(boardfn[rowfn]![colfn]!);
  } else {
    console.log("Invalid move");
  }
}

function moveLeft() {
  if (colfn > 0) {
    colfn--;
    movefn.push(boardfn[rowfn]![colfn]!);
  } else {
    console.log("Invalid move");
  }
}

function moveUp() {
  if (rowfn > 0) {
    rowfn--;
    movefn.push(boardfn[rowfn]![colfn]!);
  } else {
    console.log("Invalid move");
  }
}

function moveDown() {
  if (rowfn < rowLength - 1) {
    rowfn++;
    movefn.push(boardfn[rowfn]![colfn]!);
  } else {
    console.log("Invalid move");
  }
}

// Call moves
moveRight();
moveRight();
moveDown();
moveLeft();

console.log("Path:", movefn.join(" → "));
console.log("Total Moves (Start from 'A'):", movefn.length - 1);
