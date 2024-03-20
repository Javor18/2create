document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.square')
    let isComputerTurn = false;
    

    function  disableAllSquares(){
        squares.forEach(square => {
            square.style.pointerEvents = 'none';
        });
    }

    function enableAllSquares(){
        squares.forEach(square => {
            square.style.pointerEvents = 'auto';
        })
    }

    function allSquaresFilled(){
        return Array.from(squares).every(square => square.style.backgroundColor !== '');
    }

    function gameEndCheck(){
        if (allSquaresFilled()){
            console.log("Game over. All squares are filled.")
        }
    }

    squares.forEach(square => {
        square.addEventListener('click', (e) => {
            if (!isComputerTurn && square.style.backgroundColor === ''){
                disableAllSquares();
                square.style.backgroundColor = 'red';
                isComputerTurn = true;
                setTimeout(computerMove, 500);
            }
        });
    });

    function computerMove() {
        const availableSquares = Array.from(squares).filter(square => square.style.backgroundColor === '')
        if (availableSquares.length > 0){
            const randomSquare = availableSquares[Math.floor(Math.random() * availableSquares.length)];
            randomSquare.style.backgroundColor = 'green';
            isComputerTurn = false;
            enableAllSquares();
        }
        gameEndCheck();
    }
});