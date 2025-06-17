console.log(`Trabalhando com Condicionais\n`);

const listaDeDestinos = new Array(
    `Salvador`,
    `Sâo Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 15;

console.log(`Destinos Possíveis`);
console.log(listaDeDestinos);

if (idadeComprador >= 18) {
    console.log(`Comprador maior de idade, pode comprar`);
    listaDeDestinos.splice(1, 1); //utilizamos o metodo splice para remover um valor da lista, no caso o São Paulo
}else {
    console.log("Comprador menor de idade, não pode comprar");
}

