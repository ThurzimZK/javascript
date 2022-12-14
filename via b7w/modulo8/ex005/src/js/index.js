/*let loadPosts = async () =>{

}*/
async function loadPosts() {
    document.getElementById('posts').innerHTML = 'Carregando...'

    let req = await fetch('https://jsonplaceholder.typicode.com/posts')
    let json = await req.json()

    montarBlog(json)

/* //mesma coisa
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(function(resultado){
            return resultado.json()
        })
        .then(function(json){
            montarBlog(json)
        })
        .catch(function(error){
            console.log('deu problema');
        })*/
}

function montarBlog(lista){
    let html = ''
    
    for(let i in lista){
        html += '<h3>'+lista[i].id+' - '+lista[i].title+'</h3>'
        html += lista[i].body+'<br>'
        html += '<hr>'
        document.getElementById('posts').innerHTML = html
    }
}