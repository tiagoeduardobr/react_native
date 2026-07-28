// Exemplo didático de JavaScript com herança
// Resumo: este código mostra como criar classes e usar herança,
// ou seja, uma classe filha pode reaproveitar características de uma classe pai.
// Na prática, vamos ver como isso funciona ao vivo com exemplos simples.

// Classe base
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    apresentar() {
        console.log(`Meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
    }
}

// Classe filha que herda de Pessoa
class Aluno extends Pessoa {
    constructor(nome, idade, turma) {
        super(nome, idade); // chama o construtor da classe pai
        this.turma = turma;
    }

    estudar() {
        console.log(`${this.nome} está estudando na turma ${this.turma}.`);
    }
}

// Outra classe filha
class Professor extends Pessoa {
    constructor(nome, idade, disciplina) {
        super(nome, idade);
        this.disciplina = disciplina;
    }

    ensinar() {
        console.log(`${this.nome} está ensinando ${this.disciplina}.`);
    }
}

// Criando objetos
const aluno1 = new Aluno("Maria", 16, "Turma A");
const professor1 = new Professor("João", 35, "JavaScript");

// Usando métodos da classe pai e da classe filha
aluno1.apresentar();
aluno1.estudar();
console.log("-------------------");
professor1.apresentar();
professor1.ensinar();

console.log("Exemplo de herança finalizado!");