/*
// Questão 23
const cidade = prompt("Digite a sua cidade")
alert((cidade.charAt(0) == 'R')? "Sua cidade começa com a letra 'R'": "Sua cidade não começa com a letra 'R'")

// Questão 24
const decimal1 = prompt("Digite o primeiro valor decimal")
const decimal2 = prompt("Digite o segundo valor decimal")
alert(`O resto da divisão é ${(parseFloat(decimal1)%parseFloat(decimal2)).toFixed(1)} (${decimal1}/${decimal2})`)

// Questão 25
const decimal = prompt("Digite um numero decimal")
alert(`Convertido para numero inteiro: ${parseInt(decimal)}`)
console.log(parseInt(decimal))

// Questão 26
let inteiro = prompt("Digite um valor inteiro")
inteiro = parseInt(inteiro) + 10
console.log(typeof inteiro)
inteiro = String(inteiro)
console.log(typeof inteiro)
alert(String(inteiro))

// Questão 27
const data = prompt("Digite uma data (Formato: dd/mm/aa)")
const valores = data.split("/")
for(i = 0; i<3;i++){
    valores[i] = Number(valores[i])
    console.log(typeof valores[i])
}
alert(`Dia: ${valores[0]}\nMês: ${valores[1]}\nAno: ${valores[2]}`)

// Questão 28
const cidade = prompt("Digite o nome de sua cidade")
const estado = prompt("Digite o nome de seu estado")
alert(`Você mora em ${cidade}, ${estado}`)

// Questão 29
const anoNascimento = prompt("Digite seu ano de nascimento")
alert(`Bem-vindo ao nosso programa, nascido em ${anoNascimento}`)

// Questão 30
const inteiro = prompt("Digite um numero inteiro")
const frase = prompt("Digite uma frase")
alert(`${frase} ${inteiro}`)

// Questão 31
const produto = prompt("Digite um produto")
alert(`${produto}, preço: R$ ${((Math.random()*20)+1.0).toFixed(2)}`)

// Questão 32
const inteiro = prompt("Digite um valor inteiro")
alert(`O dobro de ${inteiro} é ${(parseInt(inteiro)*2)}`)

// Questão 33
const email = prompt("Digite o seu e-mail")
alert(`Agradecemos por sua doação, ${email}!`)

// Questão 34
const inteiro1 = prompt("Digite o primeiro valor inteiro")
const inteiro2 = prompt("Digite o segundo valor inteiro")
alert(`soma = ${(parseInt(inteiro1) + parseInt(inteiro2))}\nsubtração = ${(parseInt(inteiro1) - parseInt(inteiro2))}
multiplicação = ${(parseInt(inteiro1) * parseInt(inteiro2))}\ndivisão = ${(parseInt(inteiro1)/parseInt(inteiro2)).toFixed(2)}`)

// Questão 35
alert("Cálculo da área de um triangulo")
const base = prompt("Digite a base do triangulo")
const altura = prompt("Digite a altura do triangulo")
alert(`A area do triangulo é ${((parseFloat(base)*parseFloat(altura)/2)).toFixed(2)} (${base}*${altura}/2)`)

//Questão 36
alert("Cálculo do perímetro de um círculo")
const  raio = prompt("Digite o raio do círculo")
alert(`O perimetro é ${(parseFloat(raio)*Math.PI*2).toFixed(2)} (formula: 2*${Math.PI.toFixed(2)}*${raio})`)

// Questão 37
alert("Cálculo do perímetro de um retangulo")
const base = prompt("Digite a base do triangulo")
const altura = prompt("Digite a altura do triangulo")
alert(`O perímetro é ${((parseFloat(base)+parseFloat(altura))*2).toFixed(2)} (formula: 2*(${base}+${altura}))`)

// Questão 38
const lista = []
let media = 0
for(i = 0; i<3;i++){
    lista[i] = prompt(`Digite um numero decimal (faça isso ${3-(i)} ${(i == 2)?"vez":"vezes"})`)
    lista[i] = parseFloat(lista[i])
    media += lista[i]
}
media = media/lista.length
alert(`A media dos valores é ${media.toFixed(2)} (formula: ${lista[0]} + ${lista[1]}+ ${lista[2]}/${lista.length})`)

// Questão 39
let idade = prompt("Digite a sua idade")
idade = parseInt(idade)
const dias = (idade) => idade*365
const meses = (idade) => idade*12
alert(`Você está vivo à ${dias(idade)} dias ou ${meses(idade)} meses, aproximadamente`)

// Questão 40
const reais = prompt("Digite um valor (esse valor sera avaliado em reais)")
const cotacao = prompt("Digite a contação de real para dolar")
alert(`R$ ${parseFloat(reais).toFixed(2)} -> $ ${(parseFloat(reais)/parseFloat(cotacao)).toFixed(2)}`)

// Questão 41
let decimal = prompt("Digite um numer decimal")
decimal = parseFloat(decimal)
alert(`Ao arredondar ${decimal} conseguimos ${Math.round(decimal)}`)

// Questão 42
const lista = []
for(i = 0; i<3;i++){
    lista[i] = prompt(`Digite um numero inteiro (faça isso ${3-(i)} ${(i == 2)?"vez":"vezes"})`)
    lista[i] = parseFloat(lista[i])
}
const calculo = (lista[0]+lista[1])*lista[2]
alert(`Resultado = ${calculo.toFixed(2)} (formula: (${lista[0].toFixed(2)} + ${lista[1].toFixed(2)}) * ${lista[2].toFixed(2)})`)

// Questão 43
const celsius = prompt("Digite um valor (representa a temperatura em Celsius")
const fahrenheit = (parseFloat(celsius)*9/5)+32
alert(`${parseFloat(celsius).toFixed(2)} ºC --> ${fahrenheit.toFixed(2)} ºF (Conversão: Celsius --> Fahrenheit)`)
*/