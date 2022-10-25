import { Disciplina } from "./Disciplina"

class Horario {

    disciplinas: Disciplina[]

    constructor(disciplinas: Disciplina[]){
        this.disciplinas = disciplinas
    }

}

export { Horario }