console.log("Trabalhando com atribuiçcao de variáveis");
//JS é case sensitive

//O tipo de variável const não pode ser alterado
const idadeAtual = 21;
const nome = "Lucas";
const sobrenome = "Santos";
const ano = 2025;

console.log(nome + " " + sobrenome);
console.log(nome, sobrenome);

console.log(`Meu nome é ${nome} ${sobrenome}`); //Interpolação de variáveis

nomeCompleto = nome + sobrenome;

console.log(nomeCompleto);

let idade; //Declarando variável
idade = 21; //Atribuindo valor à variável
idade = idade + 1; //Reatribuindo valor à variável
console.log(idade);