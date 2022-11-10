let pessoa = {
    nome: 'Arthur',
    sobrenome: 'Oliveira',
    idade: 18,
    social:{
        facebook: 'arthur oliveira',
        instagram:{
            url: '@arthurzim_04',
            seguidores: 300
        }
    },
    nomeCompleto: function() {
        return `${this.nome} ${this.sobrenome}`
    }
}
//console.log(pessoa.nomeCompleto());
//console.log(pessoa.social.instagram);

//let idade = pessoa.idade
//let nome = pessoa.nome

let {nome, idade = 0, social:{facebook}} = pessoa
let {instagram:{ url: insta}} = pessoa.social

console.log(idade,',', nome,',', insta,',', facebook);

// ============================================================

function pegarNomeCompleto({nome = 'Zé', sobrenome = 'Pequeno', social:{instagram:{url:instagram}}}){
    return nome+' '+sobrenome+` (Siga em ${instagram})`
}
console.log(pegarNomeCompleto(pessoa));