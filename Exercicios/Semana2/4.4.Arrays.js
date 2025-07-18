//Declare um array que contenha todas suas matérias do semestre 
//e outro que contenha todas as notas que você tirou nelas.

let materias = ["Filosofia da educação", "MATR320"];
let notas = [9.5, 10.0];

// Mostrar as notas usando os índices corretos
console.log("Nota em", materias[0], "foi", notas[0]);
console.log("Nota em", materias[1], "foi", notas[1]);

// aqui é para exportar para usar em outro arquivo
module.exports = { materias, notas };
