
import { Cromossomo, Populacao } from './classes/Populacao'
import { disciplinas } from './utils/Disciplinas'


let populacao_I = Populacao.GerarPopulacaoInicial(disciplinas,2)

console.log(populacao_I)


while(!populacao_I.isCampeao){
    populacao_I = populacao_I.proximaGeracao()
    
    populacao_I.individuos.sort(function(a,b){
        return a.pontuacao < b.pontuacao ? -1 : a.pontuacao > b.pontuacao ? 1: 0
    });
    populacao_I.individuos.reverse();
    if(populacao_I.isCampeao){
        
        console.log("===populacao Campeã ====")
        populacao_I.individuos.forEach( x => {
            console.log("===individuo Campeã ====")
            imprimeIndividuo(x)
        } )
    }else{
        console.log("===melhor individuo da populacao ====")
        imprimeIndividuo(populacao_I.individuos[0]);
    }
}





function imprimeIndividuo(individuo: Cromossomo){
    let disciplinas: String[] = []
    individuo.genes.forEach((gene) => {
        gene.horario.disciplinas.forEach((disciplina) => disciplinas.push(disciplina.nome));
    });
    let res = separar(disciplinas,10)
    let cont = 1
    res.forEach((arr) =>{
        console.log(`${cont} série: `)
        cont +=1
        console.log(arr)
    })
    compararHorarios(res)
}
  
function compararHorarios(array: String[][]){
    let colisoes: number[][] = [[]]
    for (let i = 0; i < array[0].length; i++) {
        if(array[0][i] === array[1][i]){
            colisoes.push([0,1,i])
        }
        if(array[0][i] === array[2][i]){
            colisoes.push([0,2,i])
        }
        if(array[1][i] === array[2][i]){
            colisoes.push([1,2,i])
        }
    }
    console.log("Colisões (turma,turma,posição):")
    console.log(colisoes)
}


function separar(base:String[], maximo: number) {
    var resultado: String[][] = [[]];
    var grupo = 0;
  
    for (var indice = 0; indice < base.length; indice++) {
      if (resultado[grupo] === undefined) {
        resultado[grupo] = [];
      }
  
      resultado[grupo].push(base[indice]);
  
      if ((indice + 1) % maximo === 0) {
        grupo = grupo + 1;
      }
    }
    return resultado;
  }





