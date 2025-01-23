/* ============= DECLARAÇÃO FUNÇÃO ============== */

// ((( TIPAGEM )))

/**
 * Para tipar uma função em Typescript é seguida as regras desta maneira abaixo.
 */

// função nomeada
function sum(num1: number, num2: number): number {
  return num1 + num2
}

// função anônima / arrow
const sub = (num1: number, num2: number): number => {
  return num1 + num2
}

// ((( PARÂMETROS )))

/**
 * Alguns tipos de parâmetros em funções são opcionais ou declarados como padrão.
 */

// parâmetros padrão
function user(name: string = 'Gustavo', id: string | null = null): void {}

// parâmetros opcionais
function mail(from?: string, to?: string): void {}

// ((( REST )))

/**
 * Parâmetros do tipo REST serve para armazenar todos os parâmetros de entrada numa função.
 */

function fsum(...nums: number[]): number {
  return nums.reduce((previus, current) => previus + current, 0)
}

fsum(10,20,30,40,50,60)

/* ============================================== */