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

function players() {
    const playerOne = {
        victory: false,
    }
    
    const playerTwo = {
        victory: false,
    }
    
    return {playerOne, playerTwo};
}



function game() {
    console.log('Welcome to the game of tic tac toe');
    let chooseMode = prompt(`Choose your game mode. Type "1p" to play against computer and "2p" to play 2 player game on one device`).toLowerCase();
    let chooseDifficulty = prompt('Choose game difficulty. Easy(e), medium(m), hard(h), master(m)');
    let choosePlayer = prompt(`Choose "X" or "O"`).toLowerCase();
    let chooseComputer;

    //while playing against computer player one is player
    //and player two is computer

    let playerOneVictory = players().playerOne.victory;
    let playerTwoVictory = players().playerTwo.victory;

    choosePlayer === "x" ? chooseComputer = "o" :
    chooseComputer = "x";

    console.log(chooseMode, chooseDifficulty, choosePlayer, chooseComputer);

    let board = gameBoard.board;
    console.log(board);

    let cellsUsed = gameBoard.cellsUsed;

    const onePlayerGame = function() {
        console.log("Game started!");
        let currentPlayer = choosePlayer === "x" ? "Player" : "Computer";
        let opponent = choosePlayer === "x" ? "Computer" : "Player";

        function playerMove() {
            let userInput = getUserInput();
            let row = userInput.row;
            let column = userInput.column;
            let currentCellTaken = userInput.currentCellTaken;
    
            if (!currentCellTaken) {
                updateBoardArray(row, column);
                playerOneVictory = winConditionCheck("Player", chooseComputer.toUpperCase(), playerOneVictory);
            }
            
        }
    
        function computerMove() {
            // if (!currentCellTaken) {
            computerEasyChoice();
            playerTwoVictory = winConditionCheck("Computer", choosePlayer.toUpperCase(), playerTwoVictory);  
            // }
        }

    
        function getUserInput() {
            let cell = prompt("Enter row, column of your cell. Format: row column").split(" ");
            let row = Number(cell[0]);
            let column = Number(cell[1]);
            let currentCellTaken = false;
            console.log(row, column);
            return {cell, row, column, currentCellTaken};
        }

        function updateBoardArray(row, column) {
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

        while (!playerOneVictory && !playerTwoVictory) {

            if (currentPlayer === "Player") {
                playerMove();
                currentPlayer = "Computer";
                opponent = "Player";
            }
            else {
                computerMove();
                currentPlayer = "Player";
                opponent = "Computer";
            }
    }
}

function winConditionCheck(playerTag, opponentValue, playerObjectVictory) {

    if (cellsUsed >= 5) {
        let mainDiagonal = [board[0][0], board[1][1], board[2][2]];
        let sideDiagonal = [board[0][2], board[1][1], board[2][0]];
        let firstColumn = [board[0][0], board[1][0], board[2][0]];
        let secondColumn = [board[0][1], board[1][1], board[2][1]];
        let thirdColumn = [board[0][2], board[1][2], board[2][2]];
        console.log(board);

        for(let i = 0; i < board.length; i++) {
            if ((!(board[i].includes("#")) &&
            !(board[i].includes(opponentValue))) ||
            (!firstColumn.includes("#") && 
            !firstColumn.includes(opponentValue)) ||
            (!secondColumn.includes("#") && 
            !secondColumn.includes(opponentValue)) ||
            (!thirdColumn.includes("#") &&
            !thirdColumn.includes(opponentValue)) ||
            (!mainDiagonal.includes("#") &&
            !mainDiagonal.includes(opponentValue)) ||
            (!sideDiagonal.includes("#") &&
            !sideDiagonal.includes(opponentValue))) {
                console.log(`${playerTag} has won the game!`)
                playerObjectVictory = true;
                let retry = prompt("Do you want to retry? (y), (n)?");
                switch(retry) {
                    case "y":
                        resetBoard();
                        game();
                        break;
                    case "n":
                        console.log("No retry");
                }
                break;
            }
        }
    }
    if (cellsUsed === 9 && !playerOneVictory && !playerTwoVictory) {
        console.log("It's a tie!");
        resetBoard();
    }
    return playerObjectVictory;
}

function resetBoard() {
    console.log("Board reset");

    gameBoard.board = [['#', '#', '#'],
            ['#', '#', '#'],
            ['#', '#', '#']];
    
    gameBoard.cellsUsed = 0;
}
    const computerEasyChoice = function() {
        console.log("some easy computer");
        const randomRow = Math.round(Math.random() * 2);
        const randomColumn = Math.round(Math.random() * 2);
        console.log(randomRow + 1, randomColumn + 1);
        console.log(board[randomRow][randomColumn]);
        if (board[randomRow][randomColumn] === "#") {
            board[randomRow][randomColumn] = chooseComputer.toUpperCase();
            cellsUsed += 1;
            console.log(board);
            console.log(cellsUsed);
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

