let num = [5, 8, 2 ,9 ,3]
console.log(num.length) // TAMANHO ANTES DE ADICIONAR
num.push(8) // ADICIONA UM NUMERO NA ULTIMA CASA
console.log(num[3]) // UM ITEM ESPECIFICO DA LISTA ANTES DE ORGANIZAR
num.sort() // ORGANIZA EM ORDEM CRESCENTE
console.log(`lista -> ${num}. tamanho -> ${num.length}`) // LENGTH DIZ O TAMANHO
console.log(num[3]) // UM ITEM ESPECIFICO DA LISTA DEPOIS DE ORGANIZAR
let pos = num.indexOf(4)  // ACHA A POSIÇÃO DO VALOR
if(pos == -1){
    console.log('o valor não foi encontrado')
}else{
    console.log(`valor 2 esta na posição ${pos}`)
}
