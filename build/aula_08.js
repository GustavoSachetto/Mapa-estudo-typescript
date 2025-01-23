"use strict";
class Security {
    status = true;
    firewall = 'TCP/IP';
    id = '550e8400-e29b-41d4-a716-446655440000';
    showFirewall() {
        console.log(`Firewall ativo: ${this.firewall}`);
    }
}
const security1 = new Security();
security1.status;
