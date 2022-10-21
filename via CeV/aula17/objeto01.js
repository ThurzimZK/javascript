let amigo = {nome: 'José',
sexo: 'M',
peso: 85.4,
engordar(p=0){
    if(p>=1){
        console.log('Engordou')
        this.peso += p
    } else if(p==0){
        console.log('O peso continua igual')
    } else {
        console.log('Emagreceu')
        this.peso -= -p
    }
    
}}

amigo.engordar(-10)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)