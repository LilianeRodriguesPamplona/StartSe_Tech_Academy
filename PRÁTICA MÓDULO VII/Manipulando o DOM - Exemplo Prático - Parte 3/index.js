const listaTarefas = document.querySelector('#listaTarefas');
const caixaTexto = document.querySelector('#caixaDeTexto');
const botaoAdicionar = document.querySelector('#botaoAdicionar');
const listaSuspensa = document.querySelector('#listaSuspensa');

//LISTENER - SEMPRE QUE O BOTAO ADICIONAR FOR CLICADO
//ADICIONA UM ITEM OU UMA TAREFA NA LISTA
botaoAdicionar.addEventListener('click', function(){
    const textoDaTarefa = caixaTexto.value;
    caixaTexto.value = '';
    listaTarefas.appendChild(adicionaTarefa(textoDaTarefa));
    exibeOcultaListaSuspensa();
    //console.log(listaTarefas);
    caixaTexto.focus();
});

function adicionaTarefa(textoDaTarefa) {
    const elementoLI = document.createElement('li');
    const elementoSPAN = document.createElement('span');

    elementoSPAN.setAttribute('id','tarefa');
    elementoSPAN.textContent = textoDaTarefa;
    
    elementoLI.className = 'naoRealizada';
    elementoLI.appendChild(elementoSPAN);
    elementoLI.appendChild(adicionaBotaoRemover());

    //LISTENER - SEMPRE QUE UM ITEM DA LISTA FOR CLICADO PELO MOUSE
    //ALTERA O MARCADOR, A COR DA FONTE E RISCA O TEXTO
    elementoSPAN.addEventListener('click', function() {
        if(this.id === 'tarefa') {
            if (this.parentNode.className === 'naoRealizada') {
                this.parentNode.className = 'realizada'
            } else {
                this.parentNode.className = 'naoRealizada'
            }
        }
    });

    //console.log(elementoLI);

    return elementoLI;
}

function adicionaBotaoRemover() {
    const botaoRemover = document.createElement('button');
    botaoRemover.textContent = '✘';
    botaoRemover.className = 'remover';
    //LISTENER - SEMPRE QUE O BOTAO REMOVER FOR CLICADO PELO MOUSE
    //REMOVE UM ITEM DA LISTA
    botaoRemover.addEventListener('click', function() {
        listaTarefas.removeChild(this.parentNode);
        exibeOcultaListaSuspensa();
    });

    return botaoRemover;
}

function exibeOcultaListaSuspensa() {
    const elementoSPAN = document.querySelector('#tarefa');
    if (elementoSPAN === null) {
        listaSuspensa.setAttribute('hidden','hidden');
    } else {
        listaSuspensa.removeAttribute('hidden');
    }
}

listaSuspensa.addEventListener('change', function() {
    if (listaSuspensa.selectedIndex === 1 || listaSuspensa.selectedIndex === 2) {
        const vetorTarefas = listaTarefas.querySelectorAll('#tarefa');
        for (tarefa of vetorTarefas) {
            tarefa.dispatchEvent(new Event('click'));
        }
    } else if (listaSuspensa.selectedIndex === 3) {
        const vetorBotoes = listaTarefas.querySelectorAll('.remover');
        for (botao of vetorBotoes) {
            botao.dispatchEvent(new Event('click'));
        }
    }
});