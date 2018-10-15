// DESTRUCTION, I mean... Destructuring

// ES5

//var paulo = ['Paulo', 23];
//var nome = paulo[0];
//var idade = paulo[1];

// ES6
const [nome, idade] = ['Paulo', 23];
console.log(nome);
console.log(idade);

const obj = {
  nome2: 'Paulo Cesar',
  sobreNome: 'Santos de Matos'
};

const {nome2, sobreNome} = obj;
console.log(nome2);
console.log(sobreNome);

const {nome2: n, sobreNome: sn} = obj;
console.log(n);
console.log(sn);

function calcIdadeAposentadoria(ano){
  const idade = new Date().getFullYear() - ano;
  return [idade, 65 - idade];
}

const [idade2, aposentadoria] = calcIdadeAposentadoria(1995);
console.log(idade2);
console.log(aposentadoria);
