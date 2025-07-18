//Para arrays:
let a, b, rest;
[a, b] = [10, 20];

console.log(a);
//Output: 10

console.log(b);
//Output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
//Output: [30, 40, 50]

//Para objetos:
const pessoa = { nome: "Jhonny", idade: 16 };
console.log(pessoa.nome);
//Output: Jhonny
