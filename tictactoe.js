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

function getHumanCoordinates() {
    const playerInput = (prompt('Type your coordinates, then press enter: '));
    switch (playerInput.toUpperCase()) {
        case "A1":
            return [0, 0];
            break;
        case "A2":
            return [0, 1];
            break;
        case "A3":
            return [0, 2];
            break;
        case "B1":
            return [1, 0];
            break;
        case "B2":
            return [1, 1];
            break;
        case "B3":
            return [1, 2];
            break;
        case "C1":
            return [2, 0];
            break;
        case "C2":
            return [2, 1];
            break;
        case "C3":
            return [2, 2];
            break;
        default:
            return getHumanCoordinates();
    }
}

function movesHistory(moveTaken) {
    return slotsOccupied.add(moveTaken);
}

function visualizeMove(moveTaken) {
    board[moveTaken[0]][(moveTaken[1])] = "X";
}

const slotsOccupied = new Set;
let board = [];
do {
    board = getEmptyBoard();
    moveTaken = getHumanCoordinates();
    movesHistory(moveTaken);

    visualizeMove(moveTaken, board)

    //    console.log(board[0] + "\n" + board[1] + "\n" + board[2]);
    console.log(board)
} while (true)


function main() {
}


