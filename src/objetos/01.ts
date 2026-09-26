let curso: {
    titulo: string;
    des: string;
    aula:number;
    maxAlunos: number
}

curso = {
    titulo: "Typescript",
    des: "Curso de ts",
    aula: 100,
    maxAlunos: 30
}

console.log(curso);
console.log(curso["aula"]);
console.log(curso.titulo);