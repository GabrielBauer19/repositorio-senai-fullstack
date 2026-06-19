
// 03-simulador-acesso.js
let idade = 17;
let temCadastro = true;
let temResponsavel = true;
let bloqueado = false;

// Regra 1: bloqueado tem prioridade máxima
if (bloqueado == true) {
    console.log("Acesso negado: usuário bloqueado.");

// Regra 2: adulto com cadastro
} else if (idade >= 18 && temCadastro) {
    console.log("Acesso liberado.");

// Regra 3: menor com cadastro E responsável
} else if (idade < 18 && temCadastro && temResponsavel) {
    console.log("Acesso liberado com responsável.");

// Regra 4: sem cadastro
} else if (!temCadastro) {
    console.log("Acesso negado: cadastro necessário.");

// Regra 5: nenhuma regra resolveu
} else {
    console.log("Acesso negado.");
}


