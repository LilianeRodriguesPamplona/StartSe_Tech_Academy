'use strict';

class Produto {
    tipo;
    constructor(tipo){
        this.tipo = tipo;
    }
    getDados(){ //aqui poderia utilizar o método static
        return `
        Tipo: ${this.tipo}`;
    }
}

class Livro extends Produto {
    titulo;
    numPag;
    constructor(tipo,titulo,numPag){
        super('Livro');
        this.titulo = titulo;
        this.numPag = numPag;
        console.log(this.getDados());
        //console.log(super.getDados()); //nesse exemplo posso utilizar dessa forma que é o mesma coisa de (this.getDados)
        //console.log(Produto.getDados()); //utilizando um exemplo do método static
    }
    exibeDadosLivro() {
        console.log(`${this.getDados()}. ${this.titulo} - ${this.numPag} páginas`); //no lugar de 'this' poderia utilizar o 'super' que daria o mesmo resulatado!
    }
}

const prod = new Produto('Prod...');
//console.log(prod.getDados);

const liv = new Livro('Produto','Meu Livro',133);
//console.log(liv);
liv.exibeDadosLivro();