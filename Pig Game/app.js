/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundscores, acPlayer, gamePlaying, scoreLimit;

init();

document.querySelector('.btn-roll').addEventListener('click', function(){
    if(gamePlaying){
      var dice = Math.floor(Math.random() * 6) + 1; //Randomiza entra 1 e 6, e tira os decimais.

      var diceDOM = document.querySelector('.dice');
      diceDOM.style.display = 'block';                    //mostra o resultado
      diceDOM.src =  'dice-' + dice + '.png';

      if(dice !==  1){
        roundScore += dice;
        document.querySelector('#current-' + acPlayer).textContent = roundScore;
      } else {
        nextPlayer();
             }
    }

});

document.querySelector('.btn-hold').addEventListener('click', function(){

    if(gamePlaying){
        scores[acPlayer] += roundScore; //distribui os pontos

        document.querySelector('#score-' + acPlayer).textContent = scores[acPlayer]; //atualiza os pontos do jogador

        scoreTotal = document.querySelector('.ipt-tot').value;
        var alterado;

        if(scoreTotal){
          alterado = scoreTotal;
        } else { alterado = 100; }


    if(scores[acPlayer] >= alterado){
      document.querySelector('#name-'+ acPlayer).textContent = 'WINNER';
      document.querySelector('.dice').style.display = 'none';
      document.querySelector('.player-' + acPlayer + '-panel').classList.add('winner');
      document.querySelector('.player-' + acPlayer + '-panel').classList.remove('active');
      gamePlaying = false;
    }else { nextPlayer(); }
  }
});

function nextPlayer(){
  acPlayer === 0 ? acPlayer = 1 : acPlayer = 0; //troca de jogador
  roundScore = 0; //muda o score do round para 0

  document.getElementById('current-0').textContent = '0'; // muda o current score para 0
  document.getElementById('current-1').textContent = '0';

  document.querySelector('.player-0-panel').classList.toggle('active'); //ativa ou desativa a clase "active" para mostrar quem é o jogador atual
  document.querySelector('.player-1-panel').classList.toggle('active');

  document.querySelector('.dice').style.display = 'none'; //esconde a imagem do dado entre os rounds

}

document.querySelector('.btn-new').addEventListener('click', init);

function init(){
  scores = [0, 0];
  acPlayer = 0;
  roundScore = 0;
  gamePlaying = true;

  document.querySelector('.dice').style.display = 'none'; //Desativa o Dado

  document.getElementById('score-0').textContent = '0'; //pontos para 0
  document.getElementById('score-1').textContent = '0';

  document.getElementById('current-0').textContent = '0'; //pontos da rodada para 0
  document.getElementById('current-1').textContent = '0';

  document.getElementById('name-0').textContent = 'Player 1'; //nome do jogador de volta para Jogador
  document.getElementById('name-1').textContent = 'Player 2';

  document.querySelector('.player-0-panel').classList.remove('winner'); //remover classe winner
  document.querySelector('.player-1-panel').classList.remove('winner');

  document.querySelector('.player-0-panel').classList.add('active'); //remover ou adicionar classe active
  document.querySelector('.player-1-panel').classList.remove('active');


}
