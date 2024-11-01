/* =============== TIPO EM OBJECT =============== */

// ((( OBJECT )))

/**
 * Criando objetos em typescript seguindo a lógica de abstrair soluções.
 */

let data = {
  age: 18,
  status: true,
  name: "Gustavo",

  talk: () => {
    console.log("Olá meu nome é " + self.name);    
  }
}

data.age
data.talk()
data.name

// ((( ENUM )))

/**
 * O enum é outra forma de abstrair soluções, sendo muito utilizado para definição de respostas possiveís.
 */

enum days {
  sunday = 1,
  monday = 2,
  tuesday = 3,
  wednesday = 4,
  thursday = 5,
  friday = 6,
  saturday = 7
}

enum colors {
  dark = "#000",
  light = "#fff",
  gray = "#0000",
  blue = "#00f"
}

enum users {
  PUBLIC,
  ADMIN,
  SUPER
}

days.friday // Acesso do enum
days['friday'] // 1
days[1] // friday

colors.blue // #00f
colors['blue']

users.ADMIN // 1
users.SUPER // 2

/* ============================================== */