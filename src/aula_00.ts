/* =========== IMPORTANDO MODULOS =========== */

// ((( IMPORT )))

/**
 * O Import é utilizado para importar modulos javascript que foram exportados em
 * outros arquivos javascript.
 */

import people from "./variables"; // Import default, serve para importar um modulo padrão, podendo receber qualquer nome.

import { sum } from "./variables"; // Import simples, deve ser específicado o modulo que deve ser importado.

// ((( EXPORT )))

/** 
 * O Export é usado para exportar uma variável, função ou modulo de um arquivo javascript.
*/

export default people; // Export default é utilizado para exportar um modulo padrão no arquivo.

export { sum }; // Export é utilizado para exportar mais de um modulo no arquivo.

/* ========================================== */