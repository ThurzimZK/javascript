let numeros = [1,2,3,4]
let outrosNumeros = [...numeros,5,6,7,8]

//console.log(outrosNumeros);

//========================================

let info = {
    nome: 'Arthur',
    sobrenome: 'Oliveira',
    idade: 18
}
let novaInfo = {
    ...info,
    cidade: 'Allianz Parque',
    estado: 'São Paulo',
    pais: 'Brasil'
}

//console.log(info);
//console.log(novaInfo);

//==================================

function adcInfo(info){
    let novaInfo = {
        ...info,
        status: 0,
        token: 'fsdfa22',
        data_cadastro: '10/11/2022'
    }
    return novaInfo
}

console.log(adcInfo({nome:'Arthur', sobrenome:'Oliveira'}))