let carros = ['BMW', 'Ferrari', 'Mercedes']
console.log(`1. ${carros[1]}`);

carros[1] = 'Audi'
console.log(`2. Lista com Audi: ${carros}`);

carros.push('Volvo')
console.log(`3. Lista com Volvo: ${carros}`);

console.log(`4. Total de itens: ${carros.length}`);