let produto
    = {
    nome: 'copo',
    preco: 10,
    quantidade: 8,


    calculaTotal: function () {
        return this.preco * this.quantidade;
    }  };
 console.log(produto.calculaTotal())