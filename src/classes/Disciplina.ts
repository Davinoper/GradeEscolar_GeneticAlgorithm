import { Professor } from "./Professor"

class Disciplina{
    nome: String 
    professor: Professor

    constructor(nome:String, professor: Professor){
        this.nome = nome;
        this.professor = professor;
    }
}

export { Disciplina }