const listContainer = document.querySelector('[data-lists]')
const newListForm = document.querySelector('[data-new-list-form]')
const newListInput = document.querySelector('[data-new-list-input]')
    // Captura dos dados do html para serem usados no javascript

let lists = []
    // essa é a array que irá armazenar as listas de tarefas

newListForm.addEventListener('submit', function(e) {
    // Essa função i´ra ouvir o click para fazer algo. O addEventListener espera receber dois parâmetros. Primeiro o submit que irá enviar o form(input+botão). O Segundo parâmetro será uma função callback que é anônima.
    e.preventDefault()
        // Toda vez que o submit é enviado ele reinicia, portanto é necessário impedir esse acontecimento e isso é feito com o preventDefault().
    const listName = newListInput.value
        // É necessário capturar o que for digitado no input. Para isso criamos a const listName que irá armazenar o valor digitado no input.
    if (listName === null || listName === '') return
        // Quando não houver dados no input, ou seja, quando nada for digitado, eu quero que a função não faça nada. É para isso que esse if serve.
    const list = createList(listName)
        // Se o algoritmo não entrar no if ele irá prosseguir e entrar aqui. A const list irá receber cada item - listName. O createList cria o item.
    newListInput.value = null
        // Para limpra o input depois de ter dado o click
    lists.push(list)
        // Para adicionar o item criado a lists- array- é usado o .push(), desse modo o list va para dentro do lists.
    render()
        // imprimir na tela
})



function render() {
    // Esta é a função-render- que irá mostrar os itens na tela
    clearElement(listContainer)
        // função de limpar o primeiro elemento
    lists.forEach(function(list) {
        // O forEach é um laço de repetição que irá percorrer a array lists. Ela parace com o for mas pede apenas um parâmetro, assim, enquanto esse parametro for verdadeiro o laço funcionará. A função forEach pede uma função de retorno-callback- que é anônima. Esta função irá retornar cada item da lists, ou seja, cada list. 
        const item = document.createElement('li')
            // Aqui iremos criar um elemento no html para que possamos enviar os dados js pra lá. Pra isso criamos a const item que irá armazenar uma lista.
        item.classList.add('item')
            // Dentro do item, mais especificamente dentro da classe li criada iremos adicionar um item.
        item.innerText = list.name
            // O item criado receberá o texto que está no list
        listContainer.appendChild(item)
            // para enfiar o item criado dentro do container que criamos no html para receber as tarefas é utilizado o appendChild.
    })
}

function createList(name) {
    return { id: Date.now().toString(), name: name }
}
// Criar a lista, porém eu verifiquei que funciona sem o id. Pra quê serve o id aqui nessa lista? 

function clearElement(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild)
    }
    // Como estava acontecendo a repetição do primeiro elemento quando renderizamos, foi necessário criar uma função para limpar o primeiro elemento.
}