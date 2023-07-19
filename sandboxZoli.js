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

function implementMove(board, playerCoords) {
    if (turn%2){
        board[playerCoords[0]][(playerCoords[1])] = "X";
    }
    else{
        board[playerCoords[0]][(playerCoords[1])] = "O";
    }
}

let turn = 1
let board = getEmptyBoard()
do {
    let playerCoords = getCoordinates()
    implementMove(board, playerCoords)
    console.log(board)
    console.log(turn)
    turn++
} while (true)