/* ============ INTERFACE (CLASSES) ============= */

// ((( INTERFACE )))

/**
 * Declarando interfaces com typescript.
 */

interface Course {
  title: string
  workload: number
  start?(): void
}

interface CoursePrograming extends Course {
  maxStudents: number
}

let course1: Course = {
  title: 'Aprendendo o básico de redes',
  workload: 80
}

let course2: CoursePrograming = {
  title: 'Programando em Typescript',
  workload: 60,
  maxStudents: 10,
  start() {
    console.log(`${this.title} - Curso iniciado`)
  },
}

// ((( GENERICS )))

/**
 * Tipos genéricos em typescript servem para especificar o mesmo tipo na entrada, no parâmetro 
 * e na saida de dados de uma função, os tipos podem ser modificados conforme o necessário.
 */

// T é apenas uma letra comumente usada, pode ser qualquer letra
function process<T>(tribute: T): T {
  return tribute
}

process<string>('Gustavo') // retorno do tipo string

/**
 * Exemplo utilizando classes. O valor da classe é passado para o construtor.
 */

class Position<T> {
  public value: number
  private position: T

  constructor(position: T, value: number) {
    this.position = position
    this.value = value
  }
}

const position1 = new Position<string>('A1', 10)
const position2 = new Position<number>(4, 10)

/* ============================================== */