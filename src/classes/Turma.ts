import { Horario } from "./Horario";

class Turma{

    name: String
    horario: Horario
    constructor(name:String, horario: Horario){
        this.name = name;
        this.horario = horario;
    }
}

export { Turma }