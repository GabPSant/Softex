// Questão 16 - A função adivinheNumero() por usar comandos como alert e prompt causa erro ao tentar rodar o código, por isso
// Vai ficar em formato de comentário no arquivo
/*

function adivinheNumero() {
  const numeroCerto: number = Math.floor(Math.random() * 100) + 1;
  let contador: number = 0,
    frase: string = "Digite um valor inteiro (entre 1 e 100)",
    resposta: number = 0;
  alert(
    "Jogo do número aleátorio! \nTente adivinhar o número secreto\n(Dica: ele está entre 1 e 100)"
  );
  while (true) {
    resposta = Number(prompt(frase + `\nTentativa: ${contador + 1}`));
    if (Number.isNaN(resposta) || !Number.isInteger(resposta)) {
      alert("O valor usado não é válido");
    } else {
      contador++;
      if (resposta < 0 || resposta > 100) {
        frase = `${resposta} não é um valor adequado (você não recebe dica)`;
      } else if (resposta > numeroCerto) {
        frase = `O valor secreto é menor que ${resposta}`;
      } else if (resposta < numeroCerto) {
        frase = `O valor secreto é maior que ${resposta}`;
      } else break;
    }
  }
  console.log(numeroCerto, contador);
  alert(`Parabéns! A resposta era ${numeroCerto}\nTentativas: ${contador}`);

}*/
//adivinheNumero();

// Questão 17
const verificarPropriedade = (objeto: object, frase: string) => {
  return Object(objeto).hasOwnProperty(frase);
};
const objeto:object = { nome: "João", voz: "Grossa", idade: 423 };
//console.log(verificarPropriedade(objeto, "profissão"));

// Questão 18
function calcularPrecoProduto(
  valorCusto: number,
  margemLucro: number,
  valorFrete: number
): number {
  return valorCusto + (valorCusto * margemLucro) / 100 + valorFrete;
}
//console.log(calcularPrecoProduto(3470, 35, 1000));

// Questão 19
function maiorPalavra(frase: string): string {
  const palavras = frase.split(" ");
  let maiorPalavra = "";
  console.log(palavras);
  for (const palavra of palavras) {
    if (palavra.length > maiorPalavra.length) maiorPalavra = palavra;
  }
  return maiorPalavra;
}
//console.log(maiorPalavra("O mundo é um livro, e quem fica sentado em casa lê somente uma página."));

// Questão 20
const listaPalavras = ["Hello", "World", "in", "a", "frame"];

function caixaPalavras(listaPalavras: string[]) {
  let maiorPalavra = "";
  listaPalavras.forEach((x) => {
    if (x.length > maiorPalavra.length) maiorPalavra = x;
  });
  console.log("*".repeat(maiorPalavra.length + 4));
  for (const palavra of listaPalavras) {
    console.log(
      "* " + palavra + " ".repeat(maiorPalavra.length - palavra.length) + " *"
    );
  }
  console.log("*".repeat(maiorPalavra.length + 4));
}
//caixaPalavras(listaPalavras);

// Questão 21
const palavras = [
  "palavras",
  "Palavras",
  "pequenas",
  "Grandes",
  "MEDIAS",
  "dois",
  "um",
  "mais",
];

function stringsCincoOuMais(arrayStrings: string[]): string[] {
  let stringsMais5: string[] = [];
  for (const frase of arrayStrings) {
    if (frase.length >= 5) stringsMais5.push(frase);
  }
  return stringsMais5;
}
//console.log(stringsCincoOuMais(palavras));

// Questão 22
let livros: { titulo: string; autor: string; ano: number }[] = [],
  i = 1;
for (let index: number = 1; index <= 100; index++) {
  livros.push({
    titulo: `Livro ${index}`,
    autor: `Autor ${i}`,
    ano: 1922 + index,
  });
  if (index % 10 === 0) i++;
}
function livrosDeCertoAutor(
  livros: { titulo: string; autor: string; ano: number }[],
  autor: string
) {
  let livrosAutor: { titulo: string; autor: string; ano: number }[] = [];
  for (const livro of livros) {
    if (livro.autor === autor) livrosAutor.push(livro);
  }
  return livrosAutor;
}
//console.log(livrosDeCertoAutor(livros, "Autor 3"));
