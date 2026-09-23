class aluno{
    constructor (nome,ano){
        this.nome = nome;
        this.ano = ano;
        this.notaPortugues = [];   
        this.notaMatematica = [];      
        this.mediaFinal = 0;                                                                                                                                                                                                                                                             
    }

    //metodos
    addnota(nota,disciplina){
       if (disciplina == "portugues"){
        this.notasPortugues.push(nota);
       }
       else if(disciplina == "matematica"){
        this.notaMatematica.push(nota);
       }
       else{
        console.log("Esta disciplina não existe.")
       }
       this.calculerMediaFinal();
    } 

calculcarMedia(disciplina){
    let notas;
    let soma =0;


    if (disciplina == "portugues"){
        notas = this.notaPortugues;
    }
 else if(disciplina == " Matematica"){
    notas = this.notaMatematica;
 }
else{
    console.log("Disciplina não rncontrada");
}
}

    
}