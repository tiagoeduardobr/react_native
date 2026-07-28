// Exercício - Consolidação

// Ticket #513 (Sprint Review):
// SISTEMA DE CADASTRO - APP DE DELIVERY (POO)
// Sistema: Cadastro de usuários
// Prioridade: Alta
// Relato: "Precisamos estruturar o cadastro da plataforma. Cliente e
// Entregador compartilham dados básicos, mas cada um tem regras de
// negócio próprias (desconto, ganho do dia). Além disso, o time de
// suporte quer ver os dados completos de cada tipo sem duplicar o
// método que já exibe nome/email/telefone."
// 37

// SUA TAREFA:
// 1. Classe Usuario (pai)
//    - constructor(nome, email, telefone)
//    - telefone "" → "Não informado"
//    - exibirDados(): imprime os 3 campos
// 2. Classe Cliente extends Usuario
//    - Atributos: endereco, limiteCredito
//    - calcularDesconto(valorCompra): 10% se > 100, senão 0
//    - exibirDadosCliente(): exibirDados() + endereco + limiteCredito
// 3. Classe Entregador extends Usuario
//    - Atributos: veiculo, placa, valorPorEntrega
//    - calcularGanhoDia(qtdEntregas): qtdEntregas * valorPorEntrega
//    - exibirDadosEntregador(): exibirDados() + veiculo + placa + ganho (5 entregas)
// 4. NÃO sobrescreva exibirDados() em nenhuma classe filha (assunto
//    da próxima aula) — ele deve continuar existindo só no pai.
// 5. Crie um array `usuariosCadastrados` com pelo menos 2 clientes e
//    2 entregadores.
// 6. Usando um for, percorra o array chamando exibirDados() em cada
//    item. Repare: o mesmo método funciona para qualquer tipo dentro
//    do array, mesmo sem saber de antemão se é Cliente ou Entregador.
// 7. Fora do loop, chame exibirDadosCliente() de um cliente específico
//    e exibirDadosEntregador() de um entregador específico.

// Observação: Crie um arquivo separado para as classes
// module.exports = { Usuario, Cliente, Entregador };

// DESAFIO EXTRA (opcional):
// Calcule e exiba o desconto de um cliente para uma compra de R$250
// e o ganho do dia de um entregador com 8 entregas.

class Usuario {
  constructor(nome, email, telefone) {
    this.nome = nome;
    this.email = email;
    this.telefone = telefone;

    if (telefone === "") {
      this.telefone = "Não Informado";
    }
  }

  exibirDados() {
    console.log(
      `Nome: ${this.nome}\nEmail: ${this.email}\nTelefone: ${this.telefone}`,
    );
  }
}

class Cliente extends Usuario {
  constructor(nome, email, telefone, endereco, limiteCredito) {
    super(nome, email, telefone);
    this.endereco = endereco;
    this.limiteCredito = limiteCredito;
  }

  calcularDesconto(valorCompra) {
    if (valorCompra >= 100) {
      return (valorCompra *= 0.9);
    } else return valorCompra;
  }

  exibirDadosCliente() {
    this.exibirDados();
    console.log(
      `Endereço: ${this.endereco}\nLimite de crédito: ${this.limiteCredito}`,
    );
  }
}

class Entregador extends Usuario {
  constructor(nome, email, telefone, veiculo, placa, valorPorEntrega) {
    super(nome, email, telefone);
    this.veiculo = veiculo;
    this.placa = placa;
    this.valorPorEntrega = valorPorEntrega;
  }

  calcularGanhoDia(qtdEntregas) {
    return qtdEntregas * this.valorPorEntrega;
  }

  exibirDadosEntregador() {
    this.exibirDados();
    console.log(
      `Veículo: ${this.veiculo}\nPlaca: ${this.placa}\nGanho do dia: ${this.calcularGanhoDia(5)}`,
    );
  }
}

console.log(`----------------------Cliente----------------------`)
const clienteJoao = new Cliente(
  "João",
  "joao@joao.com",
  "",
  "Rua Joao 35",
  2000,
);
clienteJoao.exibirDadosCliente();
const valorComDesconto = clienteJoao.calcularDesconto(100);
console.log(`Valor com desconto: ${valorComDesconto}`);
console.log(`----------------------Fim Cliente----------------------`)

console.log(`----------------------Entregador----------------------`)
const entregadorJoao = new Entregador(
  "João",
  "joao@joao.com",
  "",
  "Moto",
  "MVM1224",
  30
);

entregadorJoao.exibirDadosEntregador();
console.log(`----------------------Fim Entregador----------------------`)
