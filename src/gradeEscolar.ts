
import { Populacao } from './classes/Populacao'
import { disciplinas } from './utils/Disciplinas'


let populacao_I = Populacao.GerarPopulacaoInicial(disciplinas,100)
let geracao1 = populacao_I.proximaGeracao()
let geracao2 = geracao1.proximaGeracao()
let geracao3 = geracao2.proximaGeracao()
populacao_I.individuos = populacao_I.individuos.sort((x) => x.pontuacao)
geracao1.individuos  = geracao1.individuos.sort((x) => x.pontuacao)
geracao2.individuos  = geracao2.individuos.sort((x) => x.pontuacao)
geracao3.individuos  = geracao3.individuos.sort((x) => x.pontuacao)
console.log(populacao_I);
console.log(geracao1)
console.log(geracao2)
console.log(geracao3)


