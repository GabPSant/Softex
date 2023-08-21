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
