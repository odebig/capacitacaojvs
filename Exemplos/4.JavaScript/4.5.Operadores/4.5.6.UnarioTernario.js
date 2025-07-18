//UNÁRIO
let x = 10,
  y = 15,
  z;
z = --x + y; //Output: 24

z = x-- + y; //Output: 24
console.log(x); //Output: 8

z = ++x + y; //Output: 24

z = x++ + y; //Output: 24
console.log(x); //Output: 10

let l = 10,
  m = 5;

l += m; // Equivalente: l = l + m // Output: 15
l -= m; // Equivalente: l = l - m // Output: 5
l *= m; // Equivalente: l = l * m // Output: 50
l /= m; // Equivalente: l = l / m// Output: 2
l %= m; // Equivalente: l = l % m // Output: 0

//TERNÁRIO
const idade = 20;
console.log(idade > 18 ? "Você eh um adulto!" : "Você é jovem!");
