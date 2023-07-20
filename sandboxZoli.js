//"use strict"
const ps = require('prompt-sync');

const prompt = ps({ sigint: true });

function introScreen() {
    console.clear()
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

function gameMenu() {
    gameMenuScreen()
    let gameMode = (prompt('Type A or B, then press ENTER: '));
    switch (gameMode.toUpperCase()) {
        case "A":
            vsAi = false
            break;
        case "B":
            vsAi = true
            break;
        default:
            return gameMenu();
    }


    function gameMenuScreen() {
        console.clear()
        console.log("              ,---------------------------,")
        console.log("              |  /---------------------\\  |")
        console.log("              | | ..................... | |")
        console.log("              | |      GAME   MENU      | |")
        console.log("              | |  Human P2 - press A   | |")
        console.log("              | |  Comp. P2 - press B   | |")
        console.log("              | | ..................... | |")
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
}

function displayBoard(board, turn) {
    console.clear()
    console.log("              ,---------------------------,")
    console.log("              |  /---------------------\\  |")
    console.log("              | |       1   2   3       | |")
    console.log("              | |  A  | " + board[0][0] + " | " + board[0][1] + " | " + board[0][2] + " |     | |")
    console.log("              | |  B  | " + board[1][0] + " | " + board[1][1] + " | " + board[1][2] + " |     | |")
    console.log("              | |  C  | " + board[2][0] + " | " + board[2][1] + " | " + board[2][2] + " |     | |")
    console.log("              | |" + displayTurn(turn) + "| |")
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
        [" ", " ", " "],
        [" ", " ", " "],
        [" ", " ", " "]
    ];
}


function goodByeScreen() {
    console.clear()
    console.log("              ,---------------------------,")
    console.log("              |  /---------------------\\  |")
    console.log("              | |       G  A  M  E      | |")
    console.log("              | |       O  V  E  R      | |")
    console.log("              | |                       | |")
    console.log("              | |       G  O  O  D      | |")
    console.log("              | |       B  Y  E  !      | |")
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

function getPlayerCoordinates() {
    if (!(vsAi) || ((vsAi) && (turn % 2))) {
        const playerInput = (prompt('Type your coordinates, then press ENTER: '));
        switch (playerInput.toUpperCase()) {
            case "QUIT":
                goodByeScreen()
                process.exit()
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
            default:
                return getPlayerCoordinates();
        }
    }
}
function getAiCoordinates() {
    if ((vsAi) && (!(turn % 2))) {
        let emptyCells = []
        let flattenedBoard = board.flat()
        for (let i = 0; i < flattenedBoard; i++) {
            if (flattenedBoard[i] === " ") {
                emptyCells.push(i+1)
            }
        }
        const aiRandomChoice = Math.floor(Math.random() * emptyCells.length);
        switch (aiRandomChoice) {
            case 1:
                return [0, 0];
            case 2:
                return [0, 1];
            case 3:
                return [0, 2];
            case 4:
                return [1, 0];
            case 5:
                return [1, 1];
            case 6:
                return [1, 2];
            case 7:
                return [2, 0];
            case 8:
                return [2, 1];
            case 9:
                return [2, 2];
        }
    }
}




function displayTurn(turn) {
    if (turn % 2) return "MAKE YOUR MOVE PLAYER 1"
    else return "MAKE YOUR MOVE PLAYER 2"
}


function implementMove(board, playerCoords, computerCoords) {
    if ((!vsAi) && (board[playerCoords[0]][(playerCoords[1])] === " ") && (turn % 2)) {
        board[playerCoords[0]][(playerCoords[1])] = "X";
    }
    if ((vsAi) && (board[computerCoords[0]][(computerCoords[1])] === " ") && (!(turn % 2))) {
        board[computerCoords[0]][(computerCoords[1])] = "O";
    }
    if ((!vsAi) && (board[playerCoords[0]][(playerCoords[1])] === " ") && (!(turn % 2))) {
        board[playerCoords[0]][(playerCoords[1])] = "O";
    }
}

function getWinningPlayer(board, turn) {
    if (
        (board[0][0] === "X" && board[0][1] === "X" && board[0][2] === "X") ||
        (board[1][0] === "X" && board[1][1] === "X" && board[1][2] === "X") ||
        (board[2][0] === "X" && board[2][1] === "X" && board[2][2] === "X") ||
        (board[0][0] === "X" && board[1][0] === "X" && board[2][0] === "X") ||
        (board[0][1] === "X" && board[1][1] === "X" && board[2][1] === "X") ||
        (board[0][2] === "X" && board[1][2] === "X" && board[2][2] === "X") ||
        (board[0][0] === "X" && board[1][1] === "X" && board[2][2] === "X") ||
        (board[2][0] === "X" && board[1][1] === "X" && board[0][2] === "X")) {
        victoryScreenPlayerOne(board, turn);
        process.exit()
    }
    else if (
        (board[0][0] === "O" && board[0][1] === "O" && board[0][2] === "O") ||
        (board[1][0] === "O" && board[1][1] === "O" && board[1][2] === "O") ||
        (board[2][0] === "O" && board[2][1] === "O" && board[2][2] === "O") ||
        (board[0][0] === "O" && board[1][0] === "O" && board[2][0] === "O") ||
        (board[0][1] === "O" && board[1][1] === "O" && board[2][1] === "O") ||
        (board[0][2] === "O" && board[1][2] === "O" && board[2][2] === "O") ||
        (board[0][0] === "O" && board[1][1] === "O" && board[2][2] === "O") ||
        (board[2][0] === "O" && board[1][1] === "O" && board[0][2] === "O")) {
        victoryScreenPlayerTwo(board, turn);
        process.exit()
    }
}

function isBoardFull(board, turn) {
    if (!(board.flat().includes(" "))) {
        tieScreen(board, turn)
        process.exit()
    }
}

function victoryScreenPlayerTwo(board, turn) {
    console.clear()
    console.log("              ,---------------------------,")
    console.log("              |  /---------------------\\  |")
    console.log("              | |       1   2   3       | |")
    console.log("              | |  A  | " + board[0][0] + " | " + board[0][1] + " | " + board[0][2] + " |     | |")
    console.log("              | |  B  | " + board[1][0] + " | " + board[1][1] + " | " + board[1][2] + " |     | |")
    console.log("              | |  C  | " + board[2][0] + " | " + board[2][1] + " | " + board[2][2] + " |     | |")
    console.log("              | | PLAYER 2 WON THE GAME | |")
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

function victoryScreenPlayerOne(board, turn) {
    console.clear()
    console.log("              ,---------------------------,")
    console.log("              |  /---------------------\\  |")
    console.log("              | |       1   2   3       | |")
    console.log("              | |  A  | " + board[0][0] + " | " + board[0][1] + " | " + board[0][2] + " |     | |")
    console.log("              | |  B  | " + board[1][0] + " | " + board[1][1] + " | " + board[1][2] + " |     | |")
    console.log("              | |  C  | " + board[2][0] + " | " + board[2][1] + " | " + board[2][2] + " |     | |")
    console.log("              | | PLAYER 1 WON THE GAME | |")
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


function tieScreen(board, turn) {
    console.clear()
    console.log("              ,---------------------------,")
    console.log("              |  /---------------------\\  |")
    console.log("              | |       1   2   3       | |")
    console.log("              | |  A  | " + board[0][0] + " | " + board[0][1] + " | " + board[0][2] + " |     | |")
    console.log("              | |  B  | " + board[1][0] + " | " + board[1][1] + " | " + board[1][2] + " |     | |")
    console.log("              | |  C  | " + board[2][0] + " | " + board[2][1] + " | " + board[2][2] + " |     | |")
    console.log("              | | I T ' S   A   T I E ! | |")
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

introScreen()
let vsAi = false
let isGameOver = false
let turn = 0
let board = getEmptyBoard()
prompt('Press ENTER to continue.')
gameMenu()
do {
    displayBoard(board, turn)
    let playerCoords = getPlayerCoordinates()
    let computerCoords = getAiCoordinates()
    implementMove(board, playerCoords, computerCoords)
    getWinningPlayer(board)
    isBoardFull(board, turn)
    turn++
} while (true)





// function introScreenOld(){
    // console.log("XOXOXOXOXOXOXOXOXOXOXOXOXOXOXOXOXOXOXOXOXOXOXOXOXOXOXOXOXOXOXOXOXOXOXOXOXOXOXOXOXOXOXOXOXOXOX")
// console.log("OXOXOXOXOXO                                                                       XOXOXOXOXOX")
// console.log("XOXOXOXOXOX     XOXOX   O   XOXOX     OXOXO XOXOX OXOXO     XOXOX OXOXO XOXOX     OXOXOXOXOXO")
// console.log("OXOXOXOXOXO       O     X   O           X   O   O X           O   X   X O         XOXOXOXOXOX")
// console.log("XOXOXOXOXOX       X     O   X           O   XOXOX O           X   O   O XOX       OXOXOXOXOXO")
// console.log("OXOXOXOXOXO       O     X   O           X   O   O X           O   X   X O         XOXOXOXOXOX")
// console.log("XOXOXOXOXOX       X     O   XOXOX       O   X   X OXOXO       X   OXOXO XOXOX     OXOXOXOXOXO")
// console.log("OXOXOXOXOXO                                                                       XOXOXOXOXOX")
// console.log("XOXOXOXOXOX                  A terminal game by ZOLI and KRISZ                    OXOXOXOXOXO")
// console.log("OXOXOXOXOXO                                                                       XOXOXOXOXOX")
// console.log("XOXOXOXOXOXOXOXOXOXOXOXOXOXOXOXOXOXOXOXOXOXOXOXOXOXOXOXOXOXOXOXOXOXOXOXOXOXOXOXOXOXOXOXXOXOXO")
// }

// function displayBoardOld(board) {
//     console.log("\n")
//     console.log("        1   2   3")
//     console.log("      -------------")
//     console.log("   A  | " + board[0][0] + " | " + board[0][1] + " | " + board[0][2] + " |")
//     console.log("      -------------")
//     console.log("   B  | " + board[1][0] + " | " + board[1][1] + " | " + board[1][2] + " |")
//     console.log("      -------------")
//     console.log("   C  | " + board[2][0] + " | " + board[2][1] + " | " + board[2][2] + " |")
//     console.log("      -------------")
//     console.log("\n")
// }