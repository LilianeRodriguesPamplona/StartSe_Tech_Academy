// TIPO DE ADDAO DE REFERENCIA
//ARRAY - ARRANJO - VETOR

// SPLIT - DIVIDIR


//let produtos = ['camiseta','calça','blusa'];

//console.log(produtos);


// outro exemplo!
/*let cidades = ['Belém Pará','São Paulo','Rio de Janeiro','Florianópolis'];

cidades[1] = 'Caxias';

cidades[2] = 30;

console.log(cidades);//(cidades[3]); //(cidades[cidades.length-2]);*/


// outro exemplo!
/*let jogadores = [
    {
        nome: 'Beto',
        posicao: 'Atacante'
    },
    {
        nome: 'Gil',
        posicao: 'Azagueiro'
    },
];

console.log(jogadores[0]);*/


// SPLIT - DIVIDIR

const email = 'fulano@meuemail.com';

let emailArray = email.split('@');

console.log(emailArray[1]);

const palavrasChave = 'cinema,futebol,televisão,viajem,boliche';
const hobbies = palavrasChave.split(',');

console.log(hobbies[hobbies.length-1]);


//const tiposHobbies = hobbies.toString();
const tiposHobbies = hobbies.join('|');


console.log(tiposHobbies);