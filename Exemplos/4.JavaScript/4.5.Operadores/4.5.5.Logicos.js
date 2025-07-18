let idade = 25,
  num = 10;

if (idade >= 18 && idade <= 65) {
  // && = E, precisa atenter ambas condições
  console.log("Você é um adulto!");
}
if (num == 0 || num >= 10) {
  // || = OU, apenas umas das condiões é necessária para validar
  console.log("Alguma coisa");
}
if (!idade) {
  // ! = NÃO (NOT), nesse caso, verifica se idade é NULL ou undefined
  console.log("Idade Inválida");
}
