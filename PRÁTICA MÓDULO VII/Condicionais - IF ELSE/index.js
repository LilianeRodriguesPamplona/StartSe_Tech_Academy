// CONDICIONAIS

/*let nota1 = 5;
let nota2 = 5;

function media(n1, n2) {
    return (nota1 + nota2)/2;
}

let resultado = media(nota1, nota2);

//console.log(resultado);


// IF - SE... ELSE - SENÃO
if(resultado >= 0) {
    console.log(`Média ${resultado} > 0.`);
}
console.log('Olá!');


if(resultado >= 6) {
    console.log(`Aprovado com média ${resultado}.`);
} else if(resultado >= 4) {
    console.log(`Em recuperação com média ${resultado}.`);
} else {
    console.log(`Reprovado com média ${resultado}.`);
}
console.log('Logo após os IFS e ELSES');*/


// outro exemplo
let nota1 = 8;
let nota2 = 9;

function media(n1, n2) {
    return (nota1 + nota2)/2;
}

let resultado = media(nota1, nota2);

if(nota1 === 0 || nota2 === 0) {// pelo menos 1 deve ser verdadeira
    console.log(`Desclassificado, pois pelo menos uma das notas é igual a 0.`)
} else {
    console.log(`Classificado, pois ambas as notas são iguais a 0.`)
}


if(nota1 > 7 && nota2 > 7) {// ambas devem ser verdadeiras
    console.log(`Você teve um excelente desempenho.`)
} else {
    console.log(`Você teve um desempenho razoável ou satisfatório.`)
}