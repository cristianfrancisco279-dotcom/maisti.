const prompt = require ('prompt-sync')();

function indicador (idade,letra){

    if (letra == "m" &&  idade > 40){
    return 'barato';
    }
    else{
        return 'Caro';
    }
  
}

let opcao =prompt ("Digite m ou h:")

let idade =prompt ("Digite a idade:")
let resultado = indicador(idade,opcao)
console.log (resultado)