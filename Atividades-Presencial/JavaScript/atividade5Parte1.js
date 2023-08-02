// Questão 1 - funciona usando node
//const inteiro = Number(prompt("Digite um número inteiro"));
function questao1(inteiro){
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
function maiorDeIdade(idade){
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
function questao3(){
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
function questao4(){
    const numero = parseInt(prompt("Digite um numero"));
    if(Number.isNaN(numero)){//testa se o valor não é um numero
        alert("O valor é invalido")
    }
    else{alert((numero%2==0)?`${numero} é par`:`${numero} é ímpar`);}
}
// questao4();

// Questão 5 - é necessário fazer no console web
let getMedia = (x,y,z) => (x+y+z)/3
function questao5(){
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
function questao6(p1, p2){
    if(String(p1).length == String(p2).length){
        console.log("Ambas as strings tem mesmo tamanho");
    }
    else{
        console.log((String(p1).length>String(p2).length)?
        `${p1} é maior que ${p2}`:`${p2} é maior que ${p1}`);
    }
}
// questao6("Maior","Melhor");

// Questão 7 - (testar) é necessário fazer no console web
function questao7(){
    while(true){
        const caracter = prompt("Digite um caracter (deve ser uma letra)");
        try{
            if(caracter.length>=2){throw Error("Deve ser somente um caractere");}
            if(!Number.isNaN(Number(caracter))){throw Error("É um número, não vale")}
        }
        catch(error){alert("Esse valor não é valido");}
        break;
    }
    alert((caracter.match(/[(a|e|i|o|u)]/g)?`${caracter} é vogal`:`${caracter} não é vogal`));
}