import { Disciplina } from "../classes/Disciplina";
import { professores } from "./Professores";

let disciplinas: Array<Disciplina> = [
    new Disciplina('Biologia', professores[0]),
    new Disciplina('Quimica', professores[0]),
    new Disciplina('Fisica', professores[1]),
    new Disciplina('Matematica', professores[1]),
    new Disciplina('Portugues', professores[2]),
    new Disciplina('Ed. Fisica', professores[2]),
    new Disciplina('Artes', professores[3]),
    new Disciplina('Redação', professores[3]),
    new Disciplina('Filosofia', professores[4]),
    new Disciplina('Sociologia', professores[4]),
  ];

  export { disciplinas }