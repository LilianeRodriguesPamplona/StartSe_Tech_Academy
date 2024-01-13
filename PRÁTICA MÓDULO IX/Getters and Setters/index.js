'use strict';

class Laboratorio {
    #nome;
    #capacidade;
    constructor(nome,capacidade){
        this.#nome = nome;
        this.#capacidade = capacidade;
    }
    getNome(nome){
        return this.#nome;
    }
    getCapacidade(capacidade){
        return this.#capacidade;
    }
    setNome(nome){
        this.#nome = nome;
    }
    setCapacidade(capacidade){
        this.#capacidade = capacidade;
    }
}

const lab = new Laboratorio('Informática',45);
lab.setNome('Meu novo lab');
//console.log(lab.getCapacidade());
lab.setCapacidade(77);
console.log(lab);