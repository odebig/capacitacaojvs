//Como o Do While não é frequentemente usado seja criativo e crie um exemplo de uso para ele

let tentativas = 0;

do {
  tentativas++;
  console.log(`Tentativa número ${tentativas}`);

  // Simula uma condição de sucesso aleatória
  var sucesso = Math.random() > 0.7; // 30% de chance de sucesso

} while (!sucesso && tentativas < 10);

if (sucesso) {
  console.log('Consegui na tentativa', tentativas);
} else {
  console.log('Desisti depois de 10 tentativas');
}
