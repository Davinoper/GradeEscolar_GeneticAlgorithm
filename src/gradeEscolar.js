"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Populacao_1 = require("./classes/Populacao");
const Disciplinas_1 = require("./utils/Disciplinas");
let populacao_I = Populacao_1.Populacao.GerarPopulacaoInicial(Disciplinas_1.disciplinas, 2);
console.log(populacao_I);
while (!populacao_I.isCampeao) {
    populacao_I = populacao_I.proximaGeracao();
    console.log("===melhor individuo====");
    populacao_I.individuos.sort(function (a, b) {
        return a.pontuacao < b.pontuacao ? -1 : a.pontuacao > b.pontuacao ? 1 : 0;
    });
    populacao_I.individuos.reverse();
    imprimeIndividuo(populacao_I.individuos[0]);
}
function imprimeIndividuo(individuo) {
    let disciplinas = [];
    individuo.genes.forEach((gene) => {
        gene.horario.disciplinas.forEach((disciplina) => disciplinas.push(disciplina.nome));
    });
    let res = separar(disciplinas, 10);
    let cont = 1;
    res.forEach((arr) => {
        console.log(`${cont} série: `);
        cont += 1;
        console.log(arr);
    });
    compararHorarios(res);
}
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
