// Questão 19 - é necessário usar o console do navegador
function operacoes(numero1, numero2, operacao){
    switch(Number(operacao)){
      case 1:
        return numero1+" + "+numero2+" = " + (numero1 + numero2);
      
      case 2:
      return numero1+" - "+numero2+" = " + (numero1 - numero2);
  
      case 3:
      return numero1+" * "+numero2+" = "+ (numero1*numero2);
      
      case 4:
      return numero1+"/"+numero2+" = " + (numero1/numero2);
    }
}

function calculo(){
    let numero1, numero2, operacao;
    alert("Operação matematica simples");
    while(true){
    numero1 = prompt("Qual sera o primeiro valor?\nR:");
    numero2 = prompt("Qual sera o segundo valor?\nR:");
    try{
      if((Number.isNaN(Number(numero1))|| numero1 == "")|| (Number.isNaN(Number(numero2)) || numero2 == "")){throw Error("Erro!");}
      break;
    }
    catch(error){alert("Pelo menos um dos valores recebidos não é um numero, tente novamente");}
  }
  while(true){
    operacao = Number(prompt("Qual sera a operação do cálculo (digite o número)?\n1 - Soma\n2 - Subtração\n3 - Multiplicação\n4 - Divisão"));
  if(!(operacao == 1 || operacao == 2 || operacao == 3 || operacao == 4)){
      alert("Essa operação não existe ou não está validada, tente novamente");
    }
    else{break;}
  }
  alert(operacoes(Number(numero1),Number(numero2),operacao))
}
// calculo();

// Questão 20 - é necessário usar o console do navegador
function nomeIdade(){
    let nome, idade;
    while(true){
        nome = prompt("Digite o seu nome");
        try{
            if(!nome.match(/[a-z|A-Z]/g)){throw Error;}
            break;
        }
        catch(error){
            alert("Esse tipo de nome não é válido, não são aceitos números ou pontuação");
        }
    }
    while(true){
        idade = Number(prompt("Digite a sua idade"));
        try{
            if(Number.isNaN(idade) || !Number.isInteger(idade) || idade<0){throw Error;}
            break;
        }
        catch(error){
            alert("Não é aceito esse valor, por favor só coloque números inteiros posítivos")
        }
    }
    alert(`Nome: ${nome}\nIdade: ${idade} anos`);
}
// nomeIdade();

// Questão 21 - é necessário usar o console do navegador
let getCentimetros = (metros) => (metros*100);
let getMilimetros = (metros) => (metros*1000);
let getQuilometros = (metros) => (metros/1000).toFixed(3);

function conversor(){
    let metros;
    while(true){
        metros = parseFloat(prompt("Digite um número (ele é um valor em metros)"));
        try{
            if(Number.isNaN(metros) || metros <= 0){throw Error;}
            break;
        }
        catch(error){
            alert("Esse valor não é válido, tente outro");
        }
    }
    alert(`Valor: ${metros.toFixed(2)} metros
    \nConvertido (para centimetros): ${getCentimetros(metros)} centímetros.
    \nConvertido (para milimetros): ${getMilimetros(metros)} milímetros.
    \nConvertido (para quilometros): ${getQuilometros(metros)} quilometros.`);
}
conversor();