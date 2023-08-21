// Questão 16
function adivinheNumero() {
  const numeroCerto = Math.floor(Math.random() * 100) + 1;
  let contador = 0,
    frase = "Digite um valor inteiro (entre 1 e 100)",
    resposta;
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
}
//adivinheNumero();

// Questão 17
const verificarPropriedade = (objeto, frase) => {
  if (typeof objeto !== "object" || typeof frase !== "string") {
    return "Pelo menos um dos parametros está incorreto";
  }
  return Object(objeto).hasOwnProperty(frase);
};
const objeto = { nome: "João", voz: "Grossa", idade: 423 };
//console.log(verificarPropriedade(objeto, "profissão"));

// Questão 18
function calcularPrecoProduto(valorCusto, margemLucro, valorFrete) {
  if (typeof(valorCusto) !== "number" ||typeof(margemLucro) !== "number" ||typeof(valorFrete) !== "number") {
    return "Pelo menos um dos valores não é aceitavel";
  }
  return valorCusto + (valorCusto * margemLucro) / 100 + valorFrete;
}
//console.log(calcularPrecoProduto(3470, 35, 1000));

// Questão 19
function maiorPalavra(frase) {
  if (typeof frase !== "string") return "Só são aceitos strings";
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

function caixaPalavras(listaPalavras) {
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
const palavras = ["palavras","Palavras","pequenas","Grandes","MEDIAS","dois","um","mais"];

function stringsCincoOuMais(arrayStrings){
  let stringsMais5 = [];
  for(const string of arrayStrings){
    if(string.length >= 5) stringsMais5.push(string);
  }
  return stringsMais5;
}
//console.log(stringsCincoOuMais(palavras));

// Questão 22
let livros = [], i = 1;
for(index = 1; index<=100; index++){
  livros.push({
    titulo: `Livro ${index}`,
    autor: `Autor ${i}`,
    ano: 1922 + index
  });
  if(index%10 === 0) i++;
}
function livrosDeCertoAutor(livros, autor){
  let livrosAutor = [];
  for(const livro of livros){
    if(livro.autor === autor) livrosAutor.push(livro);
  }
  return livrosAutor;
}
//console.log(livrosDeCertoAutor(livros,"Autor 3"));