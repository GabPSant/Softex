// Questão 1 - funciona usando node
//const inteiro = Number(prompt("Digite um número inteiro"));
function questao1(inteiro){//Diz se o valor digitado é positivo, negativo ou neutro
    if(inteiro>0){
        alert(`O valor digitado (${inteiro}) é positivo`)
    }
    else if(inteiro<0){
        alert(`O valor digitado (${inteiro}) é negativo`);
    }
    else{ alert("O valor digitado é zero");}
}
//questao1(inteiro);

// Questão 2 - funciona usando node
function maiorDeIdade(idade){// Diz se alguem é menor ou maior de idade
    if(idade<0){
        console.log("Você não tem idade negativa");
    }
    if(idade>=18){
        console.log("Você é maior de idade");
    }
    else{ console.log("Você é menor de idade");}
}
// maiorDeIdade(-7);

// Questão 3 - é necessário usar no console web
function questao3(){// Avalia qual entre dois números é maior
    const inteiro1 = Number(prompt("Digite o primeiro inteiro"));
    const inteiro2 = Number(prompt("Digite o segundo inteiro"));
    
    if(inteiro1 > inteiro2){
        alert(`${inteiro1} é maior que ${inteiro2}`);
    }
    else if(inteiro1 == inteiro2){
        alert(`${inteiro1} é  igual a ${inteiro2}`);
    }
    else{ alert(`${inteiro2} é maior que ${inteiro1}`);}
}
// questao3();

// Questão 4 - é necessário usar no console web
function questao4(){// Retorna se um número é par ou impar
    const numero = parseInt(prompt("Digite um numero"));
    if(Number.isNaN(numero)){//testa se o valor não é um numero
        alert("O valor é invalido")
    }
    else{alert((numero%2==0)?`${numero} é par`:`${numero} é ímpar`);}
}
// questao4();

// Questão 5 - é necessário fazer no console web
let getMedia = (x,y,z) => (x+y+z)/3 // calculo para a media de 3 valores
function questao5(){
    // Diz se um aluno está aprovado, em relação a media de 3 notas
    const nota1 = parseFloat(prompt("Digite a primeira nota"));
    const nota2 = parseFloat(prompt("Digite a segunda nota"));
    const nota3 = parseFloat(prompt("Digite a terceira nota"));
    
    if(Number.isNaN(nota1) || Number.isNaN(nota2) || Number.isNaN(nota3)){
        alert("Pelo menos uma das notas não é valida");
    }
    else{
        const media = getMedia(nota1,nota2,nota3);
        if(media>=7){
            alert(`Você está aprovado (media: ${media.toFixed(2)})`);
        }
        else{ alert(`Você está reprovado (media: ${media.toFixed(2)})`);}
    }
}
// questao5();

// Questão 6 - funciona usando node
function questao6(pessoa1, pessoa2){
    // Avalia qual nome de duas pessoas é maior, tem mais letras
    if(String(pessoa1).length == String(pessoa2).length){
        console.log("Ambas as strings tem mesmo tamanho");
    }
    else{
        console.log((String(pessoa1).length>String(pessoa2).length)?
        `${pessoa1} é maior que ${pessoa2}`:`${pessoa2} é maior que ${pessoa1}`);
    }
}
// questao6("Miguel","Rafael");

// Questão 7 - (testar) é necessário fazer no console web
function questao7(){
    // Avalia se um caracter é vogal
    let caracter;
    while(true){
        caracter = prompt("Digite um caracter (deve ser uma letra)");
        try{
            if(caracter.length>=2){throw Error("Deve ser somente um caractere");}
            if(!Number.isNaN(Number(caracter))){throw Error("É um número, não vale")}
            break;
        }
        catch(error){alert("Esse valor não é valido");}
    }
    alert((caracter.match(/[(a|e|i|o|u)]/g)?`${caracter} é vogal`:`${caracter} não é vogal`));
}
// questao7();