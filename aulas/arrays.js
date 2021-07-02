const alunasGama = ['Paula', 'Fernanda', 'Maria', 'Carla']

// Acessar informaçõe em uma array
console.log(alunasGama[3]) //Carla

//Operador spread(...)
const alunasXp = [...alunasGama, 'lanna']
console.log(alunasXp)

// Métodos de iteração

// map
alunasXp.map(aluna => console.log(aluna))

//filter
const numeros = [88, 23, 9, 34, 55, 100, 67]
numerosImpares = numeros.filter(numero => numero % 2 != 0)
console.log(numerosImpares)

numerospares = numeros.filter(numero => numero % 2 == 0)
console.log(numerospares)

// find
const produtos = ['geladeria', 'fogão', 'cama', 'mesa']
const produtoEncontrado = produtos.find(produto => produto === 'cama')
console.log(produtoEncontrado)

// sort
const numerosOrdemCrescente = numeros.sort((a, b) => a - b)
console.log(numerosOrdemCrescente)

const numerosOrdemDecrescente = numeros.sort((a, b) => b - a)
console.log(numerosOrdemDecrescente)

// reduce
const somatorio = numeros.reduce((valorAnterior, valorAtual) => { return valorAnterior + valorAtual }, 100)
console.log(somatorio)