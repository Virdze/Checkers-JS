
const board = buildBoard()

function buildBoard(){
    const myboard = document.querySelector('.board');

    for(let row = 0; row < 8 ; row++){
        for(let column = 0 ; column < 8; column++){
            const square = document.createElement('div');
            square.classList.add('square');

            (row + column) % 2 === 0 ? square.classList.add('white') : square.classList.add('black')
            
            myboard.appendChild(square);
        }
    }
}