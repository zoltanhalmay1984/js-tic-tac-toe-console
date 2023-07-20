const ps = require('prompt-sync');

const prompt = ps({ sigint: true });

function introScreen(){
    console.log("              ,---------------------------,")
    console.log("              |  /---------------------\\  |")
    console.log("              | | ..................... | |")
    console.log("              | | X---TIC--TAC--TOE---O | |")
    console.log("              | | ..................... | |")
    console.log("              | |   a terminal game by  | |")
    console.log("              | |    Zoli and Krisz     | |")
    console.log("              |  \\______________________/ |")
    console.log("              |___________________________|")
    console.log("            ,---\\_____     []     _______/------,")
    console.log("          /         /______________\\           /|")
    console.log("        /___________________________________ /  | ___")
    console.log("        |                                   |   |    )")
    console.log("        |  _ _ _                 [-------]  |   |   (")
    console.log("        |  o o o                 [-------]  |  /    _)_")
    console.log("        |__________________________________ |/     ////")
    console.log("    /-------------------------------------/|      /__/")
    console.log("  /-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/ /")
    console.log("/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/ /")
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
}

function displayBoard2(board, turn){
    console.log("              ,---------------------------,")
    console.log("              |  /---------------------\\  |")
    console.log("              | |       1   2   3       | |")
    console.log("              | |  A  | " + board[0][0] + " | " + board[0][1] + " | " + board[0][2] + " |     | |")
    console.log("              | |  B  | " + board[1][0] + " | " + board[1][1] + " | " + board[1][2] + " |     | |")
    console.log("              | |  C  | " + board[2][0] + " | " + board[2][1] + " | " + board[2][2] + " |     | |")
    console.log("              | |                       | |")
    console.log("              |  \\______________________/ |")
    console.log("              |___________________________|")
    console.log("            ,---\\_____     []     _______/------,")
    console.log("          /         /______________\\           /|")
    console.log("        /___________________________________ /  | ___")
    console.log("        |                                   |   |    )")
    console.log("        |  _ _ _                 [-------]  |   |   (")
    console.log("        |  o o o                 [-------]  |  /    _)_")
    console.log("        |__________________________________ |/     ////")
    console.log("    /-------------------------------------/|      /__/")
    console.log("  /-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/ /")
    console.log("/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/ /")
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
    }

