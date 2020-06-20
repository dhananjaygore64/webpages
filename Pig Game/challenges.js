/*
CHALLENGES:
Change the game to follow these rules:

1. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
2. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/

//GAME RULES:

//- The game has 2 players, playing in rounds
//- In each turn, a player rolls two dice as many times as he whishes. Each result get added to his ROUND score
//- BUT, if the player rolls a 1 in any of the dice, all his GLOBAL score gets lost. After that, it's the next player's turn
//- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
//- The first player to reach Final Score points on GLOBAL score wins the game



var roundScore, scores, activePlayer,gamePlaying,prevDice;


init();

/* Roll Dice Button */

document.querySelector('.btn-roll').addEventListener('click',function(){
    
    if(gamePlaying){
        
        var dice1=Math.floor(Math.random()*6)+1;
        var dice2=Math.floor(Math.random()*6)+1;
        
        document.querySelector('#dice-1').style.display='block';
        document.querySelector('#dice-2').style.display='block';
        document.querySelector('#dice-1').src='dice-'+dice1+'.png';
        document.querySelector('#dice-2').src='dice-'+dice2+'.png';
        
        if(dice1!==1 && dice2!==1){
            roundScore+=dice1+dice2;
            document.querySelector('#current-'+activePlayer).textContent=roundScore;
        }
        else{
           nextPlayer();        
        }
    }
});

/* Hold Button */

document.querySelector('.btn-hold').addEventListener('click',function(){
    
    if(gamePlaying){
        
        // Get round score into main score and update on web page
        scores[activePlayer]+=roundScore;
        document.querySelector('#score-'+activePlayer).textContent=scores[activePlayer];

        // get the final/winning score value from webpage
        var input=document.querySelector('.final-score').value;
        var winningScore;
        if(input){
            winningScore=input;
        }else{
            winningScore=100;
        }
        
        // check for winner else next player
        if(scores[activePlayer]>=winningScore){

            gamePlaying=false;
            document.querySelector('#name-'+activePlayer).textContent='Winner!';
            document.querySelector('#dice-1').style.display='none';
            document.querySelector('#dice-2').style.display='none';
            document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
            document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');

        }else{
            nextPlayer();
        }
    }

});

/* New Game Button */
document.querySelector('.btn-new').addEventListener('click',init);


function nextPlayer(){
    prevDice=0;
    document.querySelector('#current-'+activePlayer).textContent=0;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    activePlayer===0 ? activePlayer=1 : activePlayer=0;
    roundScore=0;
    document.querySelector('#dice-1').style.display='none';
    document.querySelector('#dice-2').style.display='none';
            
}

function init(){
    prevDice=0;
    gamePlaying=true;
    roundScore=0;
    scores=[0,0];
    activePlayer=0;
    document.querySelector('#score-0').textContent=0;
    document.querySelector('#score-1').textContent=0;
    document.querySelector('#current-0').textContent=0;
    document.querySelector('#current-1').textContent=0;
    document.querySelector('#dice-1').style.display='none';
    document.querySelector('#dice-2').style.display='none';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('#name-0').textContent='Player 1';
    document.querySelector('#name-1').textContent='Player 2';
    
}

