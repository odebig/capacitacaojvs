//Number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

//String
let color: string = "blue";
color = "red";

let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentenceA: string = `Hello, my name is ${fullName}.
I'll be ${age + 1} years old next month.`;

let sentenceB: string =
  "Hello, my name is " +
  fullName +
  ".\n\n" +
  "I'll be " +
  (age + 1) +
  " years old next month.";

//Array
let numeros: number[] = [1, 2, 3, 4, 5];

//Tuple
let pessoa: [string, number] = ["Xuxa", 60];

//Enum
enum rifa {
  "bicicleta",
  "doce de leite",
  "doce de abobora",
}

enum DiaDaSemana {
  Segunda,
  Terca,
  Quarta,
  Quinta,
  Sexta,
  Sabado,
  Domingo,
}

let hoje: DiaDaSemana = DiaDaSemana.Segunda;

//Boolean
let ativo: boolean = true;

//Null e Undefined
let u: undefined = undefined;
let n: null = null;

//Any
let variavelQualquer: any = "Isso pode ser qualquer coisa";

//void
function mostrarMensagem(): void {
  console.log("Olá, mundo!");
}

//Objeto
let objeto: Object;

objeto = { nome: "Alice" }; // Válido
objeto = [1, 2, 3]; // Válido
objeto = "Olá"; // Válido
objeto = 42; // Válido

let objetoB: object = { nome: "Alice" };

// Verificação de tipo
if ("nome" in objetoB) {
  console.log(objetoB["nome"]); // "Alice"
}

// Conversão de tipo
let objetoConvertido = objetoB as { nome: string };
console.log(objetoConvertido.nome); // "Alice"
