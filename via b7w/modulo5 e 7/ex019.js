/*function adicionar(...numeros){

    console.log(numeros);
}

adicionar(5,8,1,4,10,52,234,26,24,46)*/

//=======================================


function adicionar2(nomes, ...novosNomes){
    let novoConjunto = [
        ...nomes,
        ...novosNomes
    ]
    return novoConjunto
}

let nomes = ['Arthur', 'Scarpa']
let outros = adicionar2(nomes, 'Endrick', 'Veiga', 'Dudu')

console.log(outros);

