let numero = document.getElementById('inum')
let lista = document.getElementById('sellista')
let res = document.getElementById('res')
let valores = []

function isNum(n){
    if(Number(n) >= 1 && Number(n) <=100){
        return true
    } else{
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else{
        return false
    }
}

function adicionar(){
   if(isNum(numero.value) && !inLista(numero.value, valores)){
        valores.push(Number(numero.value))
        let item = document.createElement('option')
        item.text = `Valor ${numero.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
   } else{
        alert('Valor inválido ou já encontrado na lista.')
   }
   numero.value = ''
   numero.focus()
}

function finalizar(){
  if(valores.length == 0){
    alert('Adicione valores antes de finalizar')
  } else{
    let tot = valores.length
    valores.sort()
    let soma = 0
    let maior = valores[0]
    let menor = valores[0]
    for(let pos in valores){
        soma += valores[pos]
        if(valores[pos] > maior){
            maior = valores[pos]
        }
        if(valores[pos] < menor){
            menor = valores[pos]
        }
    }
    media = soma / tot
    res.innerHTML = ''
    res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados. </p>`
    res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
    res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
    res.innerHTML += `<p>A soma dos valores informados é ${soma}</p>`
    res.innerHTML += `<p>A média dos valores informados é ${media}</p>`
  }
}