document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })
})

function handleClick(event){
    let position = event.target.id;
    let player = ['Moon','Sun']

    if(handleMove(position)){
        setTimeout(()=>{
            alert('Game Over: The Winner was the '+ player[playerTime]);
            if(playerTime ==0){
                score1.innerHTML = parseInt(score1.innerHTML) + 1
            }else if(playerTime==1){
                score2.innerHTML = parseInt(score2.innerHTML) + 1
            }
        }, 10);
    }
    updateSquare(position);
}

function updateSquare(position){
    let square = document.getElementById(position.toString())
    let symbol = board[position];
    square.innerHTML = `<div class = '${symbol}'></div>`
}

