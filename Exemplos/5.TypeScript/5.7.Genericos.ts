function qualquerValor<T>(valor: T): T {
  return valor;
}

// Uso da função identidade com diferentes tipos de dados
const numerO: number = qualquerValor(42); // retorna 42
const texto: string = qualquerValor("Olá, TypeScript!"); // retorna "Olá, TypeScript!"
const array: number[] = qualquerValor([1, 2, 3]); // retorna [1, 2, 3]
