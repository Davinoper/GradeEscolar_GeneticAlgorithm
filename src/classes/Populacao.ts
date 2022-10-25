import { Turma } from './Turma'
import { Disciplina } from './Disciplina'
import { Horario } from './Horario'
import { Professor } from './Professor'
class Populacao {
  individuos: Cromossomo[]
    
  constructor(individuos: Cromossomo[]) {
    this.individuos = individuos
  }
  static GerarPopulacaoInicial(disciplinas: Disciplina[],tamanhoPopulacao: Number): Populacao {
    let Retorno = []
    for (let index = 0; index < tamanhoPopulacao; index++) {
      Retorno.push(new Cromossomo(disciplinas))
    }
    return new Populacao(Retorno)
  }
  static cruzamentoTurmas(individuo1:Cromossomo,individuo2:Cromossomo):Cromossomo{
    console.log("=======================")
    console.log("individuo1:",individuo1)
    console.log("individuo2:",individuo2)
    console.log("=======================")
    let aux = new Cromossomo(); 
    aux.genes[0] = individuo1.genes[0];
    aux.genes[1] = individuo2.genes[1];
    aux.genes[2] = individuo1.genes[2];
    aux.funcaoDeAvaliacao();
    return aux;
  }

  proximaGeracao(): Populacao{
    this.individuos.sort((x) => x.pontuacao);
    let individuosCruzamento = this.individuos.splice(0,5);
    let filhos = []
    for (let i = 0; i < individuosCruzamento.length; i++) { 
        for (let e = individuosCruzamento.length-1; e > i; e--) {
            filhos.push(Populacao.cruzamentoTurmas(individuosCruzamento[i],individuosCruzamento[e]));
            filhos.push(Populacao.cruzamentoTurmas(individuosCruzamento[e],individuosCruzamento[i]));            
        }   
    }
    
    return new Populacao(filhos);
  }


}
class Cromossomo {
  genes: Turma[]
  pontuacao:number;
  
  
  constructor(disciplinas?: Disciplina[]) {
    let turmas: Array<Turma> = [
    new Turma('1º serie', new Horario([])),
    new Turma('2º serie', new Horario([])),
    new Turma('3º serie', new Horario([])),
    ];
    
    if(disciplinas){
        turmas.forEach((turma) => {
        let random
        let aux = [...disciplinas]
        while (aux.length !== 0) {
            random = Math.floor(Math.random() * aux.length)
            turma.horario.disciplinas.push(aux[random])
            aux.splice(random, 1)
        }
        })
    }

    this.genes = turmas
    this.pontuacao =0;
    this.funcaoDeAvaliacao();
  }

  funcaoDeAvaliacao(){
    this.pontuacao = 0;
    let professoresTurmas: Professor[][] = [];
    this.genes.forEach((turma) =>{
        let professores: Professor[] = [];
        turma.horario.disciplinas.forEach((disciplina) =>{
            professores.push(disciplina.professor)
        })
        professoresTurmas.push(professores)

    })
    console.log("professoresTurmas.length",professoresTurmas.length);
    console.log("professoresTurmas[0].length",professoresTurmas[0].length);
    
    
    for (let i = 0; i < professoresTurmas[0].length; i++) {
        if(professoresTurmas[0][i] === professoresTurmas[1][i]){
            --this.pontuacao; 
        }
        if(professoresTurmas[0][i] === professoresTurmas[2][i]){
            --this.pontuacao; 
        }
        if(professoresTurmas[1][i] === professoresTurmas[2][i]){
            --this.pontuacao; 
        }
    }
    console.log("this.pontuacao",this.pontuacao);
  }
}

export { Populacao, Cromossomo }
