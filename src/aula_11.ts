/* ============ ABSTRAÇÃO (CLASSES) ============= */

/**
 * Exemplo de como utilizar classes abstratas nesta linguagem.
 */

abstract class Animal {
  public name: string

  constructor(name: string) {
    this.name = name
  }
}

class Dog extends Animal {
  private walk(): void {} 
}

class Bird extends Animal {
  private fly(): void {} 
}

const dog = new Dog('Briza')
const bird = new Bird('Pica-pau')

// não permitido
// const fish = new Animal('Nemo')

/* ============================================== */