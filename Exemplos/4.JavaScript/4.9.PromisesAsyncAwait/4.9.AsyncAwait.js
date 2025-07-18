const esperarPor = (tempo = 2000) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Executando promise...");
      resolve();
    }, tempo);
  });
};

//por trás do async e do await sempre tem que ter um promise
const executar = async () => {
  await esperarPor(1500);
  console.log("Async/Await 1...");

  await esperarPor(1500);
  console.log("Async/Await 2...");

  await esperarPor(1500);
  console.log("Async/Await 3...");
};

//se retornasse um valor e quisesse usá-lo tem que usar o then pq ela retorna uma promise
executar();
