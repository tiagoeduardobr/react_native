// Exercício Prático — Checkout: cálculo de frete

// O sistema de checkout de uma loja virtual precisa calcular o valor do frete com base em algumas regras de negócio. Atualmente, a lógica foi implementada com if/else, mas o Tech Lead pediu que o código fosse refatorado com operador ternário e que a mensagem final fosse montada com template literal, em vez de concatenação com +.

// Considere as seguintes regras:

// Se o valor da compra for maior ou igual a R$ 200 ou se o cliente for VIP, o frete deve ser gratuito.

// Caso contrário, o frete deve custar R$ 15,90.

// O programa deve:

// Verificar as condições informadas.

// Definir o valor do frete.

// Exibir uma mensagem no formato: "Valor do frete: R$ X,XX".

// Observação: o código deve ser reescrito utilizando operador ternário e template literal.

// let valorCompra = 180;
// let clienteVIP = true;
// let frete;
// if (valorCompra >= 200 || clienteVIP) {
//     frete = 0;
// } else {
//     frete = 15.9;
// }
// let mensagem = "Valor do frete: R$ " + frete.toFixed(2);
// console.log(mensagem);

let valorCompra = 200;
let clienteVIP = false;
let frete = (valorCompra >= 200 || clienteVIP) ? 0 : 15.9;
let mensagem = `Valor do frete: R$ ${frete.toFixed(2)}`;
console.log(mensagem);
