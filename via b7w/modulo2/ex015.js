let pessoa = {
    nome: 'Arthur',
    sobrenome: 'Oliveira',
    idade: 18,
    nomeCompleto: function(){
        return `${this.nome} ${this.sobrenome}`
    },
    // ou 
    nomeInteiro: () =>{
        return `${pessoa.nome} ${pessoa.sobrenome}`
    }
}

console.log(`${pessoa.nome} ${pessoa.sobrenome}`);
console.log(pessoa.nomeCompleto());
console.log(pessoa.nomeInteiro());