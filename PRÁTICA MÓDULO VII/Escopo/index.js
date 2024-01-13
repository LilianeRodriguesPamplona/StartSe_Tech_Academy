// ESCOPO DE VARIAVEIS E CONSTANTES

/*let x = 10; //variavel global

console.log(x);

function soma(a, b) {
    console.log(x);
    let z = a + b; //z é uma variavel local
    return z;
}

let a = 50;
console.log(a);
//console.log(z);
console.log(soma(4,23));*/


/*const gravidade = 9.8;

console.log(gravidade);

function calculaVelocQuedaLivre(tempo) {
    const resultado = gravidade * tempo;
    return resultado;
}

console.log(calculaVelocQuedaLivre(30));

const resultado = 0;

console.log(resultado);*/


function calculaKmMilha() {
    let km = document.querySelector('#valorKm').value;
    document.querySelector('#resultado').textContent = km * 1.609;
}
