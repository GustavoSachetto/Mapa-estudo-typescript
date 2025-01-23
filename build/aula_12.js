"use strict";
let course1 = {
    title: 'Aprendendo o básico de redes',
    workload: 80
};
let course2 = {
    title: 'Programando em Typescript',
    workload: 60,
    maxStudents: 10,
    start() {
        console.log(`${this.title} - Curso iniciado`);
    },
};
function process(tribute) {
    return tribute;
}
process('Gustavo');
class Position {
    value;
    position;
    constructor(position, value) {
        this.position = position;
        this.value = value;
    }
}
const position1 = new Position('A1', 10);
const position2 = new Position(4, 10);
