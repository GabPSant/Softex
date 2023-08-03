// Questão 15 - é necessário usar o console do navegador
function diaDaSemana(){
    let resposta;
    
    while(!(resposta >0 && resposta<8)){
        resposta = Number(prompt("Digite um numero entre 1 e 7 (cada número representa um dia da semana)"))
        switch(resposta){
            case 1:
                alert("Domingo");
                break;
            case 2:
                alert("Segunda-feira");
                break;
            case 3:
                alert("Terça-feira)");
                break;
            case 4:
                alert("Quarta-feira");
                break;
            case 5:
                alert("Quinta-feira");
                break;
            case 6:
                alert("Sexta-feira");
                break;
            case 7:
                alert("Sábado");
                break;
            default:
                alert("Essa resposta não é valida, tente novamente")
        }
    }
}
//diaDaSemana();

// Questão 16 - é necessário usar o console do navegador
function arredondar(){
    let decimal;
    while(true){
        decimal = Number(prompt("Digite um valor real"));
        try{
            if(Number.isNaN(decimal) || Number.isInteger(decimal)){throw Error;}
            break;
        }
        catch(error){alert("Esse valor não é aceitável");}
    }
    alert(`Ao arrendondar ${decimal.toFixed(3)}, recebemos ${Math.round(decimal).toFixed(0)}`);
}
//arredondar();

// Questão 17 - funciona com o node
function verificarIdade(idade){
    idade = Number(idade);
    if(Number.isNaN(idade) || !Number.isInteger(idade) || idade<0){
        console.log("Esse valor não é valido\n");
    }
    else{
        if(idade>=0 && idade<2){
            console.log("Você é um bebê\n");
        }
        else if(idade>=2 && idade<13){
            console.log("Você é uma criança\n");
        }
        else if(idade>=13 && idade<18){
            console.log("Você é um adolecente\n");
        }
        else{
            console.log("Você é um adulto\n")
        }
    }
}
//verificarIdade(18)

// Questão 18 - é necessário usar o console do navegador
function estadoCivil(){
    let estado;
    const estados = ["solteiro","casado","divorciado","viuvo"];
    while(!(estado == estados[0] || estado == estados[1] || estado == estados[2] || estado == estados[3])){
        estado = prompt("Digite seu estado cívil (solteiro, casado, divorciado ou viuvo)");
        switch(estado){
            case "solteiro":
                alert("Você está solteiro (Ok)");
                break;
            case "casado":
                alert("Você está casado (espero que esteja feliz)");
                break;
            case "divorciado":
                alert("Você está divorciado (dependo de como foi o casamento, receba meus pesámes ou parabéns");
                break;
            case "viuvo":
                alert("Você esta viúvo (meus pesámes por sua perda)");
                break;
            default:
                alert("Essa resposta não é valida");
        }
    }
}
// estadoCivil();