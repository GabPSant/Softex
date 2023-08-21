// Questões para tipos String
// Questão 1
const nome = "Gabriel";
console.log("String:\n\nNome: " + nome);

// Questão 2
const frase = "Não basta termos um bom espírito, o mais importante é aplicá-lo bem (Rene Descartes)";
console.log("Frase: " +frase)

// Questão 3
const palavra = "Catábase";
console.log("Palavra: " + palavra);

// Questão 4
const fraseNova = "É sobretudo na solidão que se sente a vantagem de viver com alguém que saiba pensar. (Jean-Jacques Rousseau)"
console.log(fraseNova.toUpperCase());

// Questão 5
let endereco = "Rua do Velho Guarda";
console.log("Antiga rua: " + endereco);
endereco = "Rua do Novo Guarda";
console.log("Nova rua: " + endereco);

//Questões para tipos Integer e Float
// Questão 1
const PI = 3.14159

// Questão 2
const y = PI

// Questão 3
const taxaJuros = 0.05

// Questão 4
const x = 5, z = 7

// Questão 5
console.log("\nInteger e Double:\n\nsoma = " + (x+z))

// Questão 6
console.log("subtração = " + (x-z))

// Questão 7
console.log("multiplicação = " + (x*z))

// Questão 8
console.log("divisão = " + (x/z).toFixed(3))

//Questões para tipos Booleanos
// Questão 1
const estaChovendo = false

// Questão 2
const verdadeiro = true

// Questão 3
const falso = false

// Questão 4
console.log("\nBoolean:\nO verdadeiro é igual ao falso? R: " + (verdadeiro == falso))

// Questão 5
function ambiente(temperatura){
    if(temperatura > 30){
         return "A temperatura é maior que 30ºC"
    }
    return "A temperatura é menor que 30ºC"
}
console.log(ambiente(20))

// Questão 6
const resultado = 10>5
console.log("resultado = "+resultado)

// Questão 7
const teste = 25<15
console.log("teste = " + teste)

//Questões para tipos Objeto
// Questão 1
let pessoa = {nome: "Matheus", idade: 63, endereco: "Rua do Grande Hamna"}

// Questão 2
console.log("\nObjeto:\nnome da pessoa: " + pessoa.nome)

// Questão 3
pessoa.profissao = "construtor"
console.log(pessoa)

// Questão 4
pessoa.idade = 78
console.log("Idade da pessoa: " + pessoa.idade)

// Questão 5
const animal = {nome: "Dragão-de-komodo", especie: "Répteis", cor: "Marrom"}

// Questão 6
const livro = {titulo: "Duna", autor: "Frank Herbert", ano: 1965}

// Questão 7
console.log("Autor de Duna: " + livro.autor)

// Questão 8
livro.ano = 1966
console.log("Ano de premissão do livro Duna: " + livro.ano)

// Questão 9
delete(livro.titulo) // Deleta qualquer variável
console.log(livro)

// Questão 10
const carro = {marca: "Chevrolet", modelo: "ONIX Plus", ano: 2021 }
console.log(carro)

// Questão 11
carro.modelo = undefined
console.log(carro)