/*
Exercício de Destructuring em JavaScript

1. Dado o seguinte array:
const numbers = [1, 2, 3, 4, 5];

a) Utilize a sintaxe de Destructuring para atribuir os valores 1, 2 e 3 às variáveis a, b e c, respectivamente.

b) Utilize a sintaxe de Destructuring para atribuir os valores 4 e 5 a uma variável d.

2. Dado o seguinte objeto:
const person = {
    name: 'John',
    age: 30,
    city: 'New York'
};

a) Utilize a sintaxe de Destructuring para atribuir os valores 'John', 30 e 'New York' às variáveis name, age e city, respectivamente.

b) Utilize a sintaxe de Destructuring para atribuir o valor 'John' e o valor 30 à variável PersonResume.

*/

// Destructuring em português desestruturação, ela é uma sintaxe que permite pegar valores de arrays ou propriedades de objetos e atribuir às variáveis mais rápido, ajuda na hora de programar, organizado, menos linhas e pega só o que precisa, sem precisar acessar as propriedades manualmente.

// resolvendo 1)a)

const numbers = [1, 2, 3, 4, 5];
const [a, b, c] = numbers;

// coloquei 1 em a, 2 em b e o 3 em c, igualando as letras aos números

// 1)b)

const [, , , ...d] = numbers;

// aqui eu usei ... como "rest operator" pois o resto vai ser um array então separei, colocando o resto (4 e 5) na variável d. "..." serve para extrair partes importantes e deixar o resto juntos, assim não precisa pegar um por um.

// 2)a)
const person = {
    name: 'John',
    age: 30,
    city: 'New York'
};

const { name, age, city } = person;

// aqui, peguei as propriedades "name", "age" e "" do objeto e as atribuí a variáveis com os mesmos nomes.

// 2)b)

const { name: personName, age: perosnAge } = person;
const PersonResume = { name: personName, age: perosnAge };

// Aqui, criei a variável 'PersonResume' contendo um objeto com as propriedades 'name' e 'age'.
// Usei aliases (name: personName) para evitar conflito de nomes com variáveis anteriores.
