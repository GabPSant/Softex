// Questão 1
function repeticao() {
  console.log("Estudar é muito bom");
  console.log("Paciência é pesistência");
  console.log("Revisão é a mãe do aprendizado");

  console.log("Estudar é muito bom");
  console.log("Paciência é pesistência");
  console.log("Revisão é a mãe do aprendizado");

  console.log("Estudar é muito bom");
  console.log("Paciência é pesistência");
  console.log("Revisão é a mãe do aprendizado");
}
//repeticao();

// Questão 2
function criarFrases() {
  console.log("Estudar é muito bom");
  console.log("Paciência é pesistência");
  console.log("Revisão é a mãe do aprendizado");
}
/*
criarFrases();
criarFrases();
criarFrases();
*/

// Questão 3
function soma(a, b) {
  console.log(a + b);
}
/*
soma(10, 15);
soma(10, 20);
soma(30, 50);
soma(50, 50);
*/

// Questão 4
function questao4(num1, num2) {
  return num1 + num2;
}
/*
const teste1 = questao4(10, 15);
console.log(teste1);

const teste2 = questao4(10, 20) + soma(30, 50);
console.log(teste2);

console.log(questao4(50, 50));
*/

// Questão 5
function soma(x, y) {
  return x + y;
}
//console.log(soma(15, 65));

// Questão 6
function isPar(inteiro) {
  if (!Number.isInteger(Number(inteiro))) {
    return "O valor não é aceitavel, tente um número inteiro";
  }
  return Number(inteiro) % 2 === 0 ? true : false;
}
//console.log(isPar(8));

// Questão 7
function media(nota1, nota2, nota3) {
  if (
    Number.isNaN(Number(nota1)) ||
    Number.isNaN(Number(nota2)) ||
    Number.isNaN(Number(nota3))
  ) {
    return "Pelo menos um dos valores não é aceitavel!";
  }
  return ((nota1 + nota2 + nota3) / 3).toFixed(3);
}
//console.log(media(5, 7.5, 8));

// Questão 8
function imc(altura, peso) {
  altura = Number(altura);
  peso = Number(peso);
  if (Number.isInteger(altura) || !Number.isInteger(peso)) {
    return "Um dos valores não é válido";
  }
  const imc = peso / Math.pow(altura, 2);
  return `Seu IMC é ${imc.toFixed(2)}`;
}
//console.log(imc(1.72,77));

// Questão 9
function calcularDesconto(produto = 4000, percentualDesconto = 50) {
  produto = Number(produto);
  percentualDesconto = Number(percentualDesconto);
  if (
    Number.isNaN(produto) ||
    Number.isNaN(percentualDesconto) ||
    (percentualDesconto <= 0 && percentualDesconto > 100)
  ) {
    return "Ou o valor não é aceitável ou o percentual está alem do limite (0% a 100%)";
  }
  const produtoDesconto = (produto * (percentualDesconto / 100)).toFixed(3);
  return `Seu desconto seria ${percentualDesconto}% para o produto de valor ${produto}\nCusto final do produto: ${produtoDesconto}`;
}
//console.log(calcularDesconto(800000,75));
