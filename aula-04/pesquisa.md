1. O que é uma estrutura de repetição?

Uma estrutura de repetição é um recurso da programação que permite executar um bloco de código várias vezes, de forma automática, enquanto uma condição for verdadeira ou por uma quantidade determinada de vezes.

2. Para que serve o laço for?

O laço for é usado quando se sabe previamente quantas vezes a repetição deve ocorrer.

Exemplo:

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

Ele exibirá os números de 1 a 5.

3. Para que serve o laço while?

O laço while é usado quando não se sabe exatamente quantas vezes o código será repetido. Ele executa o bloco enquanto uma condição for verdadeira.

Exemplo:

let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}
4. Para que serve o laço do-while?

O laço do-while é semelhante ao while, mas garante que o bloco de código seja executado pelo menos uma vez, pois a condição é verificada somente após a primeira execução.

Exemplo:

let i = 1;

do {
    console.log(i);
    i++;
} while (i <= 5);
5. Qual é a diferença entre for, while e do-while?


Estrutura	Quando usar	Verificação da condição

for	Quando se sabe o número de repetições	Antes de cada repetição
while	Quando a repetição depende de uma condição	Antes de cada repetição
do-while	Quando o bloco deve executar pelo menos uma vez	Depois da primeira execução