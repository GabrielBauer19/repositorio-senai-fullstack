let nomeAluno = 'maria'
let nota1 = 5
let nota2 = 9
let atividadesEntregues = true
let frequencia = 79
let mediaNota = (nota1 + nota2) / 2
let estaBloqueado = false

console.log('Aluno:', nomeAluno)
console.log('Media:', mediaNota)

if (frequencia >= 75)
    console.log('Frequencia:', frequencia + '%')
else
    console.log('Frequencia:', frequencia + '%')

console.log('Atividades entregues:', atividadesEntregues)

if (estaBloqueado) {
    console.log('Situacao final: Bloqueado')
} else if (mediaNota >= 9 && frequencia >= 60) {
    console.log('Situacao final: Aprovado por destaque')
} else if (mediaNota >= 6 && frequencia >= 75 && atividadesEntregues === true) {
    console.log('Situacao final: Aprovado')
} else {
    console.log('Situacao final: Reprovado')
}