async function enviar() {
    let arquivo = document.getElementById('arquivo').files[0] //files[0] quando for 1 arquivo apenas

    let body = new FormData()
    body.append('title', 'bla bla bla')
    body.append('arquivo', arquivo)

    let req = await fetch('https://www.sitedothurzim.com.br/upload', {
        method: 'POST',
        body: body,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}