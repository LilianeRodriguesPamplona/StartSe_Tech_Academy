'use strict';

class Produto {
    codigo;
    titulo;
    valor;
    constructor(codigo, titulo, valor){
        this.codigo = codigo;
        this.titulo = titulo;
        this.valor = valor;
    }
}

class Disciplina {
    codigo;
    nome;
    nota;
    constructor(codigo, nome, nota){
        this.codigo = codigo;
        this.nome = nome;
        this.nota = nota;
    }
}

const d1 = new Disciplina(123,'Matemática',8);

console.log(d1);

const d2 = d1;

d2.codigo = 444;
d2.nome = 'Álgebra';
d2.nota = 9;

console.log(d1); /*OBS: Neste exemplo foi feito a atribuição de d1 para d2 e com isso foi passado a referência de d1 para d2 e por isso agora d1 e d2 apontam para a mesma região da mémoria onde esses dados se encontram e qualquer alteração que eu fizer em d2 eu altero d1 da mesma forma*/