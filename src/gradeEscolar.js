"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Populacao_1 = require("./classes/Populacao");
const Disciplinas_1 = require("./utils/Disciplinas");
let populacao = Populacao_1.Populacao.GerarPopulacaoInicial(Disciplinas_1.disciplinas, 1);
// console.log(populacao.individuos[0].pontuacao)
// console.log(populacao.individuos[1].pontuacao)
// console.log(populacao.individuos[3].pontuacao)
