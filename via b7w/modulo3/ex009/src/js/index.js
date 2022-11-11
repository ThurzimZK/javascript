function soltou(evento){
    console.log('Tecla ->' + evento.code);
    //console.log(evento.key); simples
    console.log('SHIFT?' + evento.shiftKey);
    console.log('CTRL?' + evento.ctrlKey);
    console.log('ALT?' + evento.altKey);
    console.log('------');
}

const input = document.querySelector('input')
input.addEventListener('keyup', soltou)