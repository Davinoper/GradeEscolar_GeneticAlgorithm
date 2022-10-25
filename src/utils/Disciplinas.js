"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.disciplinas = void 0;
const Disciplina_1 = require("../classes/Disciplina");
const Professores_1 = require("./Professores");
let disciplinas = [
    new Disciplina_1.Disciplina('Biologia', Professores_1.professores[0]),
    new Disciplina_1.Disciplina('Quimica', Professores_1.professores[0]),
    new Disciplina_1.Disciplina('Fisica', Professores_1.professores[1]),
    new Disciplina_1.Disciplina('Matematica', Professores_1.professores[1]),
    new Disciplina_1.Disciplina('Portugues', Professores_1.professores[2]),
    new Disciplina_1.Disciplina('Ed. Fisica', Professores_1.professores[2]),
    new Disciplina_1.Disciplina('Artes', Professores_1.professores[3]),
    new Disciplina_1.Disciplina('Redação', Professores_1.professores[3]),
    new Disciplina_1.Disciplina('Filosofia', Professores_1.professores[4]),
    new Disciplina_1.Disciplina('Sociologia', Professores_1.professores[4]),
];
exports.disciplinas = disciplinas;
