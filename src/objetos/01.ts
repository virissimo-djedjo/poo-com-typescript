let Curso: {
    titulo: string;
    des: string;
    aula:number;
    maxAlunos: number
}

Curso = {
    titulo: "Typescript",
    des: "Curso de ts",
    aula: 100,
    maxAlunos: 30
}

console.log(Curso);
console.log(Curso["aula"]);
console.log(Curso.titulo);

enum Estado{
    SP = 'SP',
    SC = 'SC',
    RJ = 'RJ'
}
interface Pessoa{
    nome: string;
    idade: number;
    endereco: Estado;
}
const p1: Pessoa = {
    nome: 'Virissimo',
    idade: 27,
    endereco: Estado.SP
}

console.log(p1)