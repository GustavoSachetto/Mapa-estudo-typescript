/* ============== TIPOS PRIMITIVOS ============== */

// ((( NUMBER )))

/**
 * O tipo number serve para armazenar todos os dados do tipo numérico em Typescript 
 * por exemplo: int, float, decimal, double, bin e hex.
 */

let num: number = 71;

//  ((( STRING )))

/** 
 * O tipo string serve para armazenar valores apenas do tipo string.
*/

let caracter: string = "ABCDEFG";

// ((( BigInt )))

/**
 * O tipo BigInt armazena números de até (2^53-1).
 */

let gigant: BigInt =  BigInt(100);

// ((( BOOLEAN )))

/**
 * O tipo boolean serve para armazenar valores de (sim) ou (não).
 */

let interruptor: boolean = false;

// ((( SYMBOL )))

/**
 * O tipo symbol serve para armazenar valores imutáveis e únicos em typscript,
 * podem ser usados como chaves para propriedades de objetos.
 */

let getClassName: Symbol = Symbol();

// ((( ANY )))

/**
 * O tipo any é usado para definir que uma variável aceita qualquer tipo de valor,
 * e deve ser atribuida apenas em ocasiões específicas, pois se usadas muitas vezes 
 * o conseito de linguagem fortemente tipada começa a cair em desuso.
 */

let generic: any = "Exemplo";

generic: 123;
generic: false;
generic: null;

// ((( OBJECT )))

/**
 * O tipo object é usado para definir valores do tipo objeto em javascript.
 */

let car: object = {
  id: 3,
  state: 'SP',
  branch: 'Chevrolet'
}

// ((( UNIT TYPES )))

/**
 * Os tipos únicos são usados para específicar retornos de funções e 
 * propriedade desconhecidas de variáveis.
 */

let exampleNull: null = null;
let exampleUndefined: undefined = undefined;

/* ============================================== */