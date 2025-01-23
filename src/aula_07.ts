/* ============ ORIENTAÇÃO Á OBJETO ============= */

// ((( CLASSES )))

/**
 * Alguns padrões na criação de uma classe utilizando Typescript, por exemplo:
 */

class Computer {
  name: string 
  ip: string
  cpu: string

  constructor(name: string, ip: string = '127.0.0.0', cpu: string = '1 core') {
    this.name = name
    this.ip = ip
    this.cpu = cpu
  }
  
  ping(): string {
    return `${this.ip} - pong`
  }
}

const computer1 = new Computer('guga')
const computer2 = new Computer('alfa', '192.168.0.4')
const computer3 = new Computer('delta', '192.168.0.10', '4 core')

computer1.ping()

/* ============================================== */