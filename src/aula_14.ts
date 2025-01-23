/* ============== DESESTRUTURAÇÃO =============== */

/**
 * A desestruturação serve para simplificar o consumo de dados
 * extraídos de arrays e objetos.
 */

// ((( OBJETOS )))

let people = {
  myName: 'Gustavo',
  height: 1.73,
  age: 18
}

let { myName, height, age } = people

// ((( ARRAYS )))

let numbersInFull = ["One", "Two", "Three"]

let [ num1, num2, num3 ] = numbersInFull

/* ============================================== */