function pegarTemperatura() {
    return new Promise(function(resolve, reject) {
        console.log('pegando temperatura...');

        setTimeout(function(){
            resolve('40° na sombra')
        }, 2000);
    })
}

// usando a promise
console.log('codigo antes');

let temp = pegarTemperatura()

console.log('codigo durante');
temp
    .then(function(resultado){ // deu certo faz
    console.log('Temperatura: ' + resultado);
    })
    .catch(function(error){ // deu errado faz
        console.log('Deu erro!');
    })
    
console.log('codigo depois');    