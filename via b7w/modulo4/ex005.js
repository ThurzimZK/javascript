class Person {
    
    static hands = 2
    age = 0

    constructor(name) {
        this.name = name
    }

    static sayHi(){
        console.log(`oi`);
    }

}

let p1 = new Person('Arthur')
Person.hands = 3

console.log(`Nome: ${p1.name} tem ${Person.hands} mãos`);
Person.sayHi()
//p1.sayHi()