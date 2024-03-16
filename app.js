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
    let chooseDifficulty = prompt('Choose game difficulty. Easy(e), medium(m), hard(h), master(m)');
    let choosePlayer = prompt(`Choose "X" or "O"`).toLowerCase();
    let chooseComputer;
    choosePlayer === "x" ? chooseComputer = "o" :
    chooseComputer = "x";

    console.log(chooseMode, chooseDifficulty, choosePlayer, chooseComputer);

    let board = gameBoard.board;
    console.log(board);

    let cellsUsed = gameBoard.cellsUsed;

    const onePlayerGame = function() {
        console.log("Game started!");
        while (cellsUsed != 9) {
            let cell = prompt("Enter row, column of your cell. Format: row column").split(" ");
            let row = Number(cell[0]);
            let column = Number(cell[1]);
            let currentCellTaken = false;
            console.log(row, column);
            
            function updateBoardArray() {
                if (board[row-1][column-1] === "#") {
                    board[row-1][column-1] = choosePlayer.toUpperCase();
                    cellsUsed += 1;
                    console.log(board);
                    console.log(cellsUsed);
                }
                else {
                    console.log("Cell is taken already");
                    currentCellTaken = true;
                    console.log(board);
                }
            }

            if (choosePlayer === "x") {
                updateBoardArray();
                if (currentCellTaken === false) {
                    computerEasyChoice();
                }
            }
            else {
                computerEasyChoice();
                updateBoardArray();
            }
    }
}

function winCondition() {
    
}

    const computerEasyChoice = function() {
        console.log("some easy computer");
        const randomRow = Math.round(Math.random() * 2);
        const randomColumn = Math.round(Math.random() * 2);
        console.log(randomRow + 1, randomColumn + 1);
        console.log(board[randomRow][randomColumn]);
        if (board[randomRow][randomColumn] === "#") {
            board[randomRow][randomColumn] = chooseComputer.toUpperCase();
            console.log(board);
        }
        else {
            computerEasyChoice();
        }
    }

    const twoPlayerGame = function() {

    }

    chooseMode === "1p" ? onePlayerGame() :
    chooseMode === "2p" ? twoPlayerGame() :
    console.log("Incorrect input");
}

game();

