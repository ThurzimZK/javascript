function calcular(){
    let numero = document.getElementById('inum')
    let tab = document.getElementById('seltab')

    if (numero.value.length == 0){
        alert('[ERRO] Verifique os dados e tente novamente!')
        tab.innerHTML = ''
    } else {
        let n = Number(numero.value)
        tab.innerHTML = ''
        for (let c = 1; c <= 10; c++){
            let item = document.createElement('option')
            item.text = `${c} X ${n} = ${c*n}`
            item.value = `tab${c}`
            tab.appendChild(item)
        } 
    }
}