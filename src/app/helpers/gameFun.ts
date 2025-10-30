


  const start = async (row) => {
    
 
    const res = await startGame({
      currentPlayer: p,
      game: [...game],
      gameId: "",
      player2: op,
      p: user,
      winner: "",
      result: "",
    });
    if (res == null) {
      alert(" game failed send another invite ");
    }
  };
//   const start = async (row: number, col: number) => {
//     let p = player;
//     game[row][col] = player;
//     setGame([...game]);
//     if (p == "O") {
//       p = "X";
//       setPlayer("X");
//     } else {
//       p = "O";
//       setPlayer("O");
//     }
//     const res = await startGame({
//       currentPlayer: p,
//       game: [...game],
//       gameId: "",
//       player2: op,
//       p: user,
//       winner: "",
//       result: "",
//     });
//     if (res == null) {
//       alert(" game failed send another invite ");
//     }
//   };