// LAÇOS DE REPETIÇÃO - LOOPS
// For of - While - Do While

/*const operacoes = ['soma','subtração','multiplicação','divisão'];

function montaTextoDaLista() {
    let textoDaLista = '';
    for(let operacao of operacoes) {
        textoDaLista += '<li>' + operacao + '</li>';
    }
    console.log(textoDaLista);
    return textoDaLista;
}

document.querySelector('#listaOperacoes').innerHTML = montaTextoDaLista();

//<li>soma</li><li>subtração</li><li>multiplicação</li><li>divisão</li>


// outro exemplo utilizando apenas o for
let jogadores = [
    {
        nome: 'Beto',
        posicao: 'Atacante'
    },
    {
        nome: 'Gil',
        posicao: 'Volante'
    },
    {
        nome: 'Milton',
        posicao: 'Volante'
    }
];

for(let jogador of jogadores) {
    console.log(jogador.nome);
}*/



// WHILE - ENQUANTO
const operacoes = ['soma','subtração','multiplicação','divisão'];

let i=0;
while(i < operacoes.length) {
    console.log(operacoes[i]);
    i++;
}

let j=0;
do {
    console.log(`${j} - ${operacoes[j]}`);
    j++;
} while (j < operacoes.length);