const prompt = require ('prompt-sync')();
 
function detector (a,b,c){
    if ((a + b >c) && (a + c >b) && (b + c > a)){

        let soma = (a + b + c) /2;

        let area = Math.sqrt (soma* (soma-a ) * (soma-b) * (soma-c))
        
        let resultado = area.toFixed(2)

        return "A area do triangulo e " + resultado + " e um triangulo valido"
    }
     else{
        return "resultado invalido isso não e um triangulo";
    }
}
let a = Number(prompt("Digite o valor do Lado A do triangulo:"))
let b = Number(prompt("Digite o valor do lado B do triangulo:"))
let c = Number(prompt("Digite o valor do lado C do Triangulo:"))
console.log (detector(a,b,c))