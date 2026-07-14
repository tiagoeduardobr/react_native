// Exercício Prático — Validação e aplicação de cupom

// O time quer criar uma validação para verificar se um cupom é válido antes de aplicá-lo no desconto de uma compra. Para isso, será necessário desenvolver duas funções em JavaScript.

// Tarefas
// Crie uma função cupomValido(codigo) que retorne true apenas se o código for exatamente "PROMO10". A validação deve ser case sensitive, ou seja, letras maiúsculas e minúsculas devem ser consideradas.

// Teste a função com os seguintes valores:

// cupomValido("PROMO10") → true

// cupomValido("promo10") → false

// cupomValido("SEMCUPOM") → false

// Crie uma segunda função aplicarDesconto(valor, codigo) que:

// retorne valor - (valor * 0.10) se cupomValido(codigo) for true;

// caso contrário, retorne o valor sem alteração.

// Teste a função com:

// aplicarDesconto(100, "PROMO10")

// aplicarDesconto(100, "XYZ")

// Observação
// O objetivo é validar corretamente o cupom antes de aplicar o desconto, evitando que códigos inválidos sejam aceitos pelo sistema.
const prompt = require("prompt-sync")();

function cupomValido(codigo){
// Crie uma função cupomValido(codigo) que retorne true apenas se o código for exatamente "PROMO10"
let cupomValido = false;
if (codigo === "PROMO10") {
        return cupomValido = true;
    }
return cupomValido;
// Teste a função com os seguintes valores:

// cupomValido("PROMO10") → true

// cupomValido("promo10") → false

// cupomValido("SEMCUPOM") → false
    
}

function aplicarDesconto(valor, codigo){
// retorne valor - (valor * 0.10) se cupomValido(codigo) for true;
if (cupomValido(codigo)) {
        return valor - valor * 0.10;
    }
return valor;
// caso contrário, retorne o valor sem alteração.
// Teste a função com:

// aplicarDesconto(100, "PROMO10")

// aplicarDesconto(100, "XYZ")
}

const codigo = prompt("Código cupom: ");
const valor = prompt("Valor item: ");

if (cupomValido(codigo)){
    console.log(`Seu cupom ${codigo} é válido.`);
    console.log(`Valor com desconto: ${aplicarDesconto(valor, codigo)}`);
}
    else{
        console.log(`Seu cupom ${codigo} não é válido.`)
        console.log(`Valor: ${aplicarDesconto(valor, codigo)}`)
    }
