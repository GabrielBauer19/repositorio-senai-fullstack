class Aluno {
    nome: string;
    nota1: number;
    nota2: number;

    constructor(nome: string, nota1: number, nota2: number) {
        this.nome = nome;
        this.nota1 = nota1;
        this.nota2 = nota2;
    }

    calcularMedia(): number {
        return (this.nota1 + this.nota2) / 2;
    }

    verificarSituacao(): string {
        if (this.calcularMedia() >= 6) {
            return "Aluno aprovado!";
        } else {
            return "Aluno reprovado";
        }
    }

    exibirInformacoes(): void {
        console.log(this.nome);
        console.log(this.calcularMedia());
        console.log(this.verificarSituacao());
    }
}

// Criando um objeto (instância) da classe
const aluno1 = new Aluno("Ana", 8.5, 7.0);
aluno1.exibirInformacoes();