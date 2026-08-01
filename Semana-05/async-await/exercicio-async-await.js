// 1. Crie uma função chamada buscarPedido(id).

// Essa função deve retornar uma Promise.
// Dentro dela:
//  Utilize setTimeout() com 3 segundos de atraso para simular o tempo de resposta da API.
// Após os 3 segundos:
// Se o id for 101, retorne:

// {
//     id: 101,
//     cliente: "Matheus",
//     produto: "Notebook",
//     status: "Em transporte"
// }

// utilizando resolve().

// Caso seja informado qualquer outro número, utilize reject() retornando: Pedido não encontrado.
// 2. Crie uma função main().

// Ela deverá ser async.

// Dentro dela:

// Solicite ao usuário o número do pedido utilizando prompt-sync.
// Aguarde a resposta da Promise utilizando await.
// Utilize try/catch para tratar possíveis erros.

// 3. Caso o pedido exista, exiba:

// ===== PEDIDO =====
// ID: 101
// Cliente: Matheus
// Produto: Notebook
// Status: Em transporte

const prompt = require("prompt-sync")();

const pedidos = [
  {
    id: 101,
    cliente: "Matheus",
    produto: "Notebook",
    status: "Em transporte",
  },
  {
    id: 102,
    cliente: "Maria",
    produto: "Mouse Gamer",
    status: "Entregue",
  },
  {
    id: 103,
    cliente: "Carlos",
    produto: "Teclado Mecânico",
    status: "Preparando envio",
  },
];

function buscarPedido(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const pedidoEncontrado = pedidos.find((pedido) => pedido.id === id);

      if (pedidoEncontrado) {
        resolve(pedidoEncontrado);
      } else {
        reject("Pedido não encontrado");
      }
    });
  }, 3000);
}

const idPedido = Number(prompt("Informe o ID do pedido: "));

async function main() {
  try {
    const resultado = await buscarPedido(idPedido);

    console.log("\n===== PEDIDO ENCONTRADO =====");
    console.log(`ID: ${resultado.id}`);
    console.log(`Cliente: ${resultado.cliente}`);
    console.log(`Produto: ${resultado.produto}`);
  } catch (erro) {
    console.log("\n===== ERRO =====");
    console.log(erro);
  }
}

main();

