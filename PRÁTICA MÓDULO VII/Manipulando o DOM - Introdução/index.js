const lista = document.querySelector('#lista');

const elementoLI = document.createElement('li');
elementoLI.textContent = 'Um novo item na lista';

//lista.appendChild(elementoLI);

//const filhosDaLista = lista.querySelectorAll('li');

/*for(filho of filhosDaLista) {
    //lista.removeChild(filho);
}*/

//lista.className = 'novoponteiro';

//lista.setAttribute('class','novoponteiro');

//lista.removeAttribute('class');

//lista.style.color = 'red';

const botao = document.querySelector('button');

botao.addEventListener('click',function() {
    lista.remove();
}
);

//lista.remove();

console.log(lista);