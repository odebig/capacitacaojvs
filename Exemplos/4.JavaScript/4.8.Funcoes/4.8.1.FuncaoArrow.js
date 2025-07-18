let dobroA = function (a) {
  return 2 * a;
};
console.log(dobroA(2));

//função arrow eh sempre anônima
//deve sempre ser associada a uma variável
const dobroB = (a) => {
  return 2 * a;
};
console.log(dobroB(2));

const dobroC = (a) => 2 * a; //return está implícito
console.log(dobroC(2));
