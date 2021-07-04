const pessoa = {
    nome: 'Frederico',
    idade: 32,
    cidade: 'Conselheiro lafaiete'
}

// Notação de ponto
console.log(pessoa.nome)

// Notação de colchetes
console.log(pessoa['idade'])

// Como desestruturar objetos
const { nome, idade, cidade } = pessoa
console.log(nome)
console.log(idade)
console.log(cidade)