let nomeAluno = "brenda";
let pesoAluno = 59;
let alturaAluno = 1.57;

let imcAluno = pesoAluno / (alturaAluno * alturaAluno);

console.log("Nome do aluno: " + nomeAluno);
console.log("Peso: " + pesoAluno + " kg");
console.log("Altura: " + alturaAluno + " m");
console.log("IMC: " + imcAluno);

if (imcAluno >= 30) {
    console.log("Você tem obesidade");
} else if (imcAluno >= 25 && imcAluno < 30) {
    console.log("Você tem sobrepeso");
} else if (imcAluno >= 18.5 && imcAluno < 25) {
    console.log("Você tem um peso normal");
} else {
    console.log("Você está abaixo do peso ideal");
}