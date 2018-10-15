// Maps (Usa Hash)

const question = new Map();
question.set('question', 'Qual é o nome da nossa faculdade? ');
question.set(1, 'UVA');
question.set(2, 'La Salle');
question.set(3, 'Uni Carioca');
question.set('correct', 2);
question.set(true, 'Resposta Correta');
question.set(false, 'Resposta Errada');

console.log(question.get('question'));
console.log(question.size);

// if(question.has(1)){ question.delete(4)}

// question.clear(); limpa todo o Hash

// question.delete(key); deleta o conteudo da key X da Hash

//question.forEach((value, key)) => console.log(`This is ${key}, and its set to ${value}`);

for (let [key, value] of question.entries()){ // .estries() mostra todo conteudo da Hash
  console.log(`This is ${key}, and its set to ${value}`);
};

for (let [key, value] of question.entries()){
  if (typeof(key) === 'number'){
    console.log(`Answer ${key}: ${value}`);
  }
}

const ans = parseInt(prompt('Write the correct answer: '));

console.log(question.get(ans === question.get('correct')));
