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