import { Turma } from './classes/Turma'
import { Horario } from './classes/Horario'
import { Professor } from './classes/Professor'
import { Disciplina } from './classes/Disciplina'

let professores: Array<Professor> = [
  new Professor('Jânio'),
  new Professor('Jeferson'),
  new Professor('Tayse'),
  new Professor('Tamyres'),
  new Professor('BossoNaro'),
];

let disciplinas: Array<Disciplina> = [
  new Disciplina('Topicos 2', professores[1]),
  new Disciplina('IHC', professores[2]),
  new Disciplina('IA', professores[3]),
  new Disciplina('Eng. Qualidade', professores[4]),
  new Disciplina('Calc. 1', professores[5]),
];

let turmas: Array<Turma> = [
  new Turma('1º serie'),
  new Turma('2º serie'),
  new Turma('3º serie'),
];

console.log(professores)
console.log(disciplinas)
console.log(turmas)
