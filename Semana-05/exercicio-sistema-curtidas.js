// Exercício — Sistema de Curtidas
// Cenário
// Você foi contratado para desenvolver um sistema simples semelhante ao de uma rede social.
// O sistema deverá lembrar quantas curtidas um post possui.
// Todas as informações devem permanecer armazenadas através de uma Closure.
// ========== POST ==========
// 1 - Curtir 👍
// 2 - Descurtir 👎
// 3 - Exibir curtidas ❤
// 4 - Sair
// Escolha:
// O menu deverá permanecer aberto até que o usuário escolha a opção 4.
// Regras
// Crie uma função chamada: criarSistemaCurtidas()
// ● Ela deverá possuir internamente apenas uma variável: let curtidas = 0;
// ● Essa variável não poderá ser global.
// A função deverá retornar uma única função responsável por controlar todas as ações do sistema.
// Essa função receberá como parâmetro a ação que deverá ser executada. Exemplo:
// const sistemaCurtidas = criarSistemaCurtidas();
// sistemaCurtidas("curtir");
// sistemaCurtidas("descurtir");
// sistemaCurtidas("consultar");
// Dicas para montar o menu: Utilize prompt-sync para montar o menu, Utilize while/do while. Utilize switch para opção

const prompt = require("prompt-sync")();

function criarSistemaCurtidas() {
  let curtidas = 0;
  return function (opcao) {
    switch (opcao) {
      case "curtir":
        curtidas++;
        console.log(`Total de curtidas: ${curtidas}❤`);
        break;
      case "descurtir":
        curtidas--;
        console.log(`Total de curtidas: ${curtidas}❤`);
        break;
      case "consultar":
        console.log(`Total de curtidas: ${curtidas}❤`);
        break;
      default:
        console.log = "Opção inválida!";
    }
  };
}

const sistemaCurtidas = criarSistemaCurtidas();

sistemaCurtidas("descurtir");

let opcao = 0;

while (opcao !== 4){
  console.log(`--------MENU--------`);
  console.log(``);
  console.log(`Digite 1 para curtir 👍`);
  console.log(`Digite 2 para descurtir 👎`);
  console.log(`Digite 3 para exibir curtidas ❤`);
  console.log(`Digite 4 para sair`);
  console.log(``);
  opcao = prompt(`Digite sua opção: `);
  switch (opcao) {
    case 1:
      sistemaCurtidas("curtir");
      break;
    case 2:
      sistemaCurtidas("descurtir");
      break;
    case 3:
      sistemaCurtidas("consultar");
      break;
    case 4:
      break;
    default:
      console.log("Opção inválida!");
  }
} 
