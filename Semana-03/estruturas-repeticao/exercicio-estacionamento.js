// =========================================
// DESAFIO - Sistema de Controle de Estacionamento
// =========================================

const prompt = require("prompt-sync")();

// =========================================
// FUNCIONALIDADE 1
// Registrar as vagas disponíveis
// =========================================

console.log("=== VAGAS DISPONÍVEIS ===");

for (vaga = 1; vaga <= 20; vaga++){
    console.log(`Vaga ${vaga} disponível.`)
}

// =========================================
// FUNCIONALIDADE 2
// Entrada de veículos
// =========================================

console.log("\n=== ENTRADA DE VEÍCULOS ===");

let vagasDisponiveis = 20;

while (vagasDisponiveis > 0){
    console.log(`Veículo estacionado`);
    vagasDisponiveis--;
    console.log(`Restam ${vagasDisponiveis}`)
}

console.log(`Estacionamento lotado!`);

// =========================================
// FUNCIONALIDADE 3
// Menu do sistema
// =========================================

let continuar = "S";


while (continuar === "S"){
    console.log(`=== MENU ===`);
    console.log(``)
    console.log(`1 - Consultar vagas`);
    console.log(`2 - Registrar entrada`);
    console.log(`3 - Registrar saída`);
    console.log(``)
    continuar = prompt(`Deseja realizar outra operação? (S/N)`);
} 

console.log("Sistema encerrado.");