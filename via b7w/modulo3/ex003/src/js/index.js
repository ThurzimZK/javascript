function clicou() {
    const teste = document.querySelector('#teste')
    const ul = teste.querySelector('ul')

    let newLi = document.createElement('li')
    newLi.innerText = 'Item adicionado'
    ul.appendChild(newLi)
    
    ul.children[0].append(' (alterado)')
}