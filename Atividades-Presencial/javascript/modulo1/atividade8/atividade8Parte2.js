// Questão 10
const imposto = (valor, aliquota) => (valor * (aliquota / 100)).toFixed(3);

function calcularImpostoRenda(salarioBruto) {
  salarioBruto = Number(salarioBruto);
  if (Number.isNaN(salarioBruto)) return "Esse valor não é válido";
  if (salarioBruto <= 1903.98) return "O imposto está insento!";
  if (salarioBruto >= 1903.99 && salarioBruto <= 2826.65) {
    return `Com alicota de 7,5%, seu imposto de renda é ${imposto(
      salarioBruto,
      7.5
    )}\n`;
  }
  if (salarioBruto >= 2826.66 && salarioBruto <= 3751.05) {
    return `Com alicota de 15%, seu imposto de renda é ${imposto(
      salarioBruto,
      15
    )}\n`;
  }
  if (salarioBruto >= 3751.06 && salarioBruto <= 4664.68) {
    return `Com alicota de 22,5%, seu imposto de renda é ${imposto(
      salarioBruto,
      22.5
    )}\n`;
  } else {
    return `Com alicota de 27,5%, seu imposto de renda é ${imposto(
      salarioBruto,
      27.5
    )}\n`;
  }
}
//console.log(calcularImpostoRenda(5000));

// Questão 11
function calcularMediaArredondada(listaNumeros) {
  if (!Array.isArray(listaNumeros)) {
    return "Deve ser colocado uma lista de números na função";
  }
  let mediaArredondada = 0;
  for (const numero of listaNumeros) {
    mediaArredondada += numero;
  }
  mediaArredondada = Math.round(mediaArredondada / listaNumeros.length);
  return `números: ${listaNumeros}\nmédia dos valores (arredondada): ${mediaArredondada}`;
}
//console.log(calcularMediaArredondada([78,96,35,657.3]));

// Questão 12
function contarDigitosParesImpares(inteiro = 1010) {
  if (!Number.isInteger(Number(inteiro)))
    return "O parametro deve ser um valor inteiro";
  const pares = [],
    impares = [],
    digitos = String(inteiro).split("").map(Number);
  digitos.forEach((x) => {
    x % 2 === 0 ? pares.push(x) : impares.push(x);
  });
  return `Inteiro: ${inteiro}\nQuantidade de digitos pares: ${pares.length}\nQuantidade de digitos impares: ${impares.length}`;
}
//console.log(contarDigitosParesImpares());

// Questão 13
const alunosLista = [
  { nome: "Rodrigo", nota: 7.9 },
  { nome: "Miguel", nota: 4.5 },
  { nome: "Abraão", nota: 9.3 },
];
const getMedia = (notasTotal, quantidadeNotas) =>
  (notasTotal / quantidadeNotas).toFixed(2);

function calcularMediaAluno(alunosLista) {
  if (!Array.isArray(alunosLista))
    return "O parametro deve ser uma lista de alunos com suas notas";
  const alunos = [],
    notas = [];
  let soma = 0,
    frase = "";

  alunosLista.forEach((x) => {
    alunos.push(x.nome);
    notas.push(x.nota);
  });
  for (const nota of notas) soma += nota;
  for (i = 0; i < alunosLista.length; i++) {
    frase += `Aluno: ${alunos[i]} (Nota: ${notas[i].toFixed(2)})\n`;
  }

  return `${frase}Media geral: ${getMedia(soma, notas.length)}`;
}
//console.log(calcularMediaAluno(alunosLista));

// Questão 14
function calcularIdade(anoNascimento) {
  return `Você tem ${2023 - anoNascimento} anos de idade`;
}
//console.log(calcularIdade(2002));

// Questão 15
function gerarTabuada(numero) {
  numero = Number(numero);
  if (Number.isNaN(numero)) return "O valor do parametro deve ser um número";
  let tabuada = `Tabuada do ${numero}\n`;
  for (i = 0; i <= 10; i++) tabuada += `${numero} x ${i} = ${numero * i}\n`;
  return tabuada;
}
//console.log(gerarTabuada("5"));
