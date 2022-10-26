function calcularImovel(m, q){
    let m2 = 3000
    if(q == 1){
        return m * m2
    } else if(q == 2){
        return m * (m2 * 1.2)
    } else if(q == 3){
        return m * (m2 * 1.5)
    } else{
        return 1
    }
}

let metragem = 1
let quartos = 1
if (calcularImovel(metragem, quartos) == 1){
    console.log('Não temos imóveis com essa quantidade de quartos');
}else{
    console.log(`A casa custa R$${calcularImovel(metragem, quartos)}`);
}
