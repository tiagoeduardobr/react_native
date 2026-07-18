// Exercício com o Array
// Sua missão
// Refatore o código do slide anterior seguindo os requisitos abaixo:

// Armazene todos os livros em um Array chamado livros.

// Utilize um laço for para percorrer todos os livros.

// Exiba cada livro no seguinte formato:

// 1 - Dom Casmurro
// 2 - 1984
// 3 - O Pequeno Príncipe
// ...

// Ao final, exiba: Total de livros cadastrados: 6.

// Se o livro atual for "Clean Code", exiba antes dele a mensagem: ⭐ Livro recomendado pelos desenvolvedores.

// Observação
// O objetivo é substituir as variáveis separadas por uma estrutura mais organizada usando Array e loop de repetição.

const livros = [
  "Dom Casmurro",
  "1984",
  "O Pequeno Príncipe",
  "Harry Potter",
  "Clean Code",
  "Código Limpo",
];

for (let i = 0; i < livros.length; i++) {
  if (livros[i] === "Clean Code") {
    console.log(
      `Livro: ${livros[i]} - ⭐ Livro recomendado pelos desenvolvedores.`,
    );
  } else {
    console.log(`Livro: ${livros[i]}`);
  }
}
