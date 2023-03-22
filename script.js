

let dice1 = document.querySelector('.img1');
let dice2 = document.querySelector('.img2');
let result = document.querySelector('.result');

let button = document.querySelector('.play');
button.addEventListener('click',()=>{
    let player1 =   Math.floor(Math.random()*6+1);
    let player2 =   Math.floor(Math.random()*6+1);
    dice1.src = `./images/dice${player1}.png`;
    dice2.src= `./images/dice${player2}.png`;
    if(player1>player2){
        result.innerHTML = "🚩 player 1 wins!";
    }
    else if(player1 === player2){
        result.innerHTML = '🚩its a draw!!🚩'
    }
    else{
        result.innerHTML = "player 2 wins! 🚩";
    }
    

})