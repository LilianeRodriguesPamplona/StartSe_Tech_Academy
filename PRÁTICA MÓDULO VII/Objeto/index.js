// TIPO DE DADO DE REFERENCIA

// OBJETO - OBJECT

/*let titulo = 'Introdução ao JacaScript';
const numPag = 500;

const livro = { titulo : 'Introdução ao JavaScript', numPag : 500 };

livro.numPag = 800;

console.log(livro.numPag);

livro.editora = 'Super Press';

console.log(livro);*/


const pessoa = {
    primeiroNome : 'Ana',
    ultimoNome : 'Silva',
    endereco : {
        rua : 'Paraná',
        num : 50
    },
    nomeCompleto : function() {
        return this.primeiroNome + '' + this.ultimoNome;
    }
};

pessoa.celular = '919991234';

pessoa.enderecoCompleto = function() {
    return `Rua: ${this.endereco.rua}, ${this.endereco.num}.`;
}

function exibeDadosPessoa(p) {
   //Posso utilizar também console.log no lugar de alert!
    alert(`\n
    Nome: ${p.nomeCompleto()}\n
    Endereço: ${p.enderecoCompleto()}\n
    Celular: ${p.celular}
    `);
}

exibeDadosPessoa(pessoa);
//console.log(pessoa.enderecoCompleto());