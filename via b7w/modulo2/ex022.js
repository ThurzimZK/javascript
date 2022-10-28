let fruits = ['Maçã', 'Uva', 'Laranja', 'Banana']
fruits.sort() // ordem crescente / alfabetica
fruits.reverse() // inverte a lista inteira
console.log(fruits);

let cars = [
    { brand: 'Fiat', year: 2015},
    { brand: 'BMW', year: 2028},
    { brand: 'Ferrari', year: 2010}
]
/*cars.sort((a, b) => {
    if(a.year > b.year){
        return 1
    } else if(a.year < b.year){
        return -1
    } else{
        return 0
    }
})*/
cars.sort((a, b) =>  a.year - b.year)
console.log(cars);

cars.sort((a, b) =>  b.year - a.year)
console.log(cars);