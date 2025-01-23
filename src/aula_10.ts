/* ============= GETTERS E SETTERS ============== */

/**
 * Os métodos getters e setters no Typescript servem para transformar um método em propriedade e
 * específicar como deve ser definida e acessada através da classe.
 */

class House {
  private numberOfdoors: number | undefined

  public set dors(quantity: number) {
    this.numberOfdoors = quantity
  }

  public get dors(): number | undefined {
    return this.numberOfdoors
  }
}

const house = new House()

house.dors = 10
console.log(house.dors)

/* ============================================== */