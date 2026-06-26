let jogador = {
nickname: 'legulas',
nivel: 14,
moedas:260,
energia:67,
premium: false
}
console.log(jogador.nickname)
console.log(jogador.nivel)
console.log(jogador.moedas)
console.log(jogador.energia)
console.log(jogador.premium)
jogador.moedas = 100;
jogador.nivel = 15;
jogador.energia = 76;
jogador.premium = true;
console.log('apos a atualizaçao de dados sua conta ficou assim')
console.log('jogador: ' +jogador.nickname)
console.log('nivel: ' + jogador.nivel)
console.log('moedas: ' + jogador.moedas)
console.log('energia: ' +jogador.energia)
console.log('premium: ' + jogador.premium)
