/* ============ NAMESPACE (CLASSES) ============= */

/**
 * Como funciona o namespace do Typescript, lembra bastante o do C# (funciona com colchetes).
 */

// precisa do export para usar fora do namespace
namespace Sports {
  class Basketball {}
  
  export class Soccer {}
  
  export class Race {
    private extra: Basketball

    constructor() {
      this.extra = new Basketball()
    }
  }
}

const sport1 = new Sports.Soccer()
const sport2 = new Sports.Race()

// não permite, tem que adicionar o export na classe
// const sport3 = new Sports.Basketball()

/* ============================================== */