const prompt = require ('prompt-sync')();

function media (a ,b,c){
    if ((a+b+c)){
        let media = (a+b+c)/3;
        let resultado = " A media e " + media.toFixed(2);
     return resultado 
     
    }
}
   
let a = Number (prompt("digite o valor a"))
let b = Number (prompt("Digite o valor b"))
let c = Number (prompt("Digite o valor c"))
console.log (media(a,b,c));