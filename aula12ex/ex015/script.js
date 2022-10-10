function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('iano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else{
        var fsexo = document.getElementsByName('radsexo')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade: ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsexo[0].checked){
            genero = 'Homem'
            if(idade >=0 && idade < 10){
                img.setAttribute('src', 'assets/homem-bebe.png')
            } else if(idade < 25){
                img.setAttribute('src', 'assets/homem-jovem.png')
            } else if(idade < 50){
                img.setAttribute('src', 'assets/homem-adulto.png')
            } else{
                img.setAttribute('src', 'assets/homem-idoso.png')
            }
        } else if(fsexo[1].checked){
            genero = 'Mulher'
            if(idade >=0 && idade < 10){
                img.setAttribute('src', 'assets/mulher-bebe.png')
            } else if(idade < 25){
                img.setAttribute('src', 'assets/mulher-jovem.png')
            } else if(idade < 50){
                img.setAttribute('src', 'assets/mulher-adulto.png')
            } else{
                img.setAttribute('src', 'assets/mulher-idosa.png')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}