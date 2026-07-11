// Exercício Prático — Rastreamento de Pedidos

// O time de atendimento está recebendo muitas dúvidas de clientes perguntando: 
// “O que significa o status do meu pedido?”. Atualmente, o sistema exibe apenas um número na tela do cliente, 
// sem nenhuma explicação. Sua tarefa é criar uma estrutura de decisão 
// usando switch case que traduza o código do status em uma mensagem amigável ao cliente.

// Considere as seguintes regras de negócio:

// 1 → Pedido recebido

// 2 → Em separação no estoque

// 3 → Enviado para transportadora

// 4 → Saiu para entrega

// 5 → Entregue

// 6 → Pedido cancelado

// Qualquer outro valor → Status desconhecido, entre em contato com o suporte

// O programa deve receber um código numérico de status e exibir a mensagem correspondente.

let statusPedido = 5;
let mensagemStatus = "";

switch (statusPedido) {
    case 1:
        mensagemStatus = "Pedido recebido";
        break;
    case 2:
        mensagemStatus = "Em separação no estoque";
        break;
    case 3:
        mensagemStatus = "Enviado para transportadora";
        break;
    case 4:
        mensagemStatus = "Saiu para entrega";
        break;
    case 5:
        mensagemStatus = "Entregue";
        break;
    case 6:
        mensagemStatus = "Pedido cancelado";
        break;
    default:
        mensagemStatus = "Status desconhecido, entre em contato com o suporte";
}

console.log("Status do pedido: " + mensagemStatus);