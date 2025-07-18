//Declare um objeto para representar seu personagem favorito
//Seja criativo com as propriedades

//Transforme os dois vetores de Arrays.js em um objeto
//Cada matéria representará uma propriedade do objeto,
//com sua nota correspondente sendo o valor associado a essa propriedade.

const personagemFavorito = {
    nome: "Motoqueiro Fantasma",
    universo: "Marvel e HQ",
    habilidade: "Fazer qualquer veículo pegar fogo e continuar andando, manipular correntes transformando-as em fogo, regeneração rápida e seu maior poder: o Olhar da Penitência",
    forca: 1000,
    frase: "Olhe para os meus olhos, sua alma está manchada de sangue inocente. Sofra com eles!"
};
console.log(personagemFavorito);


//coloque esse comando puxando o arquivo arrays.js 

const {materias, notas} = require('./4.4.Arrays');

//aqui cria uma constante vazia

const boletim ={};

//cria um lup para juntar materias e notas no objeto

for (let i =0; i< materias.length; i++) {
    boletim[materias[i]] = notas[i];
}

console.log(boletim);