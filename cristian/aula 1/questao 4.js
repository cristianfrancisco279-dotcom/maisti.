const prompt = require ('prompt-sync')();

let numero1 = prompt ('Digite um o primeiro número');
let numero2 = prompt ('Digite o segundo número');

let maior = Math.max (numero1, numero2)

console.log (' o número maior e :', maior);