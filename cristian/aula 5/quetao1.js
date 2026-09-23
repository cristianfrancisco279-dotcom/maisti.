const prompt = require ('prompt-sync')();

let opcao =prompt ('Digite um c ou f:')

function  conversor (temperatura,letra){ 

    if (letra == "c" || letra == "C"){
        let teCelsius = (5/9) * temperatura - 160/9;
        return teCelsius;
    } 
    if (letra == "f" || letra == "F"){
        let teFaheit = (9/5) * temperatura + 32
        return teFaheit
    } 
    else{
        return "Digite c ou f"
    }
}


let temperatura = prompt ('Digite A temperatura que você quer conferter')
let resultado = conversor (temperatura, opcao)
console.log (resultado)
