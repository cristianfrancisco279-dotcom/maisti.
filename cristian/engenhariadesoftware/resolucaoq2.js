    class Aluno{
        constructor(nome){
            this.nome = nome;
            this.matematica = [];
            this.portugues = [];
        }

        adicionaNota(nota, disciplina){
            if (disciplina == "matematica"){
                this.matematica.push(nota)
            }
            else if (disciplina == "portugues"){
                this.portugues.push(nota)
            }
        }

        media(array){
            let soma = 0;
            for (let nota of array){
                soma += nota;
            }
            return soma / array.length
        }

        calculaMedia(disciplina){ let notas 
            if (disciplina == "matematica"){
                return this.media(this.matematica)
            }
            else if(disciplina == "portugues"){
                return this.media(this.portugues)
            }
            else{
                console.log("Disciplina não reconhecida.")
            }
        }
    }

    class Turma{
        constructor(nomeTurma){
            this.nomeTurma = nomeTurma;
            this.alunos = [];
        }

            criaRanking(disciplina){
        let notas = []

            for (let aluno of this.alunos){[]
            let media = aluno.calculaMedia(disciplina)
            notas.push({
                nome: aluno.nome,
            media : media
            }) 
            }

        for(let i =0; 1 < notas.lenght; i++){
        let maior = i;



        for(let j= i+i; j< notas.lengh;j++){
            if (notas[j].media > notas [maior],media){
                maior = j;
            }
        }
        
        let aux = notas[1];
        
        notas [i] = notas [maior];

        notas [maior] = aux;

        }
        return notas;
    }
    }
    // Casos de teste

    let a1 = new Aluno("Beltrano");
    a1.adicionaNota(8, "matematica");
    a1.adicionaNota(9, "matematica");

    let a2 = new Aluno("Fulano");
    a2.adicionaNota(10, "matematica");
    a2.adicionaNota(7, "matematica");

    let a3 = new Aluno("Ciclana");
    a3.adicionaNota(10, "matematica");
    a3.adicionaNota(9, "matematica");

    let turma = new Turma("3º Ano");

    turma.alunos.push(a1);
    turma.alunos.push(a2);
    turma.alunos.push(a3);

    console.log(turma.criaRanking("matematica"));