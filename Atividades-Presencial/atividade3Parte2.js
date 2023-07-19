// Questões para outros tipos de variáveis
// Questão 1
const variavelNull = null

// Questão 2
let variavelUndefined

// Questão 3
console.log("\nOutros tipos de variáveis:\nvariavelNull = " + variavelNull)

// Questão 4
console.log("variavelUndefined = " + variavelUndefined)

// Questão 5
const objeto = {}
objeto.nome = undefined
console.log(objeto)

// Questões para Arrays
// Questão 1
const numeros = []

// Questão 2
numeros.push(1,2,3,4)

// Questão 3
console.log("\nArrays:\nValor na posição 2: "+numeros[1])

// Questão 4
numeros[2] = 10
console.log(numeros)

// Questão 5
numeros.pop()
console.log(numeros)

// Questão 6
console.log("Tamanho do Array: " + numeros.length)

// Questão 7
const frutas = ["maça","banana","laranja"]

// Questão 8
console.log("Primeiro elemento das frutas: " + frutas[0])

// Questão 9
frutas.push("uva")
console.log(frutas)

// Questão 10
const aluno = {nome: "Rodrigo", idade: 17}
const alunos = [aluno]

// Questão 11
console.log(alunos[0].nome)

// Questão 12
alunos.push({nome: "Vicente", idade: 15}, {nome: "Jesus", idade: 19}, {nome: "Valdir", idade: 20})

// Questão 13
const produtos = ["manteiga","chocolate","mangas","cenouras","leite","batatas","pratos","jogos","aneis","colares"]
for(let i = 0; i<produtos.length; i++){
    if(i%2 == 0){console.log(produtos[i])}
}

//Questões para Typeof
// Questão 1
const numero = 5
console.log("\nTypeof:\nnumero = " + typeof(numero))

// Questão 2
const texto = "É, isso tem texto"
console.log("texto = "+typeof(texto))

// Questão 3
const bool = true
console.log("bool = " + typeof(bool))

// Questão 4
const array = []
console.log("array = " + typeof(array))

// Questão 5
const Objeto = {}
console.log("Objeto = " + typeof(Objeto))

// Questão 6
const nulo = null
console.log("nulo = " + typeof(nulo))

// Questão 7
const indefinido = undefined
console.log("indefinido = " + typeof(indefinido))

//Questões para Operadores Lógicos
// Questão 1
function igualdade(x,y){
    if(x == y){ return true}
    return false
}
console.log("\nOperadores Lógicos\n igualdade: " + igualdade(5,5))

// Questão 2
function diferenca(x,y){
    if(x != y){ return true}
    return false
}
console.log("diferença: " + diferenca(5,5))

// Questão 3
function maior(x,y){
    if(x>y){ return true}
    return false
}
console.log("maior que: " + maior(4,7))

// Questão 4
function menor(x,y){
    if(x<y){ return true}
    return false
}
console.log("menor que: " + menor(4,7))

// Questão 5
function maiorIgual(x,y){
    if(x>=y){ return true}
    return false
}
console.log("maior ou igual que: " + maiorIgual(9,6))

// Questão 6
function menorIgual(x,y){
    if(x<=y){ return true}
    return false
}
console.log("menor ou igual que: " + menorIgual(9,6))

// Questão 7
function AND(x,y){
    if(typeof(x) == "boolean" && typeof(y) == "boolean"){
        return x&&y
    }
    return false
}
console.log("condição AND: " + AND(true,false))

// Questão 8
function OR(x,y){
    if(typeof(x) == "boolean" || typeof(y) == "boolean"){
        return x||y
    }
    return false
}
console.log("condição OR: " + OR(true,false))

// Questão 9
function NOT(x){
    if(typeof(x) == "boolean"){
        return !x
    }
}
console.log("condição NOT: " + NOT(true))

// Questão 10
function entre(x,y){
    if(x>=0 && x<=y){ return x + " é um valor positivo menor do que " + y}
    return x + " é um valor negativo ou é maior que " + y
}
console.log("Entre: " + entre(5,15))

// Questão 11
function foraDoLimite(x,y,z){
    if(z<x || y>z){ return z + " não é um valor entre " + x + " e " + y}
    return z + " é um valor entre " + x + " e " + y
}
console.log("Fora do limite: " + foraDoLimite(5,20,-4))

// Questão 12
function positivo(x){
    if(x>=0){ return x + " é um valor positivo"}
    return x + " não é um valor positivo"
}
console.log("Valores positivos: " + positivo(-9))

// Questão 13
function textoVazio(x){
    if(typeof(x) == "string"){
        if(x.length == 0){return " o texto está vázio"}
        return "o texto não está vázio"
    }
}
console.log("String vazia: " + textoVazio("não está vázio"))

// Questão 14
function eBoolean(x){
    if(typeof(x) == "boolean"){ return true}
    return false
}
console.log("É um valor booleano: " + eBoolean(false))