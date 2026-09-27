"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let Curso;
Curso = {
    titulo: "Typescript",
    des: "Curso de ts",
    aula: 100,
    maxAlunos: 30
};
console.log(Curso);
console.log(Curso["aula"]);
console.log(Curso.titulo);
var Estado;
(function (Estado) {
    Estado["SP"] = "SP";
    Estado["SC"] = "SC";
    Estado["RJ"] = "RJ";
})(Estado || (Estado = {}));
const p1 = {
    nome: 'Virissimo',
    idade: 27,
    endereco: Estado.SP
};
console.log(p1);
//# sourceMappingURL=01.js.map