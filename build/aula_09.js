"use strict";
class Account {
    id;
    owner;
    constructor(owner) {
        this.id = this.generateRandomId();
        this.owner = owner;
    }
    generateRandomId() {
        return Math.random() * 10000;
    }
    showInformations() {
        console.log(`${this.id} - ${this.owner}`);
    }
}
class AccountCPF extends Account {
    cpf;
    constructor(owner, cpf) {
        super(owner);
        this.cpf = cpf;
    }
    showInformations() {
        super.showInformations();
        console.log(`${this.cpf} - ${this.owner}`);
    }
}
class AccountCNPJ extends Account {
    cnpj;
    constructor(owner, cnpj) {
        super(owner);
        this.cnpj = cnpj;
    }
    showInformations() {
        super.showInformations();
        console.log(`${this.cnpj} - ${this.owner}`);
    }
}
const conta1 = new AccountCPF('Gustavo Sachetto da Cruz', '123.456.789-00');
const conta2 = new AccountCNPJ('Felipe Miguel dos Santos', '00.623.904/0001-73');
conta1.showInformations();
conta2.showInformations();
