/* =========  NULL, UNDEFINED e UNKNOWN ========= */

// ((( NULL )))

/**
 * Null é um tipo de dado que pode ser atribuido quando a variável ainda não recebeu nenhum valor significativo.
 */

let ground: string | null = null;

// ((( UNDEFINED )))

/**
 * Indica que uma variável não foi definida ou não foi atribuida a nenhum valor.
 */

let post: undefined; // Sem valor definido (apenas o tipo)

// ((( UNKNOWN )))

/**
 * Permite atribuir qualquer tipo, porém outras variáveis tipadas não poderam atribuir um valor desconhecido.
 */

let description: unknown;

// let example: string | number = description; // Erro return

/* ============================================== */