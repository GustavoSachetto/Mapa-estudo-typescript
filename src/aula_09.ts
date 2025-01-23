/* ============= HERANÇA (CLASSES) ============== */

/**
 * Adicionando a herança de classes com construtor na classe pai e 
 * na classe filha.
 */

// classe pai
class Account {
  protected id: number
  protected owner: string

  constructor(owner: string) {
    this.id = this.generateRandomId()
    this.owner = owner
  }

  private generateRandomId(): number {
    return Math.random() * 10000
  }

  protected showInformations(): void {
    console.log(`${this.id} - ${this.owner}`)
  }
}

// classe filha
class AccountCPF extends Account {
  public cpf: string

  constructor(owner: string, cpf: string) {
    super(owner)
    this.cpf = cpf
  }

  public showInformations(): void {
    super.showInformations()
    console.log(`${this.cpf} - ${this.owner}`)
  }
}

// classe filha
class AccountCNPJ extends Account {
  public cnpj: string

  constructor(owner: string, cnpj: string) {
    super(owner)
    this.cnpj = cnpj
  }

  public showInformations(): void {
    super.showInformations()
    console.log(`${this.cnpj} - ${this.owner}`)
  }
}

const conta1 = new AccountCPF('Gustavo Sachetto da Cruz', '123.456.789-00')
const conta2 = new AccountCNPJ('Felipe Miguel dos Santos', '00.623.904/0001-73')

conta1.showInformations()
conta2.showInformations()

/* ============================================== */