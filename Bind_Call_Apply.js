// Bind, call e Apply

var john = {
  name: 'John',
  age: 26,
  job: 'teacher',
  presentation: function(style, timeOfDay){
    if (style === 'formal') {
      console.log('Good ' + timeOfDay + ', Ladies and Gentlemen! I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
    } else if(style === 'friendly'){
      console.log('Hey! Whats\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
    }
  }
};

var emily = {
  name: 'Emily',
  age: 30,
  job: 'designer'
};

john.presentation('formal', 'morning');

//O método call() permite que troquemos a primeira variavel para outra variavel, assim pegando emprentado o presentation de John.
john.presentation.call(emily, 'friendly', 'afternoon');

//O método apply() permite que os parametros sejam enviados dentro de um array.
// john.presentation.apply(emily, ['friendly', 'night']); <----- apenas um exemplo, não funciona aqui nessse momento!!!

var johnFriendly = john.presentation.bind(john, 'friendly'); //O metodo bind deixa fixado os valores inseridos na variavel.

johnFriendly('morning');

var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('afternoon');

var anos = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calcAge(el) {
    return 2016 - el;
}

function isMaiorIdade(limit, el) {
    return el >= limit;
}

var ages = arrayCalc(anos, calcAge);
var fullJapan = arrayCalc(ages, isMaiorIdade.bind(this, 20));
console.log(ages);
console.log(fullJapan);
