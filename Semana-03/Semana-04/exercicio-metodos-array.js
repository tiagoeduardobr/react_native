// Exercício Prático — Loja de Informática
// Você está desenvolvendo um sistema para uma loja de informática. O sistema possui a seguinte lista de produtos e seus preços:

// javascript
// const produtos = ["Mouse", "Teclado", "Monitor", "Notebook", "Headset"];
// const precos = [80, 150, 950, 4200, 320];
// Desafios
// Utilize o map() para criar um novo array contendo todos os nomes dos produtos em letras maiúsculas.

// Utilize o filter() para criar um novo array contendo apenas os preços maiores que R$ 300,00.

// Utilize o find() para localizar o produto "Notebook".

// Regras
// Não utilize for, while ou do...while.

// Utilize apenas os métodos estudados na aula.

// O array original não deve ser alterado.

const produtos = ["Mouse", "Teclado", "Monitor", "Notebook", "Headset"];
const precos = [80, 150, 950, 4200, 320];

const nomesProdutosMaiusculas = produtos.map((nome) => nome.toUpperCase());
console.log(`${nomesProdutosMaiusculas}`);

const precosFiltrados = precos.filter((preco) => preco > 300);
console.log(`${precosFiltrados}`);

const findNotebook = produtos.find((produto) => produto === "Notebook");
console.log(`${findNotebook}`);
