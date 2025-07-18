//Faça um condicional para verificar se a nota de calculo deu para passar

// DESAFIO: dado um valor em R$, verificar se você precisa de moedas ou não
// Dica: tenta ver as casas decimais


// Verificar se passou na matéria de cálculo
const notaCalculo = 6.5; // coloca aqui a nota que você tirou

if (notaCalculo >= 6) {
  console.log('Passou em cálculo!'); // se a nota for maior ou igual a 6, passou
} else {
  console.log('Não passou em cálculo.'); // se for menos que 6, não passou
}

// DESAFIO: ver se precisa de moedas no valor em reais
const valorEmReais = 10.75; // pode mudar o valor aqui

// Pego só a parte decimal do valor (as casas depois da vírgula)
const parteDecimal = valorEmReais % 1;

// Se a parte decimal for maior que zero, precisa de moedas
if (parteDecimal > 0) {
  console.log('Precisa de moedas.');
} else {
  console.log('Não precisa de moedas.');
}
