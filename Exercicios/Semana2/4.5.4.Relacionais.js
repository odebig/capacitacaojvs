//Crie um objeto pessoa com as propriedades nome, idade e altura. Crie duas variáveis Pessoa1 e Pessoa2, e atribua valores diferentes para cada uma das propriedades.
//Compare as variáveis Pessoa1 e Pessoa2 com os operadores relacionais e mostre no console o resultado de cada comparação.

// Criando objeto pessoa com propriedades nome, idade e altura
function criarPessoa(nome, idade, altura) {
  return {
    nome: nome,
    idade: idade,
    altura: altura
  };
}

// Criando duas pessoas com valores diferentes
const Pessoa1 = criarPessoa('Johnny Depp', 62, 1.75);
const Pessoa2 = criarPessoa('Letícia', 30, 1.65);

// Comparações entre as propriedades usando operadores relacionais
console.log('Pessoa1.nome === Pessoa2.nome:', Pessoa1.nome === Pessoa2.nome); // false
console.log('Pessoa1.idade > Pessoa2.idade:', Pessoa1.idade > Pessoa2.idade);   // true
console.log('Pessoa1.idade < Pessoa2.idade:', Pessoa1.idade < Pessoa2.idade);   // false
console.log('Pessoa1.altura >= Pessoa2.altura:', Pessoa1.altura >= Pessoa2.altura); // true
console.log('Pessoa1.altura <= Pessoa2.altura:', Pessoa1.altura <= Pessoa2.altura); // false
console.log('Pessoa1.nome != Pessoa2.nome:', Pessoa1.nome != Pessoa2.nome);     // true

