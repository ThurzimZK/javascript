function contar(){
    let inicio = document.getElementById('icomeco')
    let fim = document.getElementById('ifim')
    let passo = document.getElementById('ipasso')
    let res = document.querySelector('div#res')
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = 'Impossivel contar!'
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else{
        res.innerHTML = 'Contando: <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0){
            alert('Passo invalido, considerando PASSO 1')
            p = 1
        }
        if(i < f){ // crescente
            for(let c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1F449}`
            }
        } else{ //decrescente
            for(let c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}