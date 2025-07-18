let vetor = [1, 2, 3];
vetor.forEach((elemento) => console.log(elemento));
let vetor2 = [1, 2, 3, 4, 5];
vetor.forEach((item, indice, vetor) => {
  console.log(item);
  console.log(indice);
  console.log(vetor);
});
