import { Genes } from './classes/Populacao'
import { Populacao } from './classes/Populacao'
import { disciplinas } from './utils/Disciplinas'


let cromossomo1 = new Genes(disciplinas) 
let cromossomo2= new Genes(disciplinas) 
let cromossomo3= new Genes(disciplinas) 

console.log(cromossomo1.individuos[0].horario)
console.log(cromossomo2.individuos[0].horario)
console.log(cromossomo3.individuos[0].horario)