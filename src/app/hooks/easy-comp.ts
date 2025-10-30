export interface TIKTAKTOEINF {
  board: string[][];
  PLAYER: string;
  TURN: number;
  WINNER: string;
  DRAW: boolean;

  move(row: number, col: number): void;
  displayBoard(): void;
  checkWin(row: number, col: number): boolean;
  checkDraw(): void; // Placeholder as the implementation is empty
  reset(): void;
}

export class TIKTAKTOE implements TIKTAKTOEINF {
  board: string[][];
  PLAYER: string;
  TURN: number;
  WINNER: string;
  DRAW: boolean;

  constructor() {
    this.board = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ];
    this.PLAYER = "";
    this.TURN = Math.random();
    if (this.PLAYER == "") {
      if (this.TURN >= 0 && this.TURN <= 0.5) {
        this.PLAYER = "X";
      } else {
        this.PLAYER = "O";
      }
    }
    this.WINNER = "";
    this.DRAW = false;
  }
  move(row: number, col: number): void {
    if (this.board[row][col] != "" || this.WINNER != "") {
      return;
    }

    this.board[row][col] = this.PLAYER;
    console.log(this.board)
    if (this.checkWin(row, col)) {
      this.WINNER = this.PLAYER;
    }
    if (this.checkDraw()) {
      this.DRAW = true;
    }
    if (this.PLAYER == "X") {
      this.PLAYER = "O";
    } else {
      this.PLAYER = "X";
    }
  }
  displayBoard(): void {
    console.log(this.board.map((row) => row.join(" | ")).join("\n"));
  }
  reset(): void {
    this.board = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ];

    this.TURN = Math.random();
    this.PLAYER = this.TURN <= 0.5 ? "X" : "O";
    this.WINNER = "";
    this.DRAW = false;
  }

  checkDraw(): boolean {
    // Check if all cells are filled
    const isBoardFull = this.board.every((cell) =>
      cell.every((c) => c === "X" || c === "O")
    );

    // If the board is full and there's no winner, it's a draw
    return isBoardFull && this.WINNER == "";
  }
  checkWin(row: number, col: number): boolean {
    const turn = this.board[row][col];
    const n = this.board.length;
  
    // Check row
    let winRow = true;
    for (let i = 0; i < n; i++) {
      if (this.board[row][i] !== turn) {
        winRow = false;
        break;
      }
    }
  
    // Check column
    let winCol = true;
    for (let i = 0; i < n; i++) {
      if (this.board[i][col] !== turn) {
        winCol = false;
        break;
      }
    }
  
    // Check main diagonal
    let winDiag1 = false;
    if (row === col) {
      winDiag1 = true;
      for (let i = 0; i < n; i++) {
        if (this.board[i][i] !== turn) {
          winDiag1 = false;
          break;
        }
      }
    }
  
    // Check anti-diagonal
    let winDiag2 = false;
    if (row + col === n - 1) {
      winDiag2 = true;
      for (let i = 0; i < n; i++) {
        if (this.board[i][n - 1 - i] !== turn) {
          winDiag2 = false;
          break;
        }
      }
    }
  
    return winRow || winCol || winDiag1 || winDiag2;
  }
  
  
 
}
