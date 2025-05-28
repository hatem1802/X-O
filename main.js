let square = document.getElementsByClassName('square');
let currentTurn = 'O';
let winner = document.getElementById('winner')
let O_array = [];
let X_array = [];

for (let i = 0; i < square.length; i++) {
    square[i].addEventListener('click', () => {
        addSign(square[i]);
        console.log(square[i])
    })
}


function addSign(square) {
    if (currentTurn == 'O' && square.innerHTML === '') {
        square.innerHTML = 'o'
        O_array.push(square.id);
        currentTurn = 'X'
        checkWinner(O_array, square.innerHTML);
    } else if (currentTurn == 'X' && square.innerHTML === '') {
        square.innerHTML = 'x'
        X_array.push(square.id);
        currentTurn = 'O'
        checkWinner(X_array, square.innerHTML);
    }
}


function checkWinner(array, player) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == 1) {
            for (let j = 0; j < array.length; j++) {
                if (array[j] == 2) {
                    for (let l = 0; l < array.length; l++) {
                        if (array[l] == 3) {
                            winner.innerHTML = `Player ${player.toUpperCase()} Is The Winner`
                        }
                    }
                } else if (array[j] == 4) {
                    for (let l = 0; l < array.length; l++) {
                        if (array[l] == 7) {
                            winner.innerHTML = `Player ${player.toUpperCase()} Is The Winner`
                        }
                    }
                } else if (array[j] == 5) {
                    for (let l = 0; l < array.length; l++) {
                        if (array[l] == 9) {
                            winner.innerHTML = `Player ${player.toUpperCase()} Is The Winner`
                        }
                    }
                }
            }
        } else if (array[i] == 2) {
            for (let j = 0; j < array.length; j++) {
                if (array[j] == 5) {
                    for (let l = 0; l < array.length; l++) {
                        if (array[l] == 8) {
                            winner.innerHTML = `Player ${player.toUpperCase()} Is The Winner`
                        }
                    }
                }
            }
        } else if (array[i] == 3) {
            for (let j = 0; j < array.length; j++) {
                if (array[j] == 5) {
                    for (let l = 0; l < array.length; l++) {
                        if (array[l] == 7) {
                            winner.innerHTML = `Player ${player.toUpperCase()} Is The Winner`
                        }
                    }
                } else if (array[j] == 6) {
                    for (let l = 0; l < array.length; l++) {
                        if (array[l] == 9) {
                            winner.innerHTML = `Player ${player.toUpperCase()} Is The Winner`
                        }
                    }
                }
            }
        } else if (array[i] == 4) {
            for (let j = 0; j < array.length; j++) {
                if (array[j] == 5) {
                    for (let l = 0; l < array.length; l++) {
                        if (array[l] == 6) {
                            winner.innerHTML = `Player ${player.toUpperCase()} Is The Winner`
                        }
                    }
                }
            }
        } else if (array[i] == 7) {
            for (let j = 0; j < array.length; j++) {
                if (array[j] == 8) {
                    for (let l = 0; l < array.length; l++) {
                        if (array[l] == 9) {
                            winner.innerHTML = `Player ${player.toUpperCase()} Is The Winner`
                        }
                    }
                }
            }
        }
    }
}