import { Disciplina } from "../classes/Disciplina"

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

  function imprimeMaterias(disciplinas: Disciplina[]){
    console.log(" ")
    console.log("================Matérias=========================")
    disciplinas.forEach((element) => {
        console.log(`Disciplina: ${element.nome}, Professor: ${element.professor.nome}`)
    })
    console.log("============================================")
}

export { compararHorarios, separar, imprimeMaterias}