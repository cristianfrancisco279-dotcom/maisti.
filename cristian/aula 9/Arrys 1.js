//*Elabore um script que leia um texto inserido em uma única linha e diga quantas vogais tem no texto.*//
const prompt = require ("prompt-sync")();

let texto = prompt("Digite um texto ");

let listaChar = texto.split("")

let vogais = ["a","e",",i","o","u"]

let contaVogais = 0;

for (let char of listaChar){
    if(vogais.includes(char)){
        contaVogais++;
    }  
}

console.log (" O número de vogais e",contaVogais)