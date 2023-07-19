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
    if (slotsOccupied[0] === undefined) {
        slotsOccupied.push(moveTaken);
    }
    else {
        let isIncluded = false;
        for (let i = 0; i < slotsOccupied.length; i++) {
            if (moveTaken === slotsOccupied[i]) {
                isIncluded = true;
            }
        }
        if (!isIncluded) {
            slotsOccupied.push(moveTaken);
        }

    }
}

function visualizeMove(moveTaken) {
    for (let i = 0; i < slotsOccupied.length; i++) {
        if (i === 0 || !(i % 2)) {
            board[moveTaken[0]][(moveTaken[1])] = "X";
        }
        if (i % 2) {
            board[moveTaken[0]][(moveTaken[1])] = "O";
        }
    }
}

function getWinningPlayer() {
    if (board[0][0] && board[0][1] && board[0][2] === "X") {
        console.log("you won!")
    }
}

let slotsOccupied = [];
let board = getEmptyBoard();
do {
    moveTaken = getHumanCoordinates();
    movesHistory(moveTaken);
    console.log(slotsOccupied)
    visualizeMove(moveTaken, board)
    console.log(board)
    getWinningPlayer()
} while (true)


function main() {
}


