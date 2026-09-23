const prompt = require ('prompt-sync')();
 




function f (v){
    let fanheit = v * 1.8 + 32
    return fanheit 
}

let conversor = f (10)
console.log (conversor)

console.log ('o numero em ',conversor,'e')