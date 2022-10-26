function somar(n1, n2){
    let resultado = n1 + n2
    console.log(`Resultado: ${resultado}`);
}

somar(8, 4)

function nomeCompleto(nome, sobrenome){
    return `${nome} ${sobrenome}`
}

let completo = nomeCompleto('Arthur', 'Oliveira')
console.log(`Nome: ${completo}`); 

// ou pode fazer direto sem armazenar em variavel

console.log(`Nome: ${nomeCompleto('Arthur', 'Oliveira')}`);