function maiorDeIdade(idade){
    if(idade >= 18){
        return true
    } else {
        return false
    }
}

if(maiorDeIdade(34) == true){
    console.log(`Você é MAIOR de idade`);
} else{
    console.log(`Você é MENOR de idade`);
}