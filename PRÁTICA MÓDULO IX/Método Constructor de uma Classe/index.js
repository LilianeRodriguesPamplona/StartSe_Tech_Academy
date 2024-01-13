'use strict';

class Filme {
    constructor(titulo, ano) {
        this.titulo = titulo;
        this.ano = ano;
    }
}

let meuFilme = new Filme('Aprendendo JavaScript', 2022);

console.log(meuFilme);

class Produto {
    constructor() {
        this.tipo = 'Produto X';
    }
}

const prod = new Produto();
console.log(prod.tipo);