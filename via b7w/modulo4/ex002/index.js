function subirTela(){
    //window.scrollTo(0, 0)
    window.scrollTo({
        top: 0,
        //left: 0,
        behavior: 'smooth'
    })
}

function posicaoScroll(){
    if(window.scrollY === 0){
        document.querySelector('.scrollbutton').style.display = 'none'
    } else{
        document.querySelector('.scrollbutton').style.display = 'block'
    }
}

window.addEventListener('scroll', posicaoScroll)