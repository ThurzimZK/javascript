let timer
let res = document.querySelector('.demo')
function rodar(){
    timer = setTimeout(function() {
        res.innerHTML = '<p>Rodou!</p>'
    }, 2000)
}

function parar(){
    clearTimeout(timer)
}

function zerar(){
    res.innerHTML = ''
}