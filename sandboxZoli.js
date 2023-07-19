//"use strict"
const ps = require('prompt-sync');

const prompt = ps({ sigint: true });

/*
const playerName = (prompt('Type your name, then press enter: ')).toUpperCase();
console.log(playerName)
*/

function getEmptyBoard() {
    return [
        [".", ".", "."],
        [".", ".", "."],
        [".", ".", "."]
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
    if (turn % 2) return "turn of player 1"
    else return "turn of player 2 "
}


function implementMove(board, playerCoords) {
    if ((board[playerCoords[0]][(playerCoords[1])] === ".") &&
        (turn % 2)) {
        board[playerCoords[0]][(playerCoords[1])] = "X";
    }
    else if ((board[playerCoords[0]][(playerCoords[1])] === ".") &&
        (!(turn % 2))) {
        board[playerCoords[0]][(playerCoords[1])] = "O";
    }
}

function getWinningPlayer(board) {
    if (((board[0][0] && board[0][1] && board[0][2]) === "X") ||
        ((board[1][0] && board[1][1] && board[1][2]) === "X") ||
        ((board[2][0] && board[2][1] && board[2][2]) === "X") ||
        ((board[0][0] && board[1][0] && board[2][0]) === "X") ||
        ((board[0][1] && board[1][1] && board[2][1]) === "X") ||
        ((board[0][2] && board[1][2] && board[2][2]) === "X") ||
        ((board[0][0] && board[1][1] && board[2][2]) === "X") ||
        ((board[0][2] && board[1][1] && board[2][0]) === "X")) {
        console.log("you won, player 1!!");

    }
    if (((board[0][0] && board[0][1] && board[0][2]) === "O") ||
        ((board[1][0] && board[1][1] && board[1][2]) === "O") ||
        ((board[2][0] && board[2][1] && board[2][2]) === "O") ||
        ((board[0][0] && board[1][0] && board[2][0]) === "O") ||
        ((board[0][1] && board[1][1] && board[2][1]) === "O") ||
        ((board[0][2] && board[1][2] && board[2][2]) === "O") ||
        ((board[0][0] && board[1][1] && board[2][2]) === "O") ||
        ((board[0][2] && board[1][1] && board[2][0]) === "O")) {
        console.log("you won, player 2!!")
    }
}

let turn = 1
let board = getEmptyBoard()
do {
    console.log(displayTurn(turn))
    let playerCoords = getCoordinates()
    implementMove(board, playerCoords)
    console.log(board)
    //console.log(turn)
    getWinningPlayer(board)
    turn++
} while (true)