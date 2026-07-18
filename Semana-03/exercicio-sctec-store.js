// Exercício — Juntando tudo até agora

// Você deverá desenvolver uma solução em JavaScript para a tela de resumo de pedido de uma loja virtual. O sistema precisa reunir, no mesmo fluxo, o cálculo do valor da compra, a aplicação de desconto, a classificação do cliente por faixa etária, a tradução do status do pagamento e a montagem de uma mensagem final para exibição na tela.

// Regras de negócio
// Valor total da compra: some os valores dos itens do carrinho, armazenados em um array de números, utilizando uma estrutura de repetição (for ou while). O resultado será o valorCompra, usado nas próximas regras.

// Desconto: aplique 15% de desconto se valorCompra >= 300 ou se clienteVIP for true. Caso contrário, o desconto deve ser 0%. Essa regra deve ser implementada com operador ternário.

// Faixa etária: classifique o cliente conforme a idade:

// menor de 18 anos: Menor de idade

// de 18 a 59 anos: Adulto

// 60 anos ou mais: Idoso
// Essa regra deve ser implementada com if / else if / else.

// Status do pagamento: traduza o código do pagamento conforme a tabela:

// 1 = Pago

// 2 = Pendente

// 3 = Cancelado

// qualquer outro valor = Status inválido
// Essa regra deve ser implementada com switch case.

// Mensagem final: monte a saída utilizando template literal, reunindo nome do cliente, faixa etária, valor com desconto aplicado e status do pagamento.

// Requisitos técnicos
// Utilize no mínimo 2 Arrow Functions e no mínimo 2 funções tradicionais.

// A função responsável por somar os itens do carrinho deve ter apenas essa responsabilidade, sem calcular desconto.

// Crie uma função orquestradora que receba os dados do cliente, incluindo o array de itens, e devolva a mensagem final pronta para exibição.

// Cada função deve ter uma única responsabilidade.

// Não utilize console.log dentro das funções de regra; ele deve aparecer apenas na chamada final.

// Observação
// O objetivo é aplicar, em um único exercício, os principais conceitos trabalhados até agora: laços de repetição, operador ternário, estruturas condicionais, switch case, template literal e organização por funções.

const dadosCliente = {
  nome: "Fernanda Lima",
  idade: 34,
  clienteVIP: false,
  itensCarrinho: [120, 150, 50],
  statusPagamento: 1, // 1, 2, 3 ou qualquer outro valor para testar
};

// 1. Some os valores do carrinho usando um laço de repetição (for ou while)
// TODO: function calcularValorTotal(itens) { ... }

// 2. Calcule o percentual de desconto usando ternário
// TODO: const calcularPercentualDesconto = (valorTotal, clienteVIP) => { ... }

// 3. Aplique o desconto e retorne o valor final
// TODO: const calcularValorComDesconto = (valorTotal, percentualDesconto) => { ... }

// 4. Classifique a faixa etária usando if/else if
// TODO: function classificarFaixaEtaria(idade) { ... }

// 5. Traduza o status do pagamento usando switch case
// TODO: function traduzirStatusPagamento(status) { ... }

// 6. Monte a mensagem final usando template literal
// TODO: const montarMensagemFinal = (nome, faixaEtaria, valorComDesconto, statusTraduzido) => { ... }

// 7. Orquestradora: chama tudo em ordem e devolve a mensagem pronta
// TODO: function orquestrarResumoPedido(dadosCliente) { ... }

console.log(orquestrarResumoPedido(dadosCliente));