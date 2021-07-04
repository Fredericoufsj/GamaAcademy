const filmes = [{
    id: 002,
    titulo: 'Homem aranha',
    descricao: 'Acao',
    duracao: 155
}, {
    id: 002,
    titulo: 'Titanic',
    descricao: 'Drama',
    duracao: 180
}, {
    id: 003,
    titulo: 'Corra',
    descricao: 'Suspense',
    duracao: 100
}]
const [{ id, titulo, descricao, duracao }] = filmes
console.log(id)

filmes.map(filme => console.log(filme.titulo))