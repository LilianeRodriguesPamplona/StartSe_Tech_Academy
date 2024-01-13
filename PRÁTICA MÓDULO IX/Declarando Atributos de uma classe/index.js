'use strict';

class Financiamento {
    valorFinanciamento;
    taxaJuros;
    numero;
    constructor(valorFinanciamento,taxaJuros,numero) {
        this.valorFinanciamento = valorFinanciamento;
        this.taxaJuros = taxaJuros;
        this.numero = numero;
    }
}

const fin = new Financiamento(10000,1,3345);
const fin2 = new Financiamento(30000,2,4789);
console.log(fin);
console.log(fin2);