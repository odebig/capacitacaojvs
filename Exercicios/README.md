<!-- markdownlint-disable -->

# Exercicios Capacitação

Só para organizar melhor vamos explicar um pouquinho as coisas: aqui em baixo tem um cronograma de como vai ser divido a capacitação. E como é possível ver ela vai ter 4 semanas, sendo uma atividade por semana. E as atividades vão estar relacionadas ao tópicos vistos em cada semana.

# Organização das Aulas

<details>
    <summary> 1° Semana </summary>
    
>1\. Extensões para VsCode
>
> 2\. Overview Java Script
>
> 3\. Primeiro Hello World
>
> 4\. Lógica de Programação em JS: **(Opcional)**
>
> > 4.1. Princípios de programação <br>
> >
> > > 4.1.1. O que é um algoritmo<br>
> > > 4.1.2. Visão geral de todas estruturas<br>
> > > 4.1.3. O que é um bloco de código<br>
> > > 4.1.4. Comentário de um código<br>

</details>

<details>
    <summary>2° Semana</summary>
  
> 4.2. Variáveis (let,var e const)
>
> 4.3. Tipos de dados primitivos (string,
> boolean, number)
>
> 4.4. Estrutura de dados (array e objetos)
>
> 4.5. Operadores
>
> > 4.5.1. Atribuição<br>
> > 4.5.2. Destructing<br>
> > 4.5.3. Aritméticos<br>
> > 4.5.4. Relacionais<br>
> > 4.5.5. Lógicos<br>
> > 4.5.6. Unário e Ternário
>
> 4.6. Estruturas de controle
>
> > 4.6.1. if <br>
> > 4.6.2. if else <br>
> > 4.6.3. switch <br>
> > 4.6.4. while <br>
> > 4.6.5. do while <br>
> > 4.6.6. for <br>
> > 4.6.7. for in

</details>

<details>
    <summary>3° Semana</summary>
  
> 4.8. Funções
>> 4.8.1. Função arrow   
>> 4.8.2. Funções do array 
>>> 4.8.2.1. Foreach      
>>> 4.8.2.2. Map       
>>> 4.8.2.3. Filter   
>>> 4.8.2.4. Reduce
> 
>4.9. Promises, Async e Await
</details>

<details>
    <summary>4° Semana</summary>
  
>  5.Type Script
>> 5.1. Tipos de dados básio
>>> 5.1.1. Number <br>
>>> 5.1.2. String <br>
>>> 5.1.3. Array <br>
>>> 5.1.4. Tuple <br>
>>> 5.1.5. Enum <br>
>>> 5.1.6. Boolean <br>
>>> 5.1.7. Null e Undefined <br>
>>> 5.1.8. Any <br>
>>> 5.1.9. Void <br>
>>> 5.1.10. Object <br>
>>
> > 5.2. Inferência de Tipos <br>
> > 5.3. Union Types <br>
> > 5.4. Funções em TypeScript
> > > 5.4.1. Declaração de Funções <br>
> > > 5.4.2. Parâmetros e Tipos <br>
> > > 5.4.3. Valor de Retorno
>>
> > 5.5. Interfaces
> > > 5.5.1. Criando e usando interfaces <br>
> > > 5.5.2. Extensão de tipos com interfaces
>>
> > 5.6. Type Aliases
> > > 5.6.1. Criando e usando type aliases <br>
> > > 5.6.2. Extensão de tipos com type aliases
>>
> > 5.7. Genéricos
> > > 5.7.1. Introdução aos genéricos <br>
> > > 5.7.2. Usando genéricos em funções e classes
>>
> > 5.8. Tratamento de erros
> > > 5.8.1. Lidando com exceções em TypeScript <br>
> > > 5.8.2. Tipos de Erro

</details>

<hr>

## Atividade 1° Semana

Nesta semana os tópicos abordam o JS de uma maneira mais geral, além de dar um introdução do mundo de programação. Sendo assim, sua tarefa é bem simples, os passos para realizá-la são:

- Baixar o [VsCode](https://code.visualstudio.com/)
- Baixar o [Node](https://nodejs.org/en)
- Baixar todas as extensões que a gente recomendou, [clica aqui](https://github.com/Ex-Machina-Unifei-Oficial/capacitacao-javascript?tab=readme-ov-file#1-extens%C3%B5es-para-vscode) para lembrar
- Rodar seu primeiro `Hello Word` porque você não quer ter anos de bug né?

## Atividades 2° Semana

Essa semana você já viu um pouco de código então já consegue bota a mão na massa, ta na hora de rodar os exemplos dados para ver se eles funcionam mesmo. Além de claro treinar um pouquinho seu raciocínio em JS. Então o passo a passo dessa semana é:

- Clonar o repositório da capacitação no seu pc
- Rodar os exemplos visto até aqui e verificar se não há dúvidas sobre eles
- Realizar os exercícios que estão dentro da pasta [Semana 2](/Exercicios/Semana2/)

## Atividade 3° Semana

A partir de agora, você já viu todo conteúdo de JavaScript. Então, vamos começar um projeto que vai se estender até o final das capacitações. Esse projeto será um jogo mais tradicional impossível, quem nunca chorou quando clicou na bomba? Você deverá implementar um código para montar o **início** de um campo minado.

Vamos começar com a parte técnica então. Para realizar a criação desse jogo esperamos que você crie um repositório no _GitHub_ denominado _campoMinado_ e vá desenvolvendo tudo que for pedido aqui por lá, pedimos isso para que futuramente possamos verificar o que foi realizado, além de te ajudar com possíveis bugs. Para atividade desta semana você deve criar uma pasta denominada javaScript e escrever todos os códigos nela. Além disso algo muito importante, você deverá utilizar o objeto abaixo:

```jsx
Square = {
  row: 0,
  column: 0,
  state: "closed", //Pode ser: closed, opened, flagged
  hasMine: false,
  nearMines: 0, //Número de minas em volta
};
```

Então vamos preparar todas funções que você irá precisar:

1. Crie uma função que _receba o número de linhas e de colunas_ que seu campo minado terá. Essa função **deverá criar e retornar uma matriz** sendo que cada elemento dessa matriz recebe um objeto `Square` como default. Ou seja, se você recebe 5 linhas e 5 colunas, você retornará uma matriz com 25 objetos `Square`.

2. Crie uma função para **sortear as minas**. Essa função _receberá uma matriz e a quantidade de minas_. Você deve sortear uma linha e uma coluna e mudar o `hasMine` para `true`. **Dica:** utilize `while` para ir sorteando as bombas e ir verificando se já não tem uma bomba no lugar.

3. Crie uma função para **contar quantas bombas tem ao redor do quadrado**. Essa função deverá _receber a matriz, o número da linha e o número da coluna_. Após realizar a contagem de bombas vizinhas insira esse valor no parâmetro `nearMines`. **Dica:** Se atente aos quadrados que ficam na margem, eles tem menos vizinhos.

4. Crie uma função para **contar bombas de todo campo**, ou seja, ela _receberá uma matriz_ _como parâmetro_ e internamente chamará a função anterior para cada elemento da matriz, sendo assim, ela precisa percorrer a matriz e chamar a função de contar bombas para cada objeto.

5. Crie uma função para **imprimir a matriz no console**, essa função _receberá uma matriz como parâmetro_. Você deve escolher um símbolo para representar sua bomba, como exemplo o `*` e caso não tenha bomba mostrar a quantidade de bombas vizinhas, se a quantidade for zero mostre um espaço em branco. Não se esqueça de cercar cada elemento com um par de `[]` para facilitar a visualização.

Com todas funções preparadas vamos ao passo a passo para verificá-las:

1. Crie uma constante chamada `campoMinado` e atribua a ela o retorno da função de criar a matriz, fique a vontade para definir o tamanho da matriz.

2. Utilize a seção de [Deep Copy](https://github.com/Ex-Machina-Unifei-Oficial/capacitacao-javascript?tab=readme-ov-file#472-deep-copy) para criar uma nova constante `gabaritoCampoMinado` que recebe uma cópia da sua constante `campoMinado` .

3. Chame a função para sortear bombas e utilize como base a constante `gabaritoCampoMinado` , escolha a quantidade de bombas que seu coração desejar.

4. Chame a função para contar a quantidade de bombas vizinhas na matriz `gabaritoCampoMinado` .

5. Chame duas vezes a função para imprimir uma matriz e cada hora passe um váriável, ou seja, `campoMinado` e `gabaritoCampoMinado` . Se tudo ocorreu certo, a primeira matriz deverá aparecer tudo em branco e a segunda com as bombas que foram sorteadas e com os números de bombas vizinhas.

Agora você, deve estar se perguntando: _ok e como eu jogo?_ Mas por enquanto você terá que se contentar em desenvolver apenas a lógica mesmo, ele funcionando serão cenas dos próximos capítulos.

### Exercícios extras

Como as capacitações no Ex são melhoradas a cada ano, pegamos esses exercícios de uma capacitação anterior caso você queira ter um treino adicional.

- [Exercicios_de_JS.pdf](Atividades%206f4816afeb39470faa3592be2f6b8e5a/Exercicios_de_JS.pdf)

- [Exercicios_JS](Atividades%206f4816afeb39470faa3592be2f6b8e5a/Capacitacao_JS_-_Semana_2.pdf)

## Atividade 4° Semana

E já acabou essa capacitação, essa semana foi uma metralhadora de conteúdo né? Mas fica tranquilo que atividade você já vai ta manjando.

Semana passada você fez a lógica do campo minado, e esta semana chegou a hora de continuar. Mas fica tranquilo que você não terá que criar nada novo, na verdade vai ser um ctrl c + ctrl v e fazer umas mudanças kkk.

Primeiro você deve criar uma pasta typeScript no seu repositório e copiar todos os códigos da semana passada para ela, depois disso você precisa criar um tipo baseado no objeto `Square` e também criar um tipo para sua matriz e sair por ai “tipando” todas as funções que você fez. Não utilize nenhum `any` no seu código final!

Não se assuste se não funcionar, é normal o TS causar uns bugs, mas acredite são males que vem para o bem.

**OBS:** Não se esqueça de mudar a extensão dos seus arquivos de `.js` para `.ts` já que você ta mudando a linguagem que está utilizando.

<hr>

Em caso de **qualquer** dúvida, entre em contato com o padrinho responsável, diretor da subequipe ou responsável pela capacitação.
