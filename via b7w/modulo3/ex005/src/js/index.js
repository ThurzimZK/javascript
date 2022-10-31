function clicou() {
    const input = document.querySelector('input')
    const botao = document.querySelector('.botao')

   console.log(input.getAttribute('type'));
   console.log(input.getAttribute('placeholder'));
   
   if(input.hasAttribute('placeholder')){
    console.log('Tem placeholder');
   } else{
    console.log('Não tem placeholder');
   }

   if(input.getAttribute('type') === 'text'){
    input.setAttribute('type', 'password')
    botao.innerHTML = 'Mostrar senha'
   } else{
    input.setAttribute('type', 'text')
    botao.innerHTML = 'Ocultar senha'
   }
   


}