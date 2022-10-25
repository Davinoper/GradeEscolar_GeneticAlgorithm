"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Turma_1 = require("./classes/Turma");
const Professor_1 = require("./classes/Professor");
const Disciplina_1 = require("./classes/Disciplina");
let professores = [
    new Professor_1.Professor('Jânio'),
    new Professor_1.Professor('Jeferson'),
    new Professor_1.Professor('Tayse'),
    new Professor_1.Professor('Tamyres'),
    new Professor_1.Professor('BossoNaro'),
];
let disciplinas = [
    new Disciplina_1.Disciplina('Topicos 2', professores[1]),
    new Disciplina_1.Disciplina('IHC', professores[2]),
    new Disciplina_1.Disciplina('IA', professores[3]),
    new Disciplina_1.Disciplina('Eng. Qualidade', professores[4]),
    new Disciplina_1.Disciplina('Calc. 1', professores[5]),
];
let turmas = [
    new Turma_1.Turma('3º serie'),
    new Turma_1.Turma('1º serie'),
    new Turma_1.Turma('2º serie'),
];
console.log(professores);
console.log(disciplinas);
console.log(turmas);
for (let i = 0; i < 10; i++) {
    console.log(i);
}
