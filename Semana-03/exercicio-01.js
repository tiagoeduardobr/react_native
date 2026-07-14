// Exercício Prático — Bug em produção no E-commerce

// Foi aberto um chamado urgente pela equipe de suporte de um e-commerce. Clientes estão relatando que o total do carrinho aparece incorreto, com valores como "25.9010.505" em vez de 36.40. 
// Além disso, um cliente informou que aplicou um cupom de desconto de 10%, mas o valor final aumentou em vez de diminuir. 
// Também foi relatado que o sistema exibiu frete grátis para todos, inclusive para carrinhos vazios e clientes que não teriam direito ao benefício.

// Sua tarefa é:

// Analisar o problema e identificar os bugs no código.

// Elaborar um relatório de causa raiz, explicando por que os erros aconteceram.

// Corrigir o código para que:

// o total do carrinho seja calculado corretamente;

// o cupom de desconto reduza o valor final;

// a regra de frete grátis seja aplicada apenas quando realmente houver direito.

// Entregar o código corrigido dentro do prazo solicitado.

// Observação: o foco da atividade é entender o comportamento incorreto do JavaScript, diagnosticar a causa do bug e propor uma solução segura.

// Neste exercício, você deverá analisar um código JavaScript com bugs, reproduzir o comportamento incorreto e corrigir os problemas encontrados. 
// Antes de executar o código, faça uma previsão mental do que será exibido no console.log e compare com o resultado real.

// Tarefas
// Reproduza o bug mentalmente primeiro. Antes de rodar o código, escreva à mão o que você acha que será impresso no console.log. Depois execute de verdade e compare.

// Para cada bug encontrado, explique a causa raiz em 1 a 2 frases. Não basta dizer que está errado; explique por que o JavaScript se comporta dessa forma.

// Teste o código corrigido com pelo menos estes 3 cenários:

// item1 = "25.90", item2 = "10.50", cupom = "PROMO10", quantidade = "3"

// item1 = "50", item2 = "50", cupom = "SEMCUPOM", quantidade = "0"

// item1 = "40", item2 = "70", cupom = "PROMO10", quantidade = "1"

// Escreva um mini relatório de causa raiz com 5 a 6 linhas, como se estivesse explicando para o time de suporte por que o problema aconteceu em produção e o que deve ser feito para evitar que aconteça novamente.


const prompt = require("prompt-sync")();

function calcularCarrinho(
  precoItem1,
  precoItem2,
  cupomDesconto,
  quantidadeItens,
) {
//Conversão de string para números no início da função.    
  let total = Number.parseFloat(precoItem1) + Number.parseFloat(precoItem2);

  if (cupomDesconto === "PROMO10") {
    total = total - (total * 0.1);
  }

//Melhoria de código, operador ternário no lugar de if.
  let freteGratis = quantidadeItens > 0 || total >= 100 ? true:false;

   return `Total: R$ ${total} | Frete grátis: ${freteGratis}`;  
}

const precoItem1Input = prompt("Preço do item 1: ");
const precoItem2Input = prompt("Preço do item 2: ");
const cupomInput = prompt("Cupom de desconto (ou deixe vazio): ");
const quantidadeDeItensInput = prompt("Quantidade de itens: ");

console.log(
  calcularCarrinho(
    precoItem1Input,
    precoItem2Input,
    cupomInput,
    quantidadeDeItensInput,
  ),
);
