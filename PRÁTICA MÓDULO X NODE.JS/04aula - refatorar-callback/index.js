function mensagemGabriel() {
    const promiseMensagemGabriel = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Bebam água!');
            resolve();
        }, 0);
    });
    return promiseMensagemGabriel;
}
    function mensagemLiliane() {
        console.log('Hidratada! Bora pra cima!');
    }

    mensagemGabriel().then(mensagemLiliane);