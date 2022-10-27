let nome = 'Arthur'
let nomes = ['Arthur', 'Jose']
let personagem = {
    nome: 'Arthur',
    idade: 18,
    pais: 'Brasil',
    olhos: ['preto', 'azul'],
    atributos: {
        poder: 40,
        estamina: 20,
        alcance: 3
    }, 
}
personagem.nome = 'Thurzim'
personagem.atributos.poder += 15
personagem.olhos.push('verde')


console.log(`O ${personagem.nome} tem ${personagem.idade} anos.`);
console.log(`O ${personagem.nome} tem ${personagem.atributos.poder} pontos de poder.`);

console.log(`${personagem.olhos}`);
