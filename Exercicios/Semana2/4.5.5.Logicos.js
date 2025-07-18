//a) Escreva um programa que verifica se um número digitado pelo usuário é positivo e par.
//Se o número atender a essas duas condições, exiba a mensagem 'O número é positivo e par', caso contrário, exiba a mensagem 'O número não é positivo e par'.


//b) Agora, teste se ele é positivo ou par, mas não ambos. Se o número atender a uma das condições, exiba a mensagem 'O número é positivo ou par', caso contrário, exiba a mensagem 'O número não é positivo ou par'.


//c) Por fim, teste se as variáveis do da letra a e b são iguais. Se forem, exiba a mensagem 'Os números são iguais', caso contrário, exiba a mensagem 'Os números são diferentes'.

// a) Verifica se o número é positivo e par
const prompt = require('prompt-sync')(); // pra ler o que o usuário digita

const num = Number(prompt('Digite um número: '));

const isPositivo = num > 0;
const isPar = num % 2 === 0;

if (isPositivo && isPar) {
  console.log('O número é positivo e par');
} else {
  console.log('O número não é positivo e par');
}

// b) Agora vê se é positivo ou par, mas não precisa ser os dois juntos
if (isPositivo || isPar) {
  console.log('O número é positivo ou par');
} else {
  console.log('O número não é positivo ou par');
}

// c) Por último, confere se as condições de antes são iguais
const condA = isPositivo && isPar;
const condB = isPositivo || isPar;

if (condA === condB) {
  console.log('Os números são iguais');
} else {
  console.log('Os números são diferentes');
}
