console.log(`Trabalhando com Condicionais\n`);

const listaDeDestinos = new Array(
    `Salvador`,
    `Sâo Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 18;
const estaAcompanhada = true;

console.log(`Destinos Possíveis`);
console.log(listaDeDestinos);

if (idadeComprador >= 18) {
    console.log(`Comprador maior de idade, pode comprar`);
    listaDeDestinos.splice(1, 1); //utilizamos o metodo splice para remover um valor da lista, no caso o São Paulo
} else if (estaAcompanhada) {
    console.log("Comprador é menor de idade mas está acompanhado, pode comprar");
    listaDeDestinos.splice(1, 1);
} else {
    console.log("Não é maior de idade e não pode posso vender");
}

