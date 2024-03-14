const gameBoard = (function() {
    const board = [['#', '#', '#'],
            ['#', '#', '#'],
            ['#', '#', '#']]
    let cellsUsed = 0;
    return {
        board,
        cellsUsed,
    };
})();

const playerOne = {
    score: 0,
}

const playerTwo = {
    score: 0,
}

function game() {
    console.log('Welcome to the game of tic tac toe');
    let chooseMode = prompt(`Choose your game mode. Type "1p" to play against computer and "2p" to play 2 player game on one device`).toLowerCase();
    let choosePlayer = prompt(`Choose "X" or "O"`).toLowerCase();
    console.log(chooseMode, choosePlayer);
    let board = gameBoard.board;
    console.log(board);
    let cellsUsed = gameBoard.cellsUsed;
    const onePlayerGame = function() {
        console.log("Game started!");
        while (cellsUsed != 9) {
        let cell = prompt("Enter row, column of your cell. Format: row column").split(" ");
        let row = Number(cell[0]);
        let column = Number(cell[1]);
        console.log(row, column);
        
        if (board[row-1][column-1] !== "X" && board[row-1][column-1] !== "O") {
            choosePlayer === "x" ? board[row-1][column-1] = "X" :
            choosePlayer === "o" ? board[row-1][column-1] = "O" :
            console.log("Not valid value");
            cellsUsed += 1;
            console.log(board);
            console.log(cellsUsed);
        }
        else {
            console.log("Cell is taken already");
            console.log(board);
        }
        
        }
    }

    const computerChoice = function() {
        
    }

    const twoPlayerGame = function() {

    }

    chooseMode === "1p" ? onePlayerGame() :
    chooseMode === "2p" ? twoPlayerGame() :
    console.log("Incorrect input");
}

game();

