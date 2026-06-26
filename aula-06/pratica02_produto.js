let produtos = {
nome: 'pelucia',
preco: 7,
estoque: 0,
disponivel: true,
    


};


produtos.preco = 25;
produtos.estoque = 0;
produtos.disponivel = true;

if (produtos.estoque <= 0){
produtos.disponivel = false

};

console.log("dados atualizados")

console.log(produtos.nome)
 console.log(produtos.preco)
console.log(produtos.estoque)
console.log(produtos.disponivel)


   //Qual propriedade guarda o nome do produto? produtos.nome
  // Qual propriedade foi alterada para representar o desconto? produtos.preco
   //Qual propriedade foi alterada para representar a venda?produtos.disponivel