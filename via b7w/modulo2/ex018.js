let cores = [
    { nome: 'preto', qt: 10},
    { nome: 'azul', qt: 5},
    { nome: 'vermelho', qt: 15}
]

for(let i in cores){
    cores[i].nome = cores[i].nome.toUpperCase()
}

for(let cor of cores){
    console.log(`Nome: ${cor.nome} - ${cor.qt}`);
}