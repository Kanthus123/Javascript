// JS ES6: let (é usado ao invez de var) e const (constante)

// var é Function-Scope(Escopo de Função), já let e const são Block-Scope(Escopo de Bloco)

// ES5

var name5 = 'Jaden';
var age5 = 23;
name5 = 'Jaden Smith';
console.log(name5);

// ES6
var name4 = 'Jaden Mith';
let age6 = 24;
name4 = 'Jaden Leol';
console.log(name4); //não se pode mudar uma constante



// ES5
function driversLicence(passedTest){
  if(passedTest){

    var firstName = 'John';
    var yearOfBirth = 1990;
    console.log(firstName + ', ' + yearOfBirth + "pode finalmente dirigir!");

  }
}

driversLicence(true);

// ES6
function driversLicence2(passedTest){

  let firstName; //let e const só seram usados se estiverem dentro do mesmo bloco mas não fora dele
  const yearOfBirth = 1990;

  if(passedTest){
    firstName = 'Paulo';
    }
      console.log(firstName + ', ' + yearOfBirth + "pode finalmente dirigir!")
}

driversLicence(true);

let i = 23; // com LET a variavel ' i ' é diferente na primeira vez em que é criada e na segunda(dentro do for), por estarem em blocos diferentes

for (let i = 0; i < 5; i++){
  console.log(i);
}

console.log(i);

//Blocos e IIFE em ES6

// ES6
{
  const a = 1
  let b = 2
}

console.log(a + b); //Não funciona no ES6, porque as variaveis não podem ser acessadar foram do bloco em que foram implementadas

// ES5

(function() {
  'use strict';  // <<<---- ES6 Block === ES5 IIFE
}());

// Strings em ES6

let nome = 'Paulo Cesar';
let sobrenome = 'Santos de Matos';
const dtNascimento = 1995;

function calcIdade(ano){
  return 2018 - ano;
}

//ES5
console.log('Meu nome é ' + nome + sobrenome + ', e eu tenho ' + calcIdade(dtNascimento) + ' anos de idade!' );

//ES6

console.log(`Meu nome é ${nome} ${sobrenome}. Eu nasci no ano de ${dtNascimento}, e tenho ${calcIdade(dtNascimento)} anos de idade!`); //Agora ao invez de usarmos aspas simples '', nos usamos acento agudo  -> ``

const n = `${nome} ${sobrenome}`;

console.log(n.startsWith('j')); // startsWith checa se a string com X
console.log(n.endsWith('s')); // endsWith checa se a string termina com X
console.log(n.includes(' ')); // includes checa se a string contem X
console.log(`${nome} `.repeat(6));
