1. O que são operadores em programação?

Operadores são símbolos usados para realizar operações sobre valores ou variáveis. Eles dizem ao programa o que fazer com os dados, como somar dois números, comparar valores ou combinar condições.

2. Para que servem os operadores aritméticos? Cite exemplos.

Servem para realizar cálculos matemáticos. Exemplos: + (adição), - (subtração), * (multiplicação), / (divisão), % (resto da divisão) e ** (potenciação).

3. Qual a diferença entre / e % em JavaScript?

O / realiza a divisão e retorna o resultado completo (podendo ser decimal). O % retorna apenas o resto da divisão inteira. Por exemplo: 10 / 3 dá 3.333..., enquanto 10 % 3 dá 1.

4. Como descobrir se um número é par usando o %?

Um número é par quando numero % 2 === 0, ou seja, quando não sobra resto ao dividir por 2.

5. O que é uma expressão em programação?

É qualquer trecho de código que produz um valor como resultado, como 2 + 3, 10 > 5 ou até uma variável sozinha.

6. O que significa precedência de operadores?

É a ordem em que os operadores são executados numa expressão. Assim como na matemática, multiplicação e divisão são calculadas antes de adição e subtração.

7. Por que os parênteses podem mudar o resultado de uma expressão?

Porque forçam que o que está dentro deles seja calculado primeiro. 2 + 3 * 4 dá 14, mas (2 + 3) * 4 dá 20.

8. Qual a diferença entre =, == e ===?

= é atribuição (guarda um valor numa variável)
== compara valores, mas ignora o tipo (5 == "5" é true)
=== compara valor e tipo (5 === "5" é false)


9. Por que é recomendado usar === em JavaScript?

Porque o == faz conversões automáticas de tipo que podem causar resultados inesperados e bugs difíceis de encontrar. O === é mais seguro e preciso.

10. O que os operadores relacionais retornam?

Sempre retornam um boolean: true ou false.

11. Quando usamos > e >=?

> quando queremos verificar se um valor é estritamente maior que outro. >= quando ele pode ser maior ou igual. Exemplo: nota para passar pode ser >= 7.

12. Quando usamos < e <=?

< para verificar se um valor é estritamente menor. <= quando pode ser menor ou igual. Exemplo: idade < 18 para verificar menoridade.

13. Para que serve o &&?

Retorna true somente quando as duas condições são verdadeiras ao mesmo tempo. Se qualquer uma for falsa, o resultado é false.

14. Para que serve o ||?

Retorna true quando pelo menos uma das condições é verdadeira. Só é false se as duas forem falsas.

15. Para que serve o !?

Inverte o valor booleano: transforma true em false e vice-versa.

16. Qual a diferença entre condição simples e composta?

Condição simples verifica apenas uma situação (if (idade >= 18)). Condição composta combina duas ou mais usando &&, || ou !.

17. Situação real em que duas condições precisam ser verdadeiras ao mesmo tempo.

Para entrar numa atração de parque, a pessoa precisa ter pelo menos 1,40 m de altura e ser maior de 12 anos. As duas condições têm que ser atendidas juntas.

18. Situação real em que apenas uma condição precisa ser verdadeira.

Para ganhar desconto numa loja, o cliente precisa ter cartão fidelidade ou ser estudante. Basta uma das duas ser verdadeira.

19. Como o console.log() ajuda a encontrar erros?

Ele exibe valores no console em tempo real, funcionando como "checkpoints" para verificar se as variáveis estão com os valores esperados em cada etapa do código.

20. Por que testar com valores diferentes?

Porque o programa pode funcionar para um valor e falhar para outro. Testar com valores variados (positivos, negativos, zero, extremos) garante que o código funciona em todas as situações.