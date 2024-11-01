/* =============== UNIÃO DE TIPOS =============== */

/**
 * A união de tipos serve para definir mais um tipo possível a uma variável.
 */

let superVar: string | number | null;

/* ============================================== */

/* =============== TIPOS EM ARRAY =============== */

// ((( DECLARANDO TIPO ARRAY )))

/**
 * Assim que se declara tipos em arrays no typescript.
 */

let nums: number[] = [12, 20, 34];
let nums2: Array<number> = [12, 20, 34];

/**
 * Assim declara tipos em arrays com union types.
 */

let superArray: (string | number)[] = ["10", 20, 34];
let superArray2: Array<string | number> = ["10", 20, 34];

// ((( READONLY )))

/**
 * O ReadonlyArray não permite que o array na variável atribuida seja alterado, apenas lido.
 */

let numsFix: ReadonlyArray<number> = [10, 20, 30];

// ((( TUPLAS )))

/**
 * O conseito de tuplas é atribuir os tipos permitidos para cada posição específica do array no momento da instância.
 */

let thigs: [number, string, boolean] = [10, "phone", true];

thigs[1] = "cell"; // Exemplo da alteração

/* ============================================== */