/*class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}

let p1 = new Person('joao', 18)
let p2 = new Person('Maria', 30)
let p3 = new Person('Josemar', 50)*/

// exemplo com variaveis ja definidas
class Person {

    _age = 10
    steps = 0

    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }

    takeAStep() {
        this.steps++
    }

   /* setAge(newAge) {
        if(typeof newAge == 'number'){
            this.age = newAge
        } else{
            console.log('Idade não é válida!');
        }
    }*/
    get fullName(){
        return `${this.firstName} ${this.lastName}` 
    } 

    get age() {
        return this._age
    }
}

let p1 = new Person('joao', 'Silva', 18)
let p2 = new Person('Maria','Rosa', 30)
let p3 = new Person('Josemar','Rocha', 50)

/*p1.setAge(20)*/
console.log(`${p1.fullName} tem ${p1.age} anos`);

p1.takeAStep()
p1.takeAStep()
console.log(`Passos de ${p1.fullName}: ${p1.steps}`);
console.log(`Passos de ${p2.fullName}: ${p2.steps}`);