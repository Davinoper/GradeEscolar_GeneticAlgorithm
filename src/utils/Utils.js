"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.imprimeMaterias = exports.separar = exports.compararHorarios = void 0;
function compararHorarios(array) {
    let colisoes = [[]];
    for (let i = 0; i < array[0].length; i++) {
        if (array[0][i] === array[1][i]) {
            colisoes.push([0, 1, i]);
        }
        if (array[0][i] === array[2][i]) {
            colisoes.push([0, 2, i]);
        }
        if (array[1][i] === array[2][i]) {
            colisoes.push([1, 2, i]);
        }
    }
    console.log("Colisões (turma,turma,posição):");
    console.log(colisoes);
}
exports.compararHorarios = compararHorarios;
function separar(base, maximo) {
    var resultado = [[]];
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
exports.separar = separar;
function imprimeMaterias(disciplinas) {
    console.log(" ");
    console.log("================Matérias=========================");
    disciplinas.forEach((element) => {
        console.log(`Disciplina: ${element.nome}, Professor: ${element.professor.nome}`);
    });
    console.log("============================================");
}
exports.imprimeMaterias = imprimeMaterias;
