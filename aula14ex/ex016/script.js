function verificar(){
    var inicio = document.getElementById('icomeco')
    var fim = document.getElementById('ifim')
    var passo = document.getElementById('ipasso')
    var res = document.querySelector('div#res')
    if (inicio.value.length == 0 || fim.value.length == 0){
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else if(){

    }else if (passo.value.length == 0 || passo.value == 0){
        alert('[ERRO] Passo não aceita 0, o passo foi mudado para 1')
        passo = 1
        for (x in Range(inicio, fim)){
            x += passo.value
        }
        res.innerHTML = `Detectamos ${x}` 
    }
}