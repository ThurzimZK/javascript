let info = [ 'Arthur Oliveira', 'Arthur', 'Oliveira', '@arthurzim_04' ]
let [nome2, sobrenome2, idade=18] = ['thuzim', 'zk']
//idade esta com valor padrao, caso nao seja informado
let [ nomeCompleto, , , instagram ] = info

console.log(nomeCompleto,',', instagram)
console.log(nome2, sobrenome2, idade)

//======================================

function criar(){
    return [1,2,3]
}
let [a,b,c] = criar()
console.log(a,b,c);
