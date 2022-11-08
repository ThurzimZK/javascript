//let lista = [45, 4, 9, 16, 25]
let lista = [
    {id: 1, nome: 'Arthur', sobrenome: 'Oliveira'},
    {id:2, nome: 'Fulano', sobrenome: 'Ciclano'},
    {id:3, nome: 'Beutrano', sobrenome: 'Silva'}
]
let lista2 = []

//lista2 = lista.find((item) => item === 16) encontra o item
//lista2 = lista.findIndex((item) => item === 16) encontra a posicao do item
// exemplo pra procurar usuarios pelo nome ou cpf
lista2 = lista.find((item) => item.id === 3)

let res = lista2

console.log(res);