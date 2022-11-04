let nome = 'thurzim da loud louco'

//let resultado = nome.slice(0, 12) // de uma posicao a outra
let resultado = nome.slice(-12, -5) // de uma posicao a outra
let resultado2 = nome.substring(0, 12) // de uma posicao a outra / nao funciona negativo
let resultado3 = nome.substr(9, 5) // 1° posição e o 2° é quantas casas a partir dela

console.log(resultado);
console.log(resultado2);
console.log(resultado3);