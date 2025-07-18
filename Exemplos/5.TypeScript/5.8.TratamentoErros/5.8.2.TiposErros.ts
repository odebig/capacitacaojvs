class ErroDaProtese extends Error {
  constructor() {
    super("Erro da Protese Mãozinha");
    this.name = "ErroDaProtese";
  }
}

try {
  throw new ErroDaProtese();
} catch (erro) {
  if (erro instanceof ErroDaProtese) {
    console.error("Erro capturado:", erro.message);
  } else {
    console.error("Outro erro ocorreu:", erro);
  }
}
