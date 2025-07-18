let livro = {
  titulo: "Os Miseráveis",
  genero: ["Romance", "Drama", "Épico", "Tragédia", "Ficção"],
  autor: "Victor Hugo",
};
console.log(livro);

const clone = { ...livro };
console.log(clone);

const clone2 = Object.assign(livro);
console.log(clone2);
