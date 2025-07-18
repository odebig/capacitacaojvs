//criar de forma literal - sempre retorna undefined por default
function fun1() {}

//armazenar em uma variável
const fun2 = function () {};

//armazenar em um atributo de objeto
const obj = {};
obj.falar = function () {
  return "Opa";
};
console.log(obj.falar());

const soma = function (x, y) {
  return x + y;
};
console.log(soma(2, 3));
