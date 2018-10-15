// Challenge 8

class Comum{
  constructor(nome, anoConstrucao){
  this.nome = nome;
  this.anoConstrucao = anoConstrucao;
  }
}

class Parques extends Comum{
  constructor(nome, anoConstrucao, numArvores, areaParque){
  super(nome, anoConstrucao);
  this.numArvores = numArvores;
  this.areaParque = areaParque;

  }

  densidadeArvores(){
    const densidade = Math.floor(this.numArvores / this.areaParque);
    console.log(`A densidade do parque ${this.nome} é de: ${densidade} km²`);
  }
}

class Ruas extends Comum{
  constructor(nome, anoConstrucao, tamanho, tipoRua = 'normal'){
  super(nome, anoConstrucao);
  this.tamanho = tamanho;
  this.tipoRua = tipoRua;
  }

  classificacaoRuas(){
    console.log(`${this.nome}, foi construida em ${this.anoConstrucao}, e é uma rua ${this.tipoRua}`);
  }
}

const TodosParques = [new Parques('Parque Colonial', 1918, 1500, 10.0),
                      new Parques('Parque dos Santos', 1898, 500, 3.0),
                      new Parques('Parque Akainu', 1718, 900, 5.0)
                    ];

const TodasRuas = [
                  new Ruas('Visconde', 1990, 5),
                  new Ruas('Santurio', 1900, 10, 'grande'),
                  new Ruas('Pedro', 2000, 2, 'pequena'),
                  new Ruas('Lasalista', 1800, 50, 'gigante')
                ];

function RelatorioParque(rel){
  console.log('-------------------RELATORIO DOS PARQUES-------------------');
  //Densidade das arvores por KM quadrado
  rel.forEach(el => el.densidadeArvores());

  //Idade média dos parques
  qtdParques = 0;
  const idadeParques = rel.map(el => { qtdParques++; return new Date().getFullYear() - el.anoConstrucao;});
  const idadeTotalParques = idadeParques.reduce((ant, atual) => ant + atual);
  const media = Math.round(idadeTotalParques / qtdParques);
  console.log(`Idade media dos ${qtdParques} parques: ${media} anos`);

  //Parque que tem mais de 1000 arvores
  const muitasArvores = rel.map(el => el.numArvores).findIndex(el => el >= 1000);
  console.log(`${rel[muitasArvores].nome} é o parque que tem mais de 1000 árvores`);
}

function RelatorioRuas(rel){
  console.log('-------------------RELATORIO DOS RUAS-------------------')

  // Idade total e média das ruas
  qtdRuas = 0;
  const idadeRuas = rel.map(el => { qtdRuas++; return new Date().getFullYear() - el.anoConstrucao;});
  const idadeTotalRuas = idadeRuas.reduce((ant, atual) => ant + atual);
  const media = Math.round(idadeTotalRuas / qtdRuas);
  console.log(`Tamanho total de todas das nossas ${qtdRuas} ruas: ${idadeTotalRuas} km. \nTamanho médio das ruas: ${media} km`);

  //Classificação de Tamanho das RUAS
  rel.forEach(el => el.classificacaoRuas());
}

RelatorioParque(TodosParques);
RelatorioRuas(TodasRuas);
