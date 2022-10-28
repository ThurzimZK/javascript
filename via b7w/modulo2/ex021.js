let fruits = ['Maçã', 'Uva', 'Laranja', 'Banana']

fruits.shift() // remove o primeiro
fruits.pop() // remove o ultimo
fruits.push('Kiwi') // adc na ultima posição
fruits[1] = 'Pêra' // troca o valor na posicao escolhida
fruits[fruits.length - 1] = 'Jaca' // troca o valor da ultima posiçao


console.log(`Quantidade de itens: ${fruits.length}`); // tamanho da lista
console.log(fruits.join(', ')) // muda o formato da visualizaçao
