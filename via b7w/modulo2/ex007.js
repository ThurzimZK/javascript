/*
function somar(x, y){
   return x + y
}
*/

const somar = (x, y) =>{
    return x + y
}
console.log(somar(10, 5));

// ou ============================

const somar2 = (x, y) => x + y

console.log(somar2(20, 10));

//=========================================

function sobrenome(sobre){
    return 'arthur ' + sobre
}
console.log(sobrenome('oliveira'));

// ou ==================================

const sobrenome2 = sobre => 'arthur ' + sobre
console.log(sobrenome2('oliveira'));