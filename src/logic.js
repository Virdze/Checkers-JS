/* Store board state
( 
    'w/b', w - white square | b - black square
    (row,column), position
    '0/1/2/' 0 - no piece | 1 - black piece (P1) | 2 - white piece (P2)
) 

*/

let board = [];

function buildBoard(){
    const myboard = document.querySelector('.board');
    
    //Clear content
    myboard.innerHTML = '';
    // Builds 8x8 board
    for(let row = 0; row < 8 ; row++){
        for(let column = 0 ; column < 8; column++){
            
            //frontend
            const square = document.createElement('div');
            square.classList.add('square');

            if((row + column) % 2 === 0){
                square.classList.add('white')
                if(row == 0 || row == 1){
                    const piece = document.createElement('div');
                    piece.classList.add('circle');
                    piece.classList.add('black');
                    square.appendChild(piece);
                    
                    let cell = {
                        color: 'white',
                        position: [row,column],
                        piece: 1
                    };

                    board.push(cell);
                    
                }
                else {
                    let cell = {
                        color: 'white',
                        position: [row,column],
                        piece: 0
                    };

                    board.push(cell);
                }
            }
            else{
                square.classList.add('black')
                if(row == 6 || row == 7){
                    const piece = document.createElement('div');
                    piece.classList.add('circle');
                    piece.classList.add('white');
                    square.appendChild(piece);

                    
                    let cell = {
                        color: 'white',
                        position: [row,column],
                        piece: 2
                    };
                    board.push(cell);
                    
                }
                else {
                    let cell = {
                        color: 'black',
                        position: [row,column],
                        piece: 0
                    };

                    board.push(cell);
                }
            }
            myboard.appendChild(square);
        }
    }
    console.log(board);
}

document.getElementById('start-game-button').addEventListener('click', function () {
    startGame();
    const button = document.getElementById('start-game-button');
    //disable the button
    button.setAttribute("disabled", "true");
})


document.getElementsByClassName('circle').addEventListener('click', () => {
    console.log("draggable");
})

/*
$('.circle').addEventListener('click', () => {
    console.log("jquery")
})

*/

function startGame(){
    buildBoard();
    console.log('board array: ' + board);
}