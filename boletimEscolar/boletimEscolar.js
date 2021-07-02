// Boletim escolar
// Crie um algoritmo que receba três notas de um aluno, calcule sua média e mostre as seguintes mensagens de acordo com cada situação:
// -Se a media for igual ou maior que 7 - Aprovado -
// Se a media for maior e igual a cinco e menor que 7 - Recuperação
// - Se a media for menor que 5 - Reprovado|
function media(nota1, nota2, nota3) {
    let resultado = ''
    let media = ((nota1 + nota2 + nota3) / 3)
    if (media >= 7) { resultado = "Aprovado" } else if (media < 7 && media >= 5) { resultado = "recuperação" } else { resultado = "Reprovado" }
    console.log(resultado)
}
media(7, 8, 9)