/*
// Questão 1
const frase = prompt("Entre a primeira frase")
console.log(frase)

// Questão 2
const texto = "123"
console.log(typeof Number(texto))

const numero = 321
console.log(typeof String(numero))

// Questão 3
const numero1 = prompt("Digite o primeiro numero")
const numero2 = prompt("Digite o segundo numero")

const resultado = Number(numero1) + Number(numero1)
console.log(resultado)

// Questão 4
const texto1 = "Estudar"
const texto2 = "é bom"
console.log(`${(texto1 + texto2)}`)

const numero3 = 48
console.log("[variação] " + texto1 + " " + texto2 + " " + numero3)

// Questão 5
const nome = prompt("Digite o seu nome")
alert(`Bem vindo ${nome}`)

// Questão 6
const idade = prompt("Digite a sua idade")
console.log(parseInt(idade))

// Questão 7
const valor = prompt("Me passe um valor inteiro")
console.log(parseFloat(valor))

// Questão 8
const inteiro1 = prompt("Digite o primeiro valor inteiro")
const inteiro2 = prompt("Digite o segundo valor inteiro")
alert(`${inteiro1} + ${inteiro2} = ${(parseInt(inteiro1) + parseInt(inteiro2))}`)

// Questão 9
const decimal = prompt("Digite um numero decimal")
alert(`O quadrado de ${decimal} é ${(Math.pow(parseFloat(decimal),2).toFixed(2))}`)

// Questão 10
const anoNascimento = prompt("Digite o ano em que você nasceu")
alert(`Você tem ${2023 - parseInt(anoNascimento)} anos`)

// Questão 11
const primeiroNome = prompt("Digite o seu primeiro nome")
const sobrenome = prompt("Digite o seu sobrenome")
alert(`Seu nome é ${primeiroNome} ${sobrenome}`)

// Questão 12
const numeros = prompt("Digite quantos numeros quiser, separe por espaço")
alert(`Você digitou ${(numeros.split(" ")).length}`)

// Questão 13
const animal = prompt("Digite o nome de um animal")
alert(`Voce digitou o animal: ${animal}`)

// Questão 14
const nome = prompt("Digite o seu primeiro nome")
const sobrenome = prompt("Digite o seu sobrenome")
alert(`Estilo Japonês: ${sobrenome} ${nome}`)

// Questão 15
const frase = prompt("Digite qualquer coisa, sério")
alert(`O tamanho da sua frase é ${frase.length}`)

// Questão 16
const numero = prompt("Digite um valor inteiro")
alert((parseInt(numero)%2 == 0)? `${Number(numero)} é par`:`${Number(numero)} é impar`)

// Questão 17
const numero = prompt("Digite um numero qualquer")
alert((parseFloat(numero) > 0)? `${numero} é positivo`:`${numero} é negativo`)

// Questão 18 
const numero1 = prompt("Digite um valor qualquer")
const numero2 = prompt("Digite outro valor qualquer")
alert((parseFloat(numero1) > parseFloat(numero2))? `${numero1} é o maior`:`${numero2} é o maior`)

// Questão 19
const altura = prompt("Digite a sua altura")
const peso = prompt("Digite o seu peso")
alert(`Seu IMC é ${(parseFloat(peso)/Math.pow(parseFloat(altura),2)).toFixed(2)}`)

// Questão 20
const nome = prompt("Digite o seu nome")
alert(`Seu nome tem ${(nome.length>5)?"mais que 5 letras":"menos que 5 letras"}`)

// Questão 21
const estadoCivil = prompt("Digite seu estado cívil")
alert(`Você é ${estadoCivil}`)

// Questão 22
alert("Processo para calcular a área de um retangulo")
const base = prompt("Digite o valor da base")
const altura = prompt("Digite o valor da altura")
alert(`A área do retangulo é ${(parseFloat(base)*parseFloat(altura)).toFixed(2)} (${base} x ${altura})`)
*/