// TIPO DE DADO DE REFERENCIA
// ARRAY - ARRANJO - VETOR

// ARRAY.FROM

/*const x = Array.from('ABNT');

console.log(x);


// INCLUDES
const cidades = ['Rio','Foz','Limeira'];

console.log(cidades.includes
    ('Feira de Santana')); //'Foz'*/


//ITERAR OU PERCORRER TODOS OS ELEMENTOS DO ARRAY
/*const jogadores = [
    {
        nome: 'Beto',
        posicao: 'Atacante'
    },
    {
        nome: 'Gil',
        posicao: 'Zagueiro'
    },
    {
        nome: 'Milton',
        posicao: 'Volante'
    },
    {
        nome: 'Nuno',
        posicao: 'Volante'
    }
];

function obtemNomeJogador(j) {
    return j.nome;
}

function obtemPosicaoJogador(j) {
    return j.posicao;
}

let nomesJogadores = jogadores.map(obtemNomeJogador);

console.log(nomesJogadores);

let posicoesJogadores = jogadores.map(obtemPosicaoJogador);

console.log(posicoesJogadores);*/


// outro exemplo
/*let notas = [7,9,2,5,4];

function adicionaUmPonto(nota) {
    return nota + 1;
}

let notasAtualizadas = notas.map(adicionaUmPonto);

console.log(notasAtualizadas);*/


// FILTER exemplo
const jogadores = [
    {
        nome: 'Beto',
        posicao: 'Atacante'
    },
    {
        nome: 'Gil',
        posicao: 'Zagueiro'
    },
    {
        nome: 'Milton',
        posicao: 'Volante'
    },
    {
        nome: 'Nuno',
        posicao: 'Volante'
    }
];

function obtemNomeJogador(j) {
    return j.nome;
}

function obtemPosicaoJogador(j) {
    return j.posicao;
}

let nomesJogadores = jogadores.map(obtemNomeJogador);

console.log(nomesJogadores);

let posicoesJogadores = jogadores.map(obtemPosicaoJogador);

console.log(posicoesJogadores);

function obtemVolante(jogador) {
    return jogador.posicao === 'Volante';
}

const volantes = jogadores.filter(obtemVolante);

console.log(volantes);


// FOREACH - PERCORRE PARA CADA UM DOS ELEMENTOS DO VETOR
function exibeNomeJogador(jogador) {
    console.log(jogador.nome);
}

jogadores.forEach(exibeNomeJogador);