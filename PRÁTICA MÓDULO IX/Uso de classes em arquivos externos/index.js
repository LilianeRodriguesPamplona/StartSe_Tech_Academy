import {CupomDesconto} from './cupomdesconto.js';

'use strict';

class Cliente {
    #nome;
    #gastosAcumulados = 0;
    #cupom;
    constructor(nome) {
        this.#nome = nome;
        this.#cupom = new CupomDesconto();
    }
    getBeneficios() {
        this.#cupom.getDesconto(this.#gastosAcumulados);
    }
    setGasto(valor) {
        this.#gastosAcumulados += valor;
    }
}

const clienteNovo = new Cliente('Bill');
clienteNovo.setGasto(2000);
clienteNovo.setGasto(20000);
clienteNovo.getBeneficios();