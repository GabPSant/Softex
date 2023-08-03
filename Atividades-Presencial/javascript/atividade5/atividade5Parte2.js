// Questão 8 - funciona com o node
function ordenarValores(numero1, numero2, numero3){
    try{
        if(Number.isNaN(Number(numero1)) || Number.isNaN(Number(numero2)) || Number.isNaN(Number(numero3))){
            throw Error(console.log("Pelo menos um dos valores recebidos não é um número\n"));
        }
    }
    catch(error){
        return 1;
    }

    const lista = [Number(numero1), Number(numero2), Number(numero3)];
    lista.sort(); // Ordena a lista de forma crescente
    console.log(lista);
    lista.forEach((elemento) => {console.log(elemento);});
}
// ordenarValores(56,43,19.8);

// Questão 9 - é necessário usar o console do navegador
let getIMC = (peso, altura) => (peso/Math.pow(altura,2)).toFixed(1);

function classificacaoIMC(IMC){
    if(IMC<18.5){ return "Você está abaixo do peso";}
    else if(IMC>=18.5 && IMC<=24.9){ return "Você está com peso normal";}
    else if(IMC>=25 && IMC<=29.9){ return "Você está sobrepeso";}
    else if(IMC>=30 && IMC<=39.9){ return "Você está obeso";}
    else{ return "Você está muito obeso"}
}
function imc(){
    let peso, altura;
    while(true){
        peso = Number(prompt("Digite o seu peso (em quilogramas)"));
        try{
            if(Number.isNaN(peso) || peso>636 || peso<=0){ throw Error("Erro!")}
            break;
        }
        catch(error){alert("Esse valor não é válido, tente novamente")}
    }
    while(true){
        altura = Number(prompt("Digite sua altura (em metros)"));
        try{
            if(Number.isNaN(altura) || altura>2.73 || altura<=0){ throw Error("Erro!");}
            break;
        }
        catch(erro){alert("Esse valor não é válido, tente novamente")}
    }
    const IMC = getIMC(peso,altura);
    alert(`${classificacaoIMC(IMC)} (IMC: ${IMC})`);
}
//imc();

// Questão 10 - funciona com o node
function numeroMes(numero){
    switch(Number(numero)){
        case 1:
            console.log("Janeiro\n");
            break;
        case 2:
            console.log("Fevereiro\n");
            break;
        case 3:
            console.log("Março\n");
            break;
        case 4: 
            console.log("Abril\n");
            break;
        case 5: 
            console.log("Maio\n");
            break;
        case 6: 
            console.log("Junho\n");
            break;
        case 7:
            console.log("Julho\n");
            break;
        case 8:
            console.log("Agosto\n");
            break;
        case 9:
            console.log("Setembro\n");
            break;
        case 10:
            console.log("Outubro\n");
            break;
        case 11:
            console.log("Novembro\n");
            break;
        case 12:
            console.log("Dezembro\n");
            break;
        default:
            console.log("Esse valor não é válido, tente outro\n");
    }
}
//numeroMes(1.4);

// Questão 11 - funciona com o node
function aumentoSalarial(salario){
    try{
        if(String(salario).length == 0 || Number.isNaN(Number(salario))){ throw Error;}
    }
    catch(error){
        console.log("O valor usado não é valido");
        return 1;
    }
    console.log(`Salário: ${Number(salario).toFixed(2)}`);
    if(Number(salario) > 1500){ console.log(`Salário com aumento: ${(Number(salario)*1.1).toFixed(2)} (aumentou em 10%)`);}
    else{ console.log(`Salário com aumento: ${(Number(salario)*1.15).toFixed(2)} (aumentou em 15%)`);}
}
//aumentoSalarial(1600);

// Questão 12 - é necessário usar o console do navegador
function questao12(){// avalia se o valor recebido pelo usuário é divisivel por 3 e por 5;
    let numero;
    while(true){
        numero = Number(prompt("Digite um número"));
        try{
            if(Number.isNaN(numero)){throw Error("Erro!")}
            break;
        }
        catch(error){alert("Esse valor não é válido, tente novamente")}
    }
    if(numero%3 == 0 && numero%5 == 0){
        alert(`${numero}, é divísivel por 3 e por 5`);
    }
    else if(numero%3 == 0){
        alert(`${numero}, é divísivel por 3`);
    }
    else if(numero%5 == 0){
        alert(`${numero}, é divísivel por 5`);
    }
    else{ alert(`${numero}, não é divísivel por 3 ou por 5`);}
}
//questao12();

// Questão 13 - é necessário usar o console do navegador
function diaSemana(){
    const dia = prompt("Digite um dia da semana por extenso (Ex: segunda-feira, quarta-feira, domingo etc).")
    switch(dia.toLowerCase){
        case "segunda-feira":
        case "terça-feira":
        case "quarta-feira":
        case "quinta-feira":
        case "sexta-feira":
            alert(`${dia} é um dia util`);
            break;
        case "sabado":
        case "domingo":
            alert(`${dia} é um fim de semana`);
            break;
        default:
            alert("a frase recebida não é válida");
    }
}
//diaSemana();

// Questão 14 - é necessário usar o console do navegador
function questao14(){
    let resposta;
    
    while(!(resposta >0 && resposta<6)){
        resposta = Number(prompt("Digite um numero entre 1 e 5 (sendo '1' muito ruim e '5' muito bom)"))
        switch(resposta){
            case 1:
                alert("Muito insuficiênte (você odiou o produto, sentimos muito!)");
                break;
            case 2:
                alert("Insuficiênte (você não gostou do produto)");
                break;
            case 3:
                alert("Regular (a qualidade foi adequada)");
                break;
            case 4:
            alert("Bom (você gostou do produto)");
                break;
            case 5:
                alert("Muito bom (você adorou o produto, muito obrigado!)");
                break;
            default:
                alert("Essa resposta não é valida, tente novamente")
        }
    }
}
//questao14();