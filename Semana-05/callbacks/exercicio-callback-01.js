/**
 * CHAMADO #047
 * Sistema: iFoodGo - Módulo de Notificações
 * Prioridade: Média
 * Relato: "Precisamos percorrer os pedidos e notificar o cliente, mas cada
 * canal (App, Painel Interno) faz algo diferente com a notificação. Crie UMA
 * função que percorra os pedidos e, para cada um, chame uma função (callback)
 * passada por quem chamou, entregando a mensagem pronta."
 *
 * TAREFA:
 * 1) Implemente processarPedidos(pedidos, callback):
 *    - Percorra o array "pedidos" com forEach
 *    - Para cada pedido, monte uma mensagem de acordo com o status:
 *      "entregue"      -> "Pedido #ID entregue para CLIENTE!"
 *      "cancelado"     -> "Pedido #ID foi cancelado."
 *      qualquer outro  -> "Pedido #ID está em andamento (STATUS)."
 *    - Chame callback(mensagem) passando a mensagem montada
 *      (é essa chamada que entrega a mensagem pra fora da função)
 *
 * 2) Chame processarPedidos DUAS vezes, passando um callback diferente
 *    em cada chamada:
 *    a) um callback que só faz console.log(mensagem) com 📱 na frente
 *    b) um callback que não loga nada, só soma 1 na variável totalPedidos
 */

const pedidos = [
  { id: 1, cliente: "Marina", status: "entregue" },
  { id: 2, cliente: "Rafael", status: "cancelado" },
  { id: 3, cliente: "Bianca", status: "em rota" },
];

// TODO: implemente processarPedidos(pedidos, callback)
function processarPedidos(pedidos, callback) {

}

// TODO: chame processarPedidos passando um callback que loga a mensagem
processarPedidos(pedidos, function (mensagem) {

});

// TODO: chame processarPedidos de novo, passando um callback que soma 1
// em totalPedidos a cada mensagem recebida
let totalPedidos = 0;
processarPedidos(pedidos, function (mensagem) {

});

console.log("Total de pedidos processados:", totalPedidos);