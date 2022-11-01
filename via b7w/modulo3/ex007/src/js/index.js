function clicou() {
    const botao = document.querySelector('button')
    
   /* if(botao.classList.contains('azul')){
        botao.classList.remove('azul')
        botao.classList.add('verde')
        ou replace('azul', 'verde')
    } else{
        botao.classList.remove('verde')
        botao.classList.add('azul')
        ou replace('verde', 'azul')
    }*/
       
    botao.classList.toggle('azul')

}