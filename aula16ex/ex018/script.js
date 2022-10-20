function adicionar(){
    let numero = document.getElementById('inum')
    var lista = document.getElementById('sellista')

    if (numero.value.length == 0 || numero.value <= 0 || numero.value >= 101 ){
        alert('[ERRO] Verifique os dados e tente novamente!')
        lista.innerHTML = ''
    } else {
        var n = Number(numero.value)
        lista.innerHTML = ''
        
        let item = document.createElement('option')
        item.text += `Valor ${n} adicionado`
        item.value += `tab${n}`
        lista.appendChild(item)
        
    }
}

function finalizar(){
    let resultado = document.getElementById('res')
    resultado.innerHTML = ''
    let lista = document.getElementById('sellista')
    
    let tamanho = lista.length
   
    const array = lista; 
    let soma = 0; 
    for (let i = 0; i < array. length; i++) { soma += array[i]; }
    
    // total de numeros
    resultado.innerHTML += `Ao lado, temos ${lista.length - 1} números cadastrados<br>`
    // maior valor
    resultado.innerHTML += `O maior valor informado foi ${tamanho}.<br>`
    // menor valor
    resultado.innerHTML += `O menor valor informado foi ${tamanho}.<br>`
    // soma de todos os valores
    resultado.innerHTML += `Somando todos os valores, temos ${soma}.<br>`
    // media de todos os valores 
    resultado.innerHTML += `A média dos vaores digitados é ${tamanho}.`
}