//a) Operadores Unários
//Crie uma variável chamada "num" e atribua a ela um valor numérico qualquer.
// Utilize os operadores unários para incrementar e decrementar o valor da variável "num".
// Imprima o valor final da variável "num" no console.


//b) Operadores Ternários
// Utilize o operador ternário para verificar se um numero é impar ou par.

//resolvendo:
// a) Operadores Unários
let num = 10; // Criei uma variável "num" com um valor qualquer

num++; // Incrementa +1 (num vira 11)
num--; // Decrementa -1 (num volta pra 10)
num--; // Decrementa mais uma vez (num vira 9)

console.log('Valor final de num:', num); // Imprime o valor final (9)

// b) Operadores Ternários
// Aqui vou usar o operador ternário pra ver se num é par ou ímpar
const resultado = (num % 2 === 0) ? 'par' : 'ímpar';

console.log(`O número ${num} é ${resultado}.`); // Mostra o resultado no console
