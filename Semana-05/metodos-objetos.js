// Exercício - Classe completa
// SISTEMA - CONTA BANCÁRIA (NUBANK SIMPLIFICADO)
// Precisamos de uma classe `ContaBancaria` para representar as contas  dos clientes. Cada conta deve permitir 
// depositar e sacar valores.
// SUA TAREFA:
// 1. Crie a classe `ContaBancaria` com um construtor que recebe titular e saldo.
// 2. Adicione o método `depositar(valor)`, que soma o valor ao saldo.
// 3. Adicione o método `sacar(valor)`, que subtrai o valor do saldo.
// 4. No final, os console.log abaixo precisam exibir os resultados esperados.

class contaBancaria {
  titular = "";
  saldo = "";
  constructor(titular, saldo) {
    this.titular = titular;
    this.saldo = saldo;
  }
  depositar(valor) {
    this.saldo += valor;
  }
  sacar(valor){
    this.saldo -= valor;
  }
}
const contaAna = new contaBancaria("Ana", 100);
console.log(contaAna);
const contaBruno = new contaBancaria("Bruno", 500);
console.log(contaBruno);

contaAna.depositar(50);
console.log(`Saldo após depósito: ${contaAna.saldo}`);

contaAna.sacar(20);
console.log(`Saldo após saque: ${contaAna.saldo}`);