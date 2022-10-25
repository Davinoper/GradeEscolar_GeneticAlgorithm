import { Turma } from './Turma'
import { Disciplina } from './Disciplina'
import { Horario } from './Horario'
import { Professor } from './Professor'
import { disciplinas } from '../utils/Disciplinas'
class Populacao {
  individuos: Cromossomo[]
  isCampeao:Boolean
  constructor(individuos: Cromossomo[],isCampeao?:Boolean) {
    this.individuos = individuos
    this.isCampeao =(isCampeao=== null || isCampeao === undefined ? false: isCampeao)
  }

  static GerarPopulacaoInicial(disciplinas: Disciplina[],tamanhoPopulacao: Number): Populacao {
    let Retorno = []
    for (let index = 0; index < tamanhoPopulacao; index++) {
      Retorno.push(new Cromossomo(disciplinas))
    }
    return new Populacao(Retorno)
  }
  
  static cruzamentoTurmas(individuo1:Cromossomo,individuo2:Cromossomo):Cromossomo{
    let aux = new Cromossomo(); 
    aux.genes[0] = individuo1.genes[0];
    aux.genes[1] = individuo2.genes[1];
    aux.genes[2] = individuo1.genes[2];
    aux.funcaoDeAvaliacao();
    return aux;
  }

  proximaGeracao(): Populacao{
    this.individuos.sort(function(a,b){
      return a.pontuacao < b.pontuacao ? -1 : a.pontuacao > b.pontuacao ? 1: 0
    });

    let individuosCruzamento = this.individuos.splice(0,5);
    let filhos = []
    for (let i = 0; i < individuosCruzamento.length; i++) { 
        for (let e = individuosCruzamento.length-1; e > i; e--) {
            filhos.push(Populacao.cruzamentoTurmas(individuosCruzamento[i],individuosCruzamento[e]));
            filhos.push(Populacao.cruzamentoTurmas(individuosCruzamento[e],individuosCruzamento[i]));            
        }   
    }
    let campeoes = filhos.filter((ind) =>{
      if(ind.pontuacao == 0){
        return true
      }    
    })
    if(campeoes.length === 0 ){
      let filhosMutados = this.multacao(filhos);
      filhos = filhos.concat(individuosCruzamento);
      filhos = filhos.concat(filhosMutados);
      return new Populacao(filhos);
    }else{
      return new Populacao(campeoes,true);
    }

  }

  multacao(filhos: Cromossomo[]){
    filhos.forEach((filho) => filho.genes.forEach((gene) =>{
      let val1 = Math.floor(Math.random() * 10);
      let aux = gene.horario.disciplinas[val1];
      gene.horario.disciplinas.splice(val1,1);
      gene.horario.disciplinas.push(aux);
    } ))
    return filhos;
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
  }
}

export { Populacao, Cromossomo }
