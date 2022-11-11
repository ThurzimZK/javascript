let telefone = '54'
console.log( telefone.padEnd(9,'*') );
console.log( telefone.padStart(9, '*') );

//==============================

let cartao = '1234123412341234'
let lastDigits = cartao.slice(-4)

console.log(`Este é o seu cartão? ${lastDigits.padStart(16,'*')}`);