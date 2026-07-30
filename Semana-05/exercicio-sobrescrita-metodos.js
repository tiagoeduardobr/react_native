// Exercício – Sobrescrita de Métodos (Override) 
// Contexto
// Uma empresa está desenvolvendo um sistema para enviar notificações aos seus clientes.
// Inicialmente, o sistema possuía apenas uma classe chamada Notificação, responsável por enviar qualquer tipo de 
// mensagem. Porém, com o crescimento da empresa, surgiram diferentes canais de comunicação, como e-mail, SMS, 
// notificações push e WhatsApp.
// Cada canal envia a mensagem de uma forma diferente, mas todos possuem a mesma responsabilidade: enviar uma 
// notificação.
// Seu desafio será utilizar herança e sobrescrita de métodos (override) para representar esse cenário.
// 45
// Exercício – Sobrescrita de Métodos (Override)
// Requisitos
// 1. Crie uma classe chamada Notificacao
// Essa classe deve possuir:
// ● Um atributo para armazenar o destinatário.
// ● Um método chamado:
// enviar(mensagem)
// O método da classe base deve apenas exibir: Enviando notificação...
// 2. Crie as seguintes classes que herdam de Notificacao
// ● Email
// ● SMS
// ● PushNotification
// ● WhatsApp
// Cada uma deve sobrescrever o método: enviar(mensagem)
// 46
// Exercício – Sobrescrita de Métodos (Override)
// Cada classe deverá apresentar uma mensagem diferente. 
// Exemplo esperado: 
// 47
// Enviando e-mail para João
// Mensagem: Promoção disponível!
// Enviando SMS para João
// Mensagem: Promoção disponível!
// Enviando Push Notification para João
// Mensagem: Promoção disponível!
// Enviando Push Notification para João
// Mensagem: Promoção disponível!
// Exercício – Sobrescrita de Métodos (Override)
// 3. Crie um objeto de cada tipo.
// Exemplo:
// const email = new Email("João");
// const sms = new SMS("Maria");
// const push = new PushNotification("Carlos");
// const whatsapp = new WhatsApp("Fernanda");
// 4. Armazene todos em um único array 
// 5. Percorra o array
// Utilize um forEach() para percorrer o array e envie a mesma mensagem para todos.