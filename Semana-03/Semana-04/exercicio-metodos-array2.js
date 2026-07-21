// Exercício para Fixar — Loja Virtual
// Chamado #1 — Sistema: ShopFast (Catálogo de Preços)
// Relato do incidente
// O time de marketing vai lançar a Black Friday amanhã, mas o sistema não aplica desconto em massa,
// não filtra os produtos populares por faixa de preço e não consegue localizar rapidamente um item premium para destacar na home.
// Precisamos resolver antes da campanha ir ao ar.

// O que fazer
// Com map(), aplique 20% de desconto em todos os preços de precos, gerando precosComDesconto.

// Com filter(), crie produtosPopulares: preços entre R$ 30,00 e R$ 150,00 (inclusive), usando os preços originais.

// Com find(), encontre o primeiro preço da linha premium, maior que R$ 300,00, e guarde em produtoPremium.

// Dados de partida
// Os dados para usar estão disponíveis no material da atividade.

const precos = [
  49.9, 129.9, 39.9, 259.9, 15.5, 89.9, 199.9, 320.0, 45.0, 12.9, 67.8, 145.0,
  22.5, 399.9, 78.9, 33.2, 210.0, 56.7, 99.0, 149.9, 8.9, 275.0, 61.4, 118.6,
  29.9, 450.0, 74.5, 19.9, 165.3, 38.0,
];

const precosComDesconto = precos.map((preco) => {
  return (preco * 0.8).toFixed(2);
});
console.log(`Preços com desconto: ${precosComDesconto}`);

const produtosPopulares = precos.filter((preco) => {
  return (preco >= 30 && preco <= 150);
});
console.log(`Produtos populares: ${produtosPopulares}`);

const produtoPremium = precos.find((preco) => preco > 300);
console.log(`Produtos premium: ${produtoPremium}`);
