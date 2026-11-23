// ==========================================================================
// O Detetive de Erros: a Mercearia da Tia Lena
// Este ficheiro tem 6 erros. Corrijam um de cada vez e, ao lado de cada
// correção, escrevam um comentário com a mensagem que a Console mostrava.
// ==========================================================================

const nomeLoja = "Mercearia da Tia Lena";
let precoQuilo = 150;
//let nome produto = "Arroz";
let nomeProduto = "Arroz";

//let 2quilos = precoQuilo * 2;
let quilos2 = precoQuilo * 2;


console.log(`${nomeLoja}: ${nomeProduto} a ${precoQuilo} escudos o quilo.`);

const stock = 40;
//stock = stock - 5;

console.log(`Ficaram ${stock} sacos de arroz.`);

//let quantidade = "3";
let quantidade = 3;

//let total = precoQuilo + quantidade;
let total = precoQuilo * quantidade;
console.log(`3 quilos custam ${total} escudos.`);

//let emPromocao = "false";
let emPromocao = false;
console.log(typeof emPromocao);
