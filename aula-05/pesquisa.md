1. **O que é um array em programação?**
   Um array é uma estrutura de dados que permite armazenar vários valores em uma única variável. Exemplo:

```javascript
let alunos = ["Ana", "Bruno", "Carlos"];
```

2. **Por que é melhor usar um array do que criar várias variáveis separadas, como aluno1, aluno2 e aluno3?**
   Porque o código fica mais organizado, fácil de manter e permite trabalhar com vários dados usando laços de repetição.

3. **O que é índice em um array?**
   Índice é a posição de cada elemento dentro do array. Cada item possui um número que indica sua localização.

4. **Por que o primeiro elemento de um array fica na posição 0?**
   Porque a maioria das linguagens de programação utiliza indexação baseada em zero. Assim, o primeiro elemento está na posição 0, o segundo na posição 1 e assim por diante.

5. **Para que serve o `.length`?**
   Serve para informar a quantidade de elementos existentes em um array.

```javascript
let alunos = ["Ana", "Bruno", "Carlos"];
console.log(alunos.length); // 3
```

6. **Como acessamos o primeiro elemento de um array chamado `alunos`?**
   Usando o índice 0:

```javascript
alunos[0];
```

7. **Como podemos alterar um valor dentro de um array?**
   Atribuindo um novo valor ao índice desejado:

```javascript
alunos[1] = "Pedro";
```

8. **Qual a relação entre arrays e laços de repetição?**
   Os laços permitem percorrer automaticamente todos os elementos de um array, evitando escrever código repetitivo.

Exemplo:

```javascript
for (let i = 0; i < alunos.length; i++) {
    console.log(alunos[i]);
}
```

9. **Qual a diferença entre percorrer um array com `for` e apenas mostrar um item específico?**

* Mostrar um item específico:

```javascript
console.log(alunos[0]);
```

Exibe apenas um elemento.

* Percorrer com `for`:

```javascript
for (let i = 0; i < alunos.length; i++) {
    console.log(alunos[i]);
}
```

Exibe todos os elementos do array.

10. **O que é um acumulador? Dê um exemplo de uso com notas ou valores.**
    É uma variável usada para armazenar resultados parciais durante repetições.

Exemplo:

```javascript
let notas = [7, 8, 9];
let soma = 0;

for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
}

console.log(soma); // 24
```

11. **Para que servem operadores aritméticos como `+`, `-`, `*` e `/` dentro de um programa?**
    Servem para realizar cálculos matemáticos:

* `+` → soma
* `-` → subtração
* `*` → multiplicação
* `/` → divisão

Exemplo:

```javascript
let resultado = 10 + 5;
```

12. **Para que servem operadores lógicos como `&&` e `||`?**
    Servem para combinar condições:

* `&&` (E): todas as condições devem ser verdadeiras.
* `||` (OU): pelo menos uma condição deve ser verdadeira.

Exemplo:

```javascript
if (idade >= 18 && possuiCNH) {
    console.log("Pode dirigir");
}
```

13. **Qual a diferença entre `if/else` e `switch`?**

* `if/else` é usado para condições mais complexas.
* `switch` é usado quando queremos comparar uma variável com vários valores específicos.

Exemplo de `switch`:

```javascript
switch (dia) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda");
        break;
}
```

14. **O que os métodos `push` e `pop` fazem em um array?**

* `push()` adiciona um elemento ao final do array.
* `pop()` remove o último elemento do array.

Exemplo:

```javascript
let alunos = ["Ana", "Bruno"];

alunos.push("Carlos"); // adiciona
alunos.pop(); // remove Carlos
```

15. **O que é uma matriz e como ela se relaciona com arrays?**
    Uma matriz é um array que contém outros arrays, formando linhas e colunas.

Exemplo:

```javascript
let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
```

Para acessar o número 5:

```javascript
matriz[1][1];
```

A matriz é, portanto, uma estrutura composta por vários arrays organizados em duas dimensões.
