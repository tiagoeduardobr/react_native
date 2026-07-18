// Exercício 2 — Refatorando múltiplas funções

// Uma empresa possui um sistema simples para gerenciamento de chamados. O código atual foi escrito com funções tradicionais e agora precisa ser refatorado.

// Tarefa
// Refatore todas as funções do código abaixo utilizando Arrow Functions.

// Objetivo
// Reescrever as funções mantendo o mesmo comportamento, mas aplicando a sintaxe moderna de funções em JavaScript.

// function abrirChamado(numero, solicitante, categoria) {
//     return {
//         numero: numero,
//         solicitante: solicitante,
//         categoria: categoria,
//         status: "Aberto"
//     };
// }

const abrirChamado = (numero, solicitante, categoria) => ({
        numero: numero,
        solicitante: solicitante,
        categoria: categoria,
        status: "Aberto"
    });

// function atualizarStatus(chamado, novoStatus) {
//     chamado.status = novoStatus;

//     return chamado;
// }

const atualizarStatus = (chamado, novoStatus) => {
    chamado.status = novoStatus;
    return chamado;
}

// function gerarMensagem(chamado) {
//     return `Chamado #${chamado.numero} está ${chamado.status}.`;
// }

const gerarMensagem = (chamado) => `Chamado #${chamado.numero} está ${chamado.status}.`;


const chamado = abrirChamado(
    102,
    "Maria Oliveira",
    "Rede"
);

console.log(chamado);

const chamadoAtualizado = atualizarStatus(
    chamado,
    "Em atendimento"
);

console.log(chamadoAtualizado);

console.log(gerarMensagem(chamadoAtualizado));