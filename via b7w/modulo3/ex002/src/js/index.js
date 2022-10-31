function clicou() {
    const teste = document.querySelector('#teste')
    console.log(teste.children[0].children);
    const ul = teste.querySelector('ul')
    console.log(ul);

    ul.children[0].innerHTML = '<strong>Item alterado</strong>' // alterando
    ul.innerHTML += '<li>Item adicionado</li>' // adcionando
}

function clicou2() {
    const teste = document.querySelector('#teste2')
    console.log(teste.children[0].children);
    const ul = teste.querySelector('ul')
    console.log(ul);

   ul.outerHTML = '<p><strong>Alterado!</strong></p>'
}