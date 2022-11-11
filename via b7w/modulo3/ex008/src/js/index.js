function apertou(){
    console.log('APERTOU');
}

function segurou(){
    console.log('SEGUROU');
}

function soltou(){
    console.log('SOLTOU');
}
/*
document.addEventListener('keydown', apertou)
document.addEventListener('keypress', segurou)
document.addEventListener('keyup', soltou)*/

const input = document.querySelector('input')
input.addEventListener('keyup', soltou)