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
function soma(a: number, b: number) {
  console.log(a + b);
}
/*
  soma(10, 15);
  soma(10, 20);
  soma(30, 50);
  soma(50, 50);
*/

// Questão 4
function questao4(num1: number, num2: number): number {
  return num1 + num2;
}
/*
    const teste1: number = questao4(10, 15);
    console.log(teste1);

    const teste2: number = questao4(10, 20) + somaRetorno(30, 50);
    console.log(teste2);

    console.log(questao4(50, 50));
*/

// Questão 5
function somaRetorno(x: number, y: number): number {
  return x + y;
}
//console.log(somaRetorno(15, 65));

// Questão 6
function isPar(inteiro: number) {
  return inteiro % 2 === 0 ? true : false;
}
//console.log(isPar(8));

// Questão 7
function media(nota1: number, nota2: number, nota3: number) {
  return ((nota1 + nota2 + nota3) / 3).toFixed(3);
}
//console.log(media(5, 7.5, 8));

// Questão 8
function imc(altura: number, peso: number) {
  if (Number.isInteger(altura) || !Number.isInteger(peso)) {
    return "Um dos valores não é válido";
  }
  const imc = peso / Math.pow(altura, 2);
  return `Seu IMC é ${imc.toFixed(2)}`;
}
//console.log(imc(1.72,77));

// Questão 9
function calcularDesconto(
  produto: number = 4000,
  percentualDesconto: number = 50
) {
  const produtoDesconto = (produto * (percentualDesconto / 100)).toFixed(2);
  return `Seu desconto seria ${percentualDesconto}% para o produto de valor ${produto}\nCusto final do produto: ${produtoDesconto}`;
}
//console.log(calcularDesconto(80000, 75));
