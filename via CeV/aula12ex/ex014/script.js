function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 5){
        //boa madrugada
        img.src = 'assets/madrugada.png'
        document.body.style.background = '#515154'
    } else if(hora >= 5 && hora < 12){
        //bom dia
        img.src = 'assets/manha.png'
        document.body.style.background = '#e2cd9f'
    } else if(hora >= 12 && hora < 19){
        //boa tarde
        img.src = 'assets/tarde.png'
    } else{
        //boa noite
        img.src = 'assets/noite.png'
        document.body.style.background = '#074699'
    }
}
