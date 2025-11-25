const board: string[][] = [
	["A", "B", "C"],
	["D", "E", "F"],
	["G", "H", "I"],
];

const moves: string[] = [];

// Start at A (0,0)
let row = 0;
let col = 0;
moves.push(board[row]![col]!);

// Move Right to B
col++;
moves.push(board[row]![col]!);

col++;
moves.push(board[row]![col]!);

// Move Down to F
row++;
moves.push(board[row]![col]!);

// Move left to E
col--;
moves.push(board[row]![col]!);

console.log("Path:", moves.join(" → "));
console.log("Total Moves (Start from 'A'):", moves.length - 1);
