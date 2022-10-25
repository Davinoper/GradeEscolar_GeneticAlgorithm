"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cromossomo = exports.Populacao = void 0;
const Turma_1 = require("./Turma");
const Horario_1 = require("./Horario");
class Populacao {
    constructor(individuos) {
        this.individuos = individuos;
    }
    static GerarPopulacaoInicial(disciplinas, tamanhoPopulacao) {
        let Retorno = [];
        for (let index = 0; index < tamanhoPopulacao; index++) {
            Retorno.push(new Cromossomo(disciplinas));
        }
        return new Populacao(Retorno);
    }
    static cruzamentoTurmas(individuo1, individuo2) {
        console.log("=======================");
        console.log("individuo1:", individuo1);
        console.log("individuo2:", individuo2);
        console.log("=======================");
        let aux = new Cromossomo();
        aux.genes[0] = individuo1.genes[0];
        aux.genes[1] = individuo2.genes[1];
        aux.genes[2] = individuo1.genes[2];
        aux.funcaoDeAvaliacao();
        return aux;
    }
    proximaGeracao() {
        this.individuos.sort((x) => x.pontuacao);
        let individuosCruzamento = this.individuos.splice(0, 5);
        let filhos = [];
        for (let i = 0; i < individuosCruzamento.length; i++) {
            for (let e = individuosCruzamento.length - 1; e > i; e--) {
                filhos.push(Populacao.cruzamentoTurmas(individuosCruzamento[i], individuosCruzamento[e]));
                filhos.push(Populacao.cruzamentoTurmas(individuosCruzamento[e], individuosCruzamento[i]));
            }
        }
        return new Populacao(filhos);
    }
}
exports.Populacao = Populacao;
class Cromossomo {
    constructor(disciplinas) {
        let turmas = [
            new Turma_1.Turma('1º serie', new Horario_1.Horario([])),
            new Turma_1.Turma('2º serie', new Horario_1.Horario([])),
            new Turma_1.Turma('3º serie', new Horario_1.Horario([])),
        ];
        if (disciplinas) {
            turmas.forEach((turma) => {
                let random;
                let aux = [...disciplinas];
                while (aux.length !== 0) {
                    random = Math.floor(Math.random() * aux.length);
                    turma.horario.disciplinas.push(aux[random]);
                    aux.splice(random, 1);
                }
            });
        }
        this.genes = turmas;
        this.pontuacao = 0;
        this.funcaoDeAvaliacao();
    }
    funcaoDeAvaliacao() {
        this.pontuacao = 0;
        let professoresTurmas = [];
        this.genes.forEach((turma) => {
            let professores = [];
            turma.horario.disciplinas.forEach((disciplina) => {
                professores.push(disciplina.professor);
            });
            professoresTurmas.push(professores);
        });
        console.log("professoresTurmas.length", professoresTurmas.length);
        console.log("professoresTurmas[0].length", professoresTurmas[0].length);
        for (let i = 0; i < professoresTurmas[0].length; i++) {
            if (professoresTurmas[0][i] === professoresTurmas[1][i]) {
                --this.pontuacao;
            }
            if (professoresTurmas[0][i] === professoresTurmas[2][i]) {
                --this.pontuacao;
            }
            if (professoresTurmas[1][i] === professoresTurmas[2][i]) {
                --this.pontuacao;
            }
        }
        console.log("this.pontuacao", this.pontuacao);
    }
}
exports.Cromossomo = Cromossomo;