function getEmptyBoard() {
    return [
      [".", ".", "."],
      [".", ".", "."],
      [".", ".", "."]
    ];
  }
  
  function getCoordinates() {
    const validInputs = ["A1", "A2", "A3", "B1", "B2", "B3", "C1", "C2", "C3", "QUIT"];
    while (true) {('Type your coordinates, then press enter: ');
      const upperCaseInput = playerInput.toUpperCase();
      if (validInputs.includes(upperCaseInput)) {
        if (upperCaseInput === "QUIT") {
          console.log("Quitting the game...");
          process.exit(); // Terminate the program
        }
  
        switch (upperCaseInput) {
          case "A1":
            return [0, 0];
          case "A2":
            return [0, 1];
          case "A3":
            return [0, 2];
          case "B1":
            return [1, 0];
          case "B2":
            return [1, 1];
          case "B3":
            return [1, 2];
          case "C1":
            return [2, 0];
          case "C2":
            return [2, 1];
          case "C3":
            return [2, 2];
        }
      }
      console.log("Invalid coordinates. Please try again.");
    }
  }
  
  function displayTurn(turn) {
    if (turn % 2) return "Turn of Player 1";
    else return "Turn of Player 2";
  }
  
  function implementMove(board, playerCoords, turn) {
    const playerSymbol = turn % 2 === 1 ? "X" : "O";
    if (board[playerCoords[0]][playerCoords[1]] === ".") {
      board[playerCoords[0]][playerCoords[1]] = playerSymbol;
    } else {
      console.log("Invalid move. Please try again.");
    }
  }
  
  function getWinningPlayer(board) {
    const winningCombinations = [
      [[0, 0], [0, 1], [0, 2]], // Rows
      [[1, 0], [1, 1], [1, 2]],
      [[2, 0], [2, 1], [2, 2]],
      [[0, 0], [1, 0], [2, 0]], // Columns
      [[0, 1], [1, 1], [2, 1]],
      [[0, 2], [1, 2], [2, 2]],
      [[0, 0], [1, 1], [2, 2]], // Diagonals
      [[0, 2], [1, 1], [2, 0]]
    ];
  
    for (const combination of winningCombinations) {
      const [a, b, c] = combination;
      if (
        board[a[0]][a[1]] !== "." &&
        board[a[0]][a[1]] === board[b[0]][b[1]] &&
        board[a[0]][a[1]] === board[c[0]][c[1]]
      ) {
        return board[a[0]][a[1]];
      }
    }
  
    return null; // No winner
  }
  
  function generateRandomCoordinates(board) {
    const emptyCoordinates = [];
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        if (board[row][col] === ".") {
          emptyCoordinates.push([row, col]);
        }
      }
    }
    const randomIndex = Math.floor(Math.random() * emptyCoordinates.length);
    return emptyCoordinates[randomIndex];
  }
  
  function getUnbeatableMove(board) {
    const availableMoves = getAvailableMoves(board);
    let bestScore = -Infinity;
    let bestMove;
  
    for (const move of availableMoves) {
      const [row, col] = move;
      board[row][col] = "O";
      const score = minimax(board, 0, false);
      board[row][col] = ".";
  
      if (score > bestScore) {
        bestScore = score;
        bestMove = move;
      }
    }
  
    return bestMove;
  }
  
  function getAvailableMoves(board) {
    const moves = [];
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        if (board[row][col] === ".") {
          moves.push([row, col]);
        }
      }
    }
    return moves;
  }
  
  function minimax(board, depth, isMaximizingPlayer) {
    const winner = getWinningPlayer(board);
  
    if (winner === "X") {
      return -1;
    } else if (winner === "O") {
      return 1;
    } else if (getAvailableMoves(board).length === 0) {
      return 0;
    }
  
    if (isMaximizingPlayer) {
      let bestScore = -Infinity;
      const availableMoves = getAvailableMoves(board);
  
      for (const move of availableMoves) {
        const [row, col] = move;
        board[row][col] = "O";
        const score = minimax(board, depth + 1, false);
        board[row][col] = ".";
        bestScore = Math.max(score, bestScore);
      }
  
      return bestScore;
    } else {
      let bestScore = Infinity;
      const availableMoves = getAvailableMoves(board);
  
      for (const move of availableMoves) {
        const [row, col] = move;
        board[row][col] = "X";
        const score = minimax(board, depth + 1, true);
        board[row][col] = ".";
        bestScore = Math.min(score, bestScore);
      }
  
      return bestScore;
    }
  }
  
  console.log("\n\n")
  introScreen()
  let turn = 1;
  let board = getEmptyBoard();
  let winner = null;
  let againstAI = false;
  let aiLevel = 1;
  
  console.log("Welcome to Tic-Tac-Toe!");
  
  while (true) {
    const gameMode = prompt("Choose a game mode:\n1. Player vs Player\n2. Player vs AI (Easy)\n3. Player vs AI (Unbeatable)\nEnter 1, 2, or 3: ");
    if (gameMode === "1") {
      break;
    } else if (gameMode === "2") {
      againstAI = true;
      aiLevel = 1;
      break;
    } else if (gameMode === "3") {
      againstAI = true;
      aiLevel = 2;
      break;
    } else {
      console.log("Invalid game mode. Please try again.");
    }
  }
  
  do {
    console.log(displayTurn(turn));
    displayBoard2(board);
  
    if (againstAI && turn % 2 === 0) {
      console.log("AI's turn");
      if (aiLevel === 1) {
        const aiCoords = generateRandomCoordinates(board);
        implementMove(board, aiCoords, turn);
      } else if (aiLevel === 2) {
        const aiCoords = getUnbeatableMove(board);
        implementMove(board, aiCoords, turn);
      }
    } else {
      const playerCoords = getCoordinates();
      implementMove(board, playerCoords, turn);
    }
  
    winner = getWinningPlayer(board);
    turn++;
  
    if (winner) {
      console.log(displayTurn(turn - 1));
      displayBoard2(board);
      if (againstAI && aiLevel === 1 && winner === "O") {
        console.log("Congratulations! You win!");
      } else if (againstAI && aiLevel === 2 && winner === "O") {
        console.log("The unbeatable AI wins!");
      } else {
        console.log(`Congratulations! Player ${winner} wins!`);
      }
      break;
    }
  
    if (turn > 9) {
      console.log(displayTurn(turn - 1));
      displayBoard2(board);
      console.log("It's a tie!");
      break;
    }
  } while (true);