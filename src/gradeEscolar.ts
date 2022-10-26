import { Populacao } from './classes/Populacao'
import { disciplinas } from './utils/Disciplinas'
import { imprimeMaterias } from './utils/Utils'

let populacao_I = Populacao.GerarPopulacaoInicial(disciplinas, 2)

console.log(populacao_I)

while (!populacao_I.isCampeao) {
  populacao_I = populacao_I.proximaGeracao()

  populacao_I.individuos.sort(function (a, b) {
    return a.pontuacao < b.pontuacao ? -1 : a.pontuacao > b.pontuacao ? 1 : 0
  })
  populacao_I.individuos.reverse()
  if (populacao_I.isCampeao) {
    console.log(" ")
    console.log('===populacao Campeã ====')
    populacao_I.individuos.forEach((x) => {
        console.log(" ")
      console.log('===individuo Campeão ====')
      x.imprimeIndividuo()
    })
  } else {
    console.log(" ")
    console.log('pontuação melhor individuo:',populacao_I.individuos[0].pontuacao)
    console.log('pontuação media:',populacao_I.media)
    console.log('=== melhor individuo da populacao ====')
    populacao_I.individuos[0].imprimeIndividuo()

  }
}

imprimeMaterias(disciplinas)