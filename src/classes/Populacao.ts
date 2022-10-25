import { Turma } from "./Turma";
import { Disciplina } from "./Disciplina";
import { Horario } from "./Horario";
class Populacao{
    individuos: Genes[]

    constructor(individuos: Genes[]){
        this.individuos = individuos
    }
    GerarPopulacaoInicial(disciplinas: Disciplina[],tamanhoPopulacao: Number){
        let Retorno = [];
        for (let index = 0; index < tamanhoPopulacao; index++) {
            Retorno.push(new Genes(disciplinas));
        }
        return Retorno;
    }

}
class Genes{
    individuos: Turma[]

    constructor(disciplinas: Disciplina[]){
        let turmas: Array<Turma> = [
            new Turma('1º serie',new Horario([])),
            new Turma('2º serie', new Horario([])),
            new Turma('3º serie', new Horario([])),
          ];
        
          turmas.forEach((turma) =>{
            let random;
            let aux =[...disciplinas];
            while (aux.length !== 0) {
              random = Math.floor(Math.random() * aux.length);
              turma.horario.disciplinas.push(aux[random])
              aux.splice(random,1);
            }
          })
        
          this.individuos = turmas;
    }

}

export { Populacao, Genes }