//Percorra o vetor de notas que voce criou em 4.4.Arrays.js e calcule a média delas
//Após sair do for imprima sua média

//DESAFIO: copie também o vetor de matérias, utilize o for para percorrer os dois vetores
//e imprimir a matéria e a nota correspondente


const { materias, notas } = require('./4.4.Arrays');

// Calculando a média das notas
let soma = 0;
for (let i = 0; i < notas.length; i++) {
  soma += notas[i];
}

const media = soma / notas.length;
console.log('Média das notas:', media);

// DESAFIO: imprimir matéria e nota juntas
for (let i = 0; i < materias.length; i++) {
  console.log(`${materias[i]}: ${notas[i]}`);
}
