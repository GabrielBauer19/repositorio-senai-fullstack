function calculardesconto (a:number): number {
let desconto = (a * 0.10)
let valorFinal = (a - desconto)

return valorFinal

}
 console.log(calculardesconto(1000))