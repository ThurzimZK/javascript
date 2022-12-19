class Person {
    
    age = 0

    constructor(name) {
        this.name = name
    }

    sayHi(){
        console.log(`${this.name} diz OI!`);
    }

}

class Student extends Person {

    constructor(name, id){
        super(name)
        this.id = id
    }

    /*sayHi(){
        console.log('diga nada'); // sobrescreve
    }*/

    sayHello(){
        super.sayHi()
    }
}

let p1 = new Student('Arthur', 1)
p1.age = 18

//let p2 = new Student('Pedro', 2)
//console.log(`${p2.name} tem ${p2.age} anos e matrícula #${p2.id}`);

console.log(`${p1.name} tem ${p1.age} anos e matrícula #${p1.id}`);
p1.sayHi()
