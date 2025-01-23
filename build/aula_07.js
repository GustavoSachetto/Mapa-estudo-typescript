"use strict";
class Computer {
    name;
    ip;
    cpu;
    constructor(name, ip = '127.0.0.0', cpu = '1 core') {
        this.name = name;
        this.ip = ip;
        this.cpu = cpu;
    }
    ping() {
        return `${this.ip} - pong`;
    }
}
const computer1 = new Computer('guga');
const computer2 = new Computer('alfa', '192.168.0.4');
const computer3 = new Computer('delta', '192.168.0.10', '4 core');
computer1.ping();
