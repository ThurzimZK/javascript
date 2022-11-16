// elementos (criado fora da funçao, para o elemento funcionar no evento)
const ul = document.querySelector('ul')
const input = document.querySelector('input')

function handleKeyUp(e) {
    if (e.key === 'Enter') {
        // adc elemento li na lista
        const newLi = document.createElement('li')
        newLi.innerHTML = input.value
        ul.appendChild(newLi)
        // limpa o campo de texto
        input.value = ''
    }
}
// evento 
input.addEventListener('keyup', handleKeyUp)