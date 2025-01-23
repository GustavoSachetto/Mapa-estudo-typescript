/* =========== MODIFICADOR DE ACESSO ============ */

/**
 * Modificadores de acesso utilizados na orientação á objetos padrão da maioria das liguagens.
 */

class Security {
  public status: boolean = true
  private firewall: string = 'TCP/IP'
  protected id: string = '550e8400-e29b-41d4-a716-446655440000'

  showFirewall(): void {
    console.log(`Firewall ativo: ${this.firewall}`)
  }
}

const security1 = new Security()

security1.status

// não permitidos:
// security1.firewall 
// security1.id

/* ============================================== */