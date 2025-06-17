console.log(`Trabalhando com Listas`);
const salvador = `Salvador`;
const saoPaulo = `São Paulo`;
const rioDeJaneiro = `Rio de Janeiro`;

const listaDeDestinos = new Array(
    `Salvador`,
    `Sâo Paulo`,
    `Rio de Janeiro`
);

listaDeDestinos.push(`Osasco`); //Utilizamos o metodo push para adicionar um valor ao final da lista

console.log(`Destinos Possíveis`);
/* console.log(salvador, saoPaulo, rioDeJaneiro); */

console.log(listaDeDestinos);

listaDeDestinos.splice(2,1); //utilizamos o metodo splice para remover um valor da lista, no caso o Rio de Janeiro

console.log(listaDeDestinos);
console.log(listaDeDestinos[2]); //utilizamos o indice 2 para acessar o terceiro elemento da lista, que no caso é o Osasco

console.log(listaDeDestinos[2], listaDeDestinos[0]);