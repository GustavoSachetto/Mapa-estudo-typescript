"use strict";
class Animal {
    name;
    constructor(name) {
        this.name = name;
    }
}
class Dog extends Animal {
    walk() { }
}
class Bird extends Animal {
    fly() { }
}
const dog = new Dog('Briza');
const bird = new Bird('Pica-pau');
