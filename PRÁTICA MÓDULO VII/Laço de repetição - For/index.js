// LAÇOS DE REPETIÇÃO - LOOPS
// FOR

/*const listaNumeros = [23,45,76,12,89];

for(let i = 0 ; i < listaNumeros.length; i++) {
    console.log(listaNumeros[i]);
}

//console.log(listaNumeros[0]);
//console.log(listaNumeros[1]);
//console.log(listaNumeros[2]);
//console.log(listaNumeros[3]);
//console.log(listaNumeros[4]);*/


const operacoes = ['soma','subtração','multiplicação','divisão'];

function montaTextoDaLista() {
    let textoDaLista = '';
    for(let i=0; i < operacoes.length; i++) {
        textoDaLista += '<li>' + operacoes[i] + '</li>';
    }
    console.log(textoDaLista);
    return textoDaLista;
}

document.querySelector('#listaOperacoes').innerHTML = montaTextoDaLista();

//<li>soma</li><li>subtração</li><li>multiplicação</li><li>divisão</li>