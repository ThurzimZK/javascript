function validar(u, s){
    if(u === 'arthur' && s === '123'){
        return true
    } else{
        return false
    }
}

let usuario = 'arthur'
let senha = '123'
if (validar(usuario, senha)){
    console.log('Acesso concedido.');
}else{
    console.log('Acesso NEGADO!');
}