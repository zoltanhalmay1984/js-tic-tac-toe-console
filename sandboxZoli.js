//"use strict"
const ps = require('prompt-sync');

const prompt = ps({ sigint: true });

/*
const playerName = (prompt('Type your name, then press enter: ')).toUpperCase();
console.log(playerName)
*/
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

// function introScreen(){
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
        [" ", " ", " "],
        [" ", " ", " "],
        [" ", " ", " "]
    ];
}

//console.log(getEmptyBoard());

function getCoordinates() {
    const playerInput = (prompt('Type your coordinates, then press enter: '));
    switch (playerInput.toUpperCase()) {
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
            return getCoordinates();
    }
}

function displayTurn(turn) {
    if (turn % 2) return "TURN OF P1"
    else return "TURN OF P2 "
}

function displayBoard(board){
    console.log("\n")
    console.log("        1   2   3")
    console.log("      -------------")
    console.log("   A  | " + board[0][0] + " | " + board[0][1] + " | " + board[0][2] + " |")
    console.log("      -------------")
    console.log("   B  | " + board[1][0] + " | " + board[1][1] + " | " + board[1][2] + " |")
    console.log("      -------------")
    console.log("   C  | " + board[2][0] + " | " + board[2][1] + " | " + board[2][2] + " |")
    console.log("      -------------")
    console.log("\n")
}

function implementMove(board, playerCoords) {
    if ((board[playerCoords[0]][(playerCoords[1])] === " ") &&
        (turn % 2)) {
        board[playerCoords[0]][(playerCoords[1])] = "X";
    }
    else if ((board[playerCoords[0]][(playerCoords[1])] === " ") &&
        (!(turn % 2))) {
        board[playerCoords[0]][(playerCoords[1])] = "O";
    }
}

function getWinningPlayer(board) {
    if (
        (board[0][0] === "X" && board[0][1] === "X" && board[0][2] === "X") ||
        (board[1][0] === "X" && board[1][1] === "X" && board[1][2] === "X") ||
        (board[2][0] === "X" && board[2][1] === "X" && board[2][2] === "X") ||
        (board[0][0] === "X" && board[1][0] === "X" && board[2][0] === "X") ||
        (board[0][1] === "X" && board[1][1] === "X" && board[2][1] === "X") ||
        (board[0][2] === "X" && board[1][2] === "X" && board[2][2] === "X") ||
        (board[0][0] === "X" && board[1][1] === "X" && board[2][2] === "X") ||
        (board[2][0] === "X" && board[1][1] === "X" && board[0][2] === "X")) {
        console.log("you won, player 1!!");
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
        console.log("you won, player 2!!");
    }
}

function isBoardFull (board) {
    if (!(board.flat().includes(" "))){
        return true;
    }
    else {
        return false;
    }
}


console.log("\n\n")
introScreen()
let turn = 1
let board = getEmptyBoard()
do {
    console.log("\n\n")
    console.log(displayTurn(turn))
    let playerCoords = getCoordinates()
    implementMove(board, playerCoords)
    displayBoard(board)
    // console.log(board[0])
    // console.log(board[1])
    // console.log(board[2])
    getWinningPlayer(board)
    console.log("the board is full: " + isBoardFull(board))
    turn++
} while (true)