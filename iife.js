// IIFE - Immediatily Invoked Function Expression

(function() {
  'use strict';         //estrutura de um IIFE

}());

(function(){
  var score = Math.random() * 10;  // Exemplo
  console.log(score >= 5);
})();

(function(goodLuck){
  var score = Math.random() * 10;
  console.log(score >= 5 - goodLuck);  // Exemplo com Parametro
})(5);
