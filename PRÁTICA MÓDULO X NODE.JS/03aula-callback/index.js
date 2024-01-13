function mensagemGabriel(callback) {
    setTimeout(() => {
        console.log('Bebam água!')
        callback();
    }, 0);
}
    function mensagemLiliane() {
        console.log('Hidratada! Bora pra cima!');
    }

    mensagemGabriel(mensagemLiliane);
    //mensagemLiliane();