
1. O que é um objeto em programação?
É uma estrutura que agrupa dados (propriedades) e comportamentos (métodos) relacionados em uma única entidade. Representa algo do mundo real ou abstrato dentro do código.

2. O que é uma propriedade de um objeto? Cite um exemplo.
É uma característica ou atributo que descreve o objeto — basicamente uma variável que pertence a ele.

```javascript
const carro = {
  cor: "vermelho" // "cor" é uma propriedade
};
```

3. O que é um método? Qual a diferença entre método e propriedade?
Método é uma função que pertence a um objeto e representa uma ação que ele pode realizar. A diferença é que propriedade guarda um dado (um valor) método executa um comportamento (uma ação).

```javascript
const carro = {
  cor: "vermelho",      // propriedade
  acelerar: function() { // método
    console.log("Vrum!");
  }
};
```

4. O que é uma classe?
É um "molde" ou modelo que define quais propriedades e métodos os objetos criados a partir dela vão ter. A classe não é o objeto em si, é a planta para construí-lo.

5. Qual a diferença entre classe e objeto?
A classe é o modelo/template; o objeto é a instância concreta criada a partir desse modelo. Exemplo: "Cachorro" (classe) descreve o que todo cachorro tem; "Rex" (objeto) é um cachorro específico, criado a partir desse modelo.

6. Para que serve o constructor dentro de uma classe?
É um método especial executado automaticamente quando um novo objeto é criado a partir da classe. Serve para inicializar as propriedades do objeto com valores iniciais.

```javascript
class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
}
```

7. O que significa a palavra `this` dentro de uma classe?
`this` se refere ao próprio objeto que está sendo criado/manipulado naquele momento. É como a classe diz "esta instância específica aqui", permitindo acessar e modificar as propriedades do objeto atual.

8. O que a palavra `new` faz ao criar um objeto?
Ela cria uma nova instância da classe: aloca espaço na memória, executa o constructor e retorna o objeto pronto para uso.

```javascript
const pessoa1 = new Pessoa("João", 20);
```

9. Em TypeScript, por que usamos tipos como string, number e boolean?
Para garantir tipagem estática — ou seja, o TypeScript verifica em tempo de desenvolvimento se os valores atribuídos são do tipo correto, evitando erros antes mesmo de rodar o código. Isso deixa o código mais seguro, previsível e fácil de manter.

10. Exemplo do mundo real que poderia virar uma classe:

Classe: `Smartphone`
- Propriedades: `marca`, `modelo`, `bateria` (nível de carga)
- Método: `ligar()` — liga o aparelho

```javascript
class Smartphone {
  constructor(marca, modelo, bateria) {
    this.marca = marca;
    this.modelo = modelo;
    this.bateria = bateria;
  }

  ligar() {
    console.log(`${this.marca} ${this.modelo} ligando...`);
  }
}
```

