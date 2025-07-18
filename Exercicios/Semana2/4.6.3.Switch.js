//Faça uma estrutura de switch para dado o código da sua matéria desse semestre
//ela irá imprimir no console o nome completo da materia

const codigoMateria = 'MATR320'; // coloca aqui o código da sua matéria

switch(codigoMateria) {
  case 'FILO101':
    console.log('Filosofia da Educação');
    break;
  case 'MATR320':
    console.log('Matemática Resolução de');
    break;
  case 'PROG200':
    console.log('Programação em JavaScript');
    break;
  case 'CALC101':
    console.log('Cálculo');
    break;
  default:
    console.log('Código de matéria inválido.');
}


