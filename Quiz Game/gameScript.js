//O programa esta todo dentro de um IIFE, assim o tornando privado. Com isso o programa pode ser usado como plugin para outros programas sem que haja interferência no código principal.
(function() {

  var pontuacao = 0;

  function randomiza(){
    return Math.floor(Math.random() *  3);
  }

  var Pergunta = function(perg, resposta, respCorreta){
    this.perg = perg;
    this.resposta = resposta;
    this.respCorreta = respCorreta;
  }

  Pergunta.prototype.displayPergunta = function(){
    console.log(this.perg);

    for (var i = 0; i < this.resposta.length; i++){
      console.log(i + ': ' + this.resposta[i]);
    }
  }

  Pergunta.prototype.checaResposta = function(tentativa){
    if(tentativa === this.respCorreta){
      console.log('Resposta Correta!!! ');
      pontuacao += 1;
    } else {
      console.log('Resposta Errada :( ');
    }
      console.log('Sua pontuacao atual: ' + pontuacao);
      console.log('-------------------------------');
  }

  var pergunta1 = new Pergunta('Qual minha classe no WOW?', ['DH', 'Mage', 'Hunter'], 0);

  var pergunta2 = new Pergunta('Melhor Professor? ', ['Thiago', 'Mario João', 'Alex'], 1);

  var pergunta3 = new Pergunta('Qual o nome da minha mãe? ', ['Iolanda', 'Conceição', 'Debora'], 2);

  var listaPerguntas = new Array(pergunta1, pergunta2, pergunta3);

  while(respUsuario !== 'sair'){

      var a = randomiza();
      listaPerguntas[a].displayPergunta();
      var respUsuario = prompt('Qual é a resposta correta? -> Digite sair para sair!! ');

      if(respUsuario !== 'sair'){
        listaPerguntas[a].checaResposta(parseInt(respUsuario));
      } else if(respUsuario === 'sair'){
        console.log('Jogo Encerrado!!');
      } else{
        console.log('Resposta Invalida!!');
      }
  }

})();
