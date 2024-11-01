import people from "./variables";

/* =============== ALTERANDO TIPO =============== */

// ((( TYPE ASSERTION )))

/**
 * Assertion type serve para alterar a atribuição de tipos entre as variáveis, por exemplo, se eu tenho uma variável do tipo number e quero que ela seja do tipo string, primeiro eu tenho que converter seu tipo.
 */

let age: string = people.age.toString();

// ((( TYPECAST )))

/**
 * Serve para converter buscramente um tipo unknown para outro qualquer, assim podendo ser atribuido para outra variável.
 */

let styled: unknown = "default";

let myStyled: string = <string>styled;

/* ============================================== */