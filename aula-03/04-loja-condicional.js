let valordacompra = 120
let temcupom = true
let formaPagamento = "pix"; // pix, credito ou boleto

let valorOriginal = valordacompra;
let desconto = 0;
let frete = 0;
let total = valordacompra; 
 if (temcupom) {desconto = valorOriginal * 0.1;
  total = valorOriginal - desconto;}

  switch (formaPagamento) {
    case 'pix':
        console.log ('pagamento via pix');
 break;
  case "credito":
    console.log("Pagamento via Cartão de Crédito.");
    break;
  case "boleto":
    console.log("Pagamento via Boleto.");
    break;
  default:
    console.log("Forma de pagamento inválida.");
    break;
} 

if (total >=100) {
    frete = 0;
} else {
    frete = 15
}
total = total + frete;

console.log("Valor original: R$ " + valorOriginal.toFixed(2));
console.log("Desconto: R$ " + desconto.toFixed(2));
console.log("Frete: R$ " + frete.toFixed(2));
console.log("Total a pagar: R$ " + total.toFixed(2));