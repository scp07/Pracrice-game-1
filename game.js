const image = document.getElementById('img');
const diseButton = document.querySelector('.diseButton')
const color = document.querySelectorAll('.color');
const player0EL = document.querySelector('.player--0')
const player1EL = document.querySelector('.player--1')
const btnHold = document.querySelector('.hold');
const newGame = document.querySelector('.newGame')
let temporary,activePlayer,score,playing;
const initv = function (){
    playing = true;
    temrayScore = 0;
    activePlayer = 0;
    score = [0,0];
    image.classList.add('hidden')
    document.querySelector(`.player--0`).classList.remove('win'); 
    document.querySelector(`.player--0`).classList.add('active'); 
    document.querySelector(`.player--1`).classList.remove('win'); 
    document.querySelector(`.player--1`).classList.remove('active'); 
    document.querySelector(`.scoreSecond--0`).classList.remove('hidden')
    document.querySelector(`.scoreSecond--1`).classList.remove('hidden')
    document.querySelector(`.current--0`).innerText = 0;
    document.querySelector(`.current--1`).innerText = 0;
    document.querySelector(`.score--0`).innerText = 0;
    document.querySelector(`.score--1`).innerText = 0;
}
   initv()
// hide dise image
const changePlayer = function(){
        document.querySelector(`.current--${activePlayer}`).innerText = 0;
        temrayScore =0;
        activePlayer = activePlayer == 0 ? 1 : 0 ;
        document.querySelector(`.current--${activePlayer}`).innerText = temrayScore;
        player0EL.classList.toggle('active');
        player1EL.classList.toggle('active')
}
diseButton.addEventListener('click',function(){
    if(playing){
        // visible the dise image
    image.classList.remove('hidden')
    // genarating the random number
    const randomNumber = Math.floor(Math.random()*6+1);
    // adding the random number
    image.src = `photos/${randomNumber}die.png`
    if(randomNumber !== 1){
        temrayScore += randomNumber;
        document.querySelector(`.current--${activePlayer}`).innerText = temrayScore;
    }else{
        changePlayer()
    }
    }
});
// adding hold button 

btnHold.addEventListener('click',function(){
    if(playing){
        score[activePlayer] += temrayScore;
    document.querySelector(`.score--${activePlayer}`).innerText = score[activePlayer];
    if(score[activePlayer] >= 100){
        document.querySelector(`.score--${activePlayer}`).innerText =`winner is player ${activePlayer+1}` 
        image.classList.add('hidden');
        document.querySelector(`.current--${activePlayer}`).innerText = 0;
        document.querySelector(`.player--${activePlayer}`).classList.add('win'); 
        document.querySelector(`.player--${activePlayer}`).classList.remove('active'); 
        playing = false;
        // hidden 
        document.querySelector(`.scoreSecond--${activePlayer}`).classList.add('hidden')
    }else{
        changePlayer();
        
    }
    
    }
})
newGame.addEventListener('click',initv)

