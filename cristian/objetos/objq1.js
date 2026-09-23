class conta{
    constructor(cpf,nome, saldo =0){
        this.cpf = cpf
        this.nome = nome
        this.saldo =saldo
    }
   descricao(){
    return "o cpf do cliente:" +this.cpf+
    "\nO nome do cliente é:" +this.nome+
    "\nO saldo da Conta é:" +this.saldo; 
   }


   

   //Metodos

 saque (valor){
    if (valor<=0){
        return "Digite um valor valido";
    }
    if(valor>this.saldo){
        return " Saldo insuficiente";
     
    }
    this.saldo-= valor;
    return"Saque realizado Valor R$"+valor;
}
deposito(valor){
    if(valor<=0){
        return "Digite o valor do Deposito";
    }
    this.saldo += valor;
    return "Realizado com Sucesso"
}
transferencia(valor,contadestino){
    if (valor<=0){
        return "Digite um valor valido";
    }
    if (valor>this.saldo){
        return "Saldo insuficiente";
    }
    this.saldo-= valor;
    contadestino.saldo += valor;
    return " Transferencia realizado Valor R$"+valor;
}
}
let conta1 = new
conta();
let conta2 = new conta
()

console.log (conta1.deposito());
console.log (conta1.saque());
console.log(conta1.transferencia());
 
console.log(conta1.descricao());
console.log(conta2.descricao());






