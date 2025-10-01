 
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
    if(this.PLAYER==""){
      if (this.TURN >= 0 && this.TURN <=0.5) {
        this.PLAYER = "x";
      } else {
        this.PLAYER = "o";
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

   
    if(this.checkWin(row , col)){
      this.WINNER = this.PLAYER;
    }
   if(this.checkDraw()){
    this.DRAW = true;
   }
    if (this.PLAYER == "x") {
      this.PLAYER = "o";
    } else {
      this.PLAYER = "x";
    } 
 
  }
  displayBoard(): void {
    console.log(this.board.map(row => row.join(" | ")).join("\n"));

  }
  checkDraw(): boolean {
       
    // Check if all cells are filled
    const isBoardFull = this.board.every(cell => cell.every(c => c === 'x' || c === 'o') );
    
    // If the board is full and there's no winner, it's a draw
    return isBoardFull && this.WINNER != "";
  
  }
  checkWin(row :number , col :number):boolean {
    let flag = false;
    for (let i = 0; i <this.board.length; i++) {
         if(this.board[row][i]== this.PLAYER){
          flag = true;
         
          continue;
         }else{
          flag = false;
          break;
         }
      
       }
     if (!flag) {
      for (let i = 0; i <this.board.length ; i++) {
   
        if(this.board[i][col]== this.PLAYER){
          flag = true;
        continue;
       }else{
        flag = false;
        break;
       }
    
      }
     }
   
   
      if(row ===col ||( row==2&& col==0 ) || (row==0 && col==2) && !flag){
         for (let i = 0; i <this.board.length  ; i++) {
          if(this.board[i][i]== this.PLAYER){
            flag = true;
          continue;
         }else{
          flag = false;
          break;
         }
      
        }
        if(flag)return true;
        for (let i = 0; i <this.board.length ; i++) {
          if(this.board[i][(this.board.length-1)-i]== this.PLAYER){
            flag = true;
          continue;
        }else{
          flag = false;
          break;
         }
      
        }
      }
     
    return flag ;
  }
}
