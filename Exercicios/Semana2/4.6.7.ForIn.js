//Copie o vetor de matérias no 4.4.Arrays.jsque você criou e
//percorra ele imprimindo cada matéria

//DESAFIO:Caso tenha feito o desafio de objetos, percorra ele imprimindo matéria e nota

const { materias, notas } = require('./4.4.Arrays');

// Percorrendo só o vetor de matérias
for (let i = 0; i < materias.length; i++) {
  console.log(materias[i]);
}

// DESAFIO: se tiver o objeto boletim com matéria e nota
const boletim = {};
for (let i = 0; i < materias.length; i++) {
  boletim[materias[i]] = notas[i];
}

// Agora percorro o objeto e imprimo matéria e nota
for (const materia in boletim) {
  console.log(`${materia}: ${boletim[materia]}`);
}
