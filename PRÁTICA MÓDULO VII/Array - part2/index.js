// TIPOS DE DADOS DE REFERENCIA
// ARRAY - ARRANJO - VETOR

/*const cidades = [];
// PUSH - ADICIONAR ELEMENTO NO FINAL DO ARRAY OU VETOR
cidades.push('Rio','São Paulo');

console.log(cidades);

cidades.push('Cuiabá','Brasília');

console.log(cidades);


// UNSHIFT - ADICIONAR NO COMEÇO
cidades.unshift('Campinas','Araras');

console.log(cidades);


// POP - REMOVER O ÚLTIMO ELEMENTO DE UM VETOR - RETORNA ELEMENTO REMOVIDO
let cidadeRemovida = cidades.pop();

console.log(cidadeRemovida);

console.log(cidades);


// SHIFT - REMOVE O PRIMEIRO ELEMENTO -- RETORNA O ELEMENTO REMOVIDO
cidadeRemovida = cidades.shift();

console.log(cidadeRemovida);

console.log(cidades);


// SPLICE - REMOVE 1 OU MAIS ITENS - UTILIZANDO UM ÍNDICE
const indice = cidades.indexOf('Rio');

console.log(indice);

cidades.splice(indice);

console.log(cidades);*/


//  CONCAT - CONCATENAÇÃO DE ARRAYS
const cidadesInterior = ['Araraquara','Araras','Limeira'];

console.log(cidadesInterior);

const regioesMetropolitanas = ['Campinas','São Paulo'];

console.log(regioesMetropolitanas);

const cidadesInteriorEMetropolitana = cidadesInterior.concat(regioesMetropolitanas);

console.log(cidadesInteriorEMetropolitana);

console.log(cidadesInteriorEMetropolitana.indexOf('Pinhais'));