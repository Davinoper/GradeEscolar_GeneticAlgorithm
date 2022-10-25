"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Genes = exports.Populacao = void 0;
const Turma_1 = require("./Turma");
const Horario_1 = require("./Horario");
class Populacao {
    constructor(individuos) {
        this.individuos = individuos;
    }
    GerarPopulacaoInicial(disciplinas, tamanhoPopulacao) {
        let Retorno = [];
        for (let index = 0; index < tamanhoPopulacao; index++) {
            Retorno.push(new Genes(disciplinas));
        }
        return Retorno;
    }
}
exports.Populacao = Populacao;
class Genes {
    constructor(disciplinas) {
        let turmas = [
            new Turma_1.Turma('1º serie', new Horario_1.Horario([])),
            new Turma_1.Turma('2º serie', new Horario_1.Horario([])),
            new Turma_1.Turma('3º serie', new Horario_1.Horario([])),
        ];
        turmas.forEach((turma) => {
            let random;
            let aux = [...disciplinas];
            while (aux.length !== 0) {
                random = Math.floor(Math.random() * aux.length);
                turma.horario.disciplinas.push(aux[random]);
                aux.splice(random, 1);
            }
        });
        this.individuos = turmas;
    }
}
exports.Genes = Genes;
