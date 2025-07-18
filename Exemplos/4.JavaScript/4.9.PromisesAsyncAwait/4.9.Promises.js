function falarDepoisDe(segundos, frase) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(frase, "abc");
    }, segundos * 1000);
  });
}

falarDepoisDe(3, "Que legal!")
  .then((frase, abc) => {
    console.log(abc); //undefined pq só aceita um parametro msm mandando 2
    return frase.concat("?!?");
  })
  .then((outraFrase) => console.log(outraFrase)) //chama a vontade
  .catch((e) => console.log(e)); //para tratar erros quando usa o reject, mas chama uma vez só
