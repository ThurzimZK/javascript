let fruits = ['Banana','Laranja', 'Maçã', 'Pêra', 'Uva']

let bigFruits = fruits.filter((item) =>{ // filtrando 
    return item.length > 4
})
console.log(bigFruits);

let ok = fruits.every((value) => { // every = todos
    return value.length > 3
})

if(ok){
    console.log('Todos são maior que 3');
} else {
    console.log('Não são todos maior que 3');
}

let algum = fruits.some((value) => { // some = algum 
    return value.length > 3
})
if(algum){
    console.log('Algum é maior que 3');
} else {
    console.log('Nenhum é maior que 3');
}

if(fruits.includes('Uva')){
    console.log('Tem Uva!');
} else{ 
    console.log('Não tem Uva!');
}