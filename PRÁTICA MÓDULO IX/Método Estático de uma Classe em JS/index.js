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
    static calculaVolume(largura,altura,profundidade){
        return largura * altura * profundidade;
    }
    parcelaValor(parcelas){
        return this.valor / parcelas;
    }
}

//const prod = new Produto('Meu produto',10,3,2,80);
//console.log(Produto.calculaVolume(1,2,3));




class Musica {
    static formato = 'mp3';
    #titulo;
    #duracao;
    constructor(titulo,duracao){
        this.#titulo = titulo;
        this.#duracao = duracao;
    }
    static converterSegundosEmMinutos(duracao) {
        const min = Math.floor(duracao / 60);
        let seg = duracao % 60;
        if (seg < 10 && seg > 0) {
            seg = `0${duracao % 60}`;
        } else if (seg < 10) {
            seg = '00';
        }
        return `${min}:${seg}`;
    }
    getDuracao() {
        console.log(Produto.calculaVolume(34,65,9));
        return this.#duracao;
    }
}

const musica1 = new Musica('Minha musica',190);
//console.log(musica1.converterSegundosEmMinutos(musica1.getDuracao()));
//console.log(Musica.converterSegundosEmMinutos(musica1.getDuracao()));
console.log(musica1.getDuracao());