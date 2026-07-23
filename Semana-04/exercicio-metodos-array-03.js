// Exercício Prático — Loja de Informática V2
// Você está desenvolvendo novas funcionalidades para o sistema de uma loja de informática.
// O sistema possui a seguinte lista de preços dos produtos:

// javascript
// const precos = [80, 150, 950, 4200, 320];
// Desafios
// Desafio 1 — every()
// O gerente deseja verificar se todos os produtos custam mais de R$ 50,00.
// Utilize o método every() para responder essa verificação.

// Desafio 2 — some()
// O gerente deseja saber se existe pelo menos um produto que custa mais de R$ 4.000,00.
// Utilize o método some() para realizar essa verificação.

// Desafio 3 — reduce()
// O setor financeiro precisa calcular o valor total de todos os produtos cadastrados.
// Utilize o método reduce() para somar todos os preços.

// Regras
// Utilize apenas os métodos pedidos em cada desafio.

// Não utilize for, while ou do...while.

// O array original não deve ser alterado.

const precos = [80, 150, 950, 4200, 320];

// Desafio 1 — every()
// O gerente deseja verificar se todos os produtos custam mais de R$ 50,00.
// Utilize o método every() para responder essa verificação.
const precosMaiorValor = precos.every((preco) => preco >= 50);
console.log(`Preços são maiores que 50,00: ${precosMaiorValor}`);

// Desafio 2 — some()
// O gerente deseja saber se existe pelo menos um produto que custa mais de R$ 4.000,00.
// Utilize o método some() para realizar essa verificação.
const precosMaisCaro = precos.some((preco) => preco >= 4000);
console.log(`Existe produto mais caro que 4000,00: ${precosMaisCaro}`);

// Desafio 3 — reduce()
// O setor financeiro precisa calcular o valor total de todos os produtos cadastrados.
// Utilize o método reduce() para somar todos os preços.
const valorTotal = precos.reduce((total, preco) => total + preco);
console.log(`Valor total: ${valorTotal}`);
