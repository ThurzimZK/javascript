let personagem = {
    nome: 'Arthur',
    carros: [
        {modelo: 'Nissan GTR', cor: 'Preto'},
        {modelo: 'Toyota Supra', cor: 'Roxo'}
    ]
}


console.log(personagem.carros[0].modelo)
console.log(personagem.carros[1].modelo + ' - ' + personagem.carros[1].cor)