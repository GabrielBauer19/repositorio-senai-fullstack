let nomes = ['ana', 'maria', 'joao', 'paulo', 'joana']

let notas = [6, 6, 8, 9, 10]

let frequencia = [60, 75, 80, 90, 58]

let soma = 0;

for (let i = 0; i < nomes.length; i++) {
    console.log("=================================")
    console.log("Posição: ", i);
    console.log("Nomes: ", nomes[i]);
    console.log("Notas: ", notas[i]);
    console.log("Frequencia: ", frequencia[i]);

       soma = soma + notas[i]

    if (notas[i] >= 7 && frequencia[i] >= 75) {
        console.log('aluno aprovado')

    } else if (notas[i] >= 5 || notas[i] < 7 && frequência[i] >= 75){ 
         console.log('recuperacao')}
        else {
            console.log ('aluno reprovado')
        }
    
    console.log("=================================")

}


let media = soma / notas.length;
console.log('media da turma: ' + media)



