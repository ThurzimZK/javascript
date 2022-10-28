let cores = ['preto', 'branco', 'azul', 'vermelho']

cores.push('verde')

for(let n = 0; n < cores.length; n++) {
    console.log(cores[n]);
}
console.log('==============================');
for(let i in cores){
    console.log(cores[i]);
}
console.log('==============================');

for(let cor of cores){
    console.log(cor);
}