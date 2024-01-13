// TIPO DE DADO PRIMITIVO
// STRING - CADEIA DE CARACTERES

/*let nome = 'Alex';

let idade = 20;

let conc = nome + ', '+ idade + ' anos.';

conc = `${nome}, ${idade} anos.`; //melhor forma de concatenação!

//console.log(conc);

console.log(nome.length);
console.log(nome.toUpperCase());
console.log(nome.toLowerCase());

let localizacao = 'Curitiba - PR';
console.log(localizacao.length);
//let estado = localizacao.substring(11);
let estado = localizacao.substring(localizacao.length-2);

console.log(estado);*/


// exemplo exercicio
/*let x = 3.5; //a concatenação de numero com string o resultado continua sendo uma string!
let y = '4.2';

let resultado = x + y;

console.log(resultado);*/


//exemplo
/*const frase = 'Minha cor favorita é: azul';
const indice = frase.indexOf(':');

const cor = frase.substring(indice+2);

console.log(cor);*/


//metodo replace

//let texto = 'basquete';
//texto = texto.replace('bas','ra');

//console.log(texto);

let frase = 'A festa ocorrerá no primeiro dia do primeiro mês';

let novaFrase = frase.replaceAll('primeiro','segundo');

console.log(novaFrase);