let elementos = document.getElementsByTagName('h1')
let div = document.querySelector('#teste')
let botao = document.getElementsByClassName('botao')

function clicou(){
    console.log('Clicou no botão');
}
/*

let btn2 = document.querySelector('.btn2')
btn2.addEventListener('click', clicou)

document.querySelector('.btn2').addEventListener('click', funcion(){
    clicou()
})

document.querySelector('.btn2').addEventListener('click', () => {
    clicou()
})
*/

document.querySelector('.btn2').addEventListener('click', clicou)
