const livros = require('./dataBase')

// pegar o input
const readline = require('readline-sync')
const entradaInicial = readline.question('Deseja buscar um livro?S/N')

// Se a resposta for S, mostra as categorias disponíveis e pqegunta qual categoria ele escolhe.
// Se N, mostra todos os livros em ordem crescente de quantidade de páginas.


// Criamos um if que compara o retorno do usuário(já transformando em maiuscula) com S. Se for verdade imprime na tela as categorias.
if (entradaInicial.toUpperCase() === 'S') {
    console.log('Essas são as categorias disponíveis:')
    console.log('Produtividade', '/Historia brasileira', '/Americas', '/Tecnologia', '/Estilo de vida')
        // O readline.question mostra na tela uma pergunta, e a respostada escrita pelo usuário será armazenada na const entradaCategoria
    const entradaCategoria = readline.question('Qual categoria você escolhe?')
        // será feito um filtro no objeto livros comparando a categoria que o usuário digitou 
    const retorno = livros.filter(livro => livro.categoria === entradaCategoria)

    console.table(retorno)
        // Nessa parte criamos um retorno caso a resposta não seja S. Caso isso aconteça todos os livros serão imprimidos na tela em ordem crescente de páginas.
} else {
    const livrosOrdenados = livros.sort((a, b) => a.paginas - b.paginas)
    console.log('Esses são todos os livros disponíveis')
    console.table(livrosOrdenados)
}