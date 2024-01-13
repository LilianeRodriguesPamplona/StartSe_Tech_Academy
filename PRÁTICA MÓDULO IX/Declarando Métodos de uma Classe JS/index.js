'use strict';

class Produto {
    descricao;
    largura;
    altura;
    profundidade;
    valor;
    constructor(descricao, largura, altura, profundidade, valor){
        this.descricao = descricao;
        this.largura = largura;
        this.altura = altura;
        this.profundidade = profundidade;
        this.valor = valor;
    }
    volumeProduto(){
        return this.largura * this.altura * this.profundidade;
    }
    parcelaValor(parcelas){
        return this.valor / parcelas;
    }
}

/*class Livro {
    volumeLivro(){

    }
}

const liv = new Livro();
liv.volumeLivro();

console.log(liv);*/ //Exemplo para fins didáticos

const prod = new Produto('Meu Produto',10,3,2,80);

prod.volumeProduto();

console.log(prod.parcelaValor(2));

/*function volumeProduto(){
    
}*/ //Exemplo para fins didáticos