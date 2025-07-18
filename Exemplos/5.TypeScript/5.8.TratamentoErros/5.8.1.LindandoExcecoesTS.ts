try {
  //Código que pode gerar um erro
  const resultado = 10 / 0; //Tentando dividir por zero
  console.log(resultado); //Esta linha nunca será executada
} catch (erro) {
  // Capturando e lidando com o erro
  console.error("Ocorreu um erro:", erro);
} finally {
  // Bloco opcional que sempre é executado
  console.log("Execução concluída.");
}
