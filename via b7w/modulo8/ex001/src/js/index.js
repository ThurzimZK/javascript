let pessoa = JSON.parse('{"nome": "arthur", "idade": 18}')  // transforma de string para JSON
console.log(pessoa);

//===============================================================
console.log('==================================');
//===============================================================

let people = JSON.stringify({nome: 'Arthur', idade: 18}) // transforma de JSON para string
console.log(people);

console.log('=====');
let pessoaString = JSON.stringify(pessoa)
console.log(pessoaString);

console.log('=====');
let pessoaObject = JSON.parse(people)
console.log(pessoaObject);

//==================================================

// exemplo de site de busca

let busca = {input: 'ond'}
let buscaString = JSON.stringify(busca)
let resultado = {
    lista: [ 
        'onde estou?',
        'onde fica o brasil?',
        'onde vai passar  o jogo do Palmeiras'
    ]
}
let res = JSON.stringify(resultado)
let resJson = JSON.parse(res)
console.log(resJson);