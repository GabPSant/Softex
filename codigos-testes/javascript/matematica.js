// Função para criar as operações matematicas
function operacoes(numero1, numero2, operacao){
  switch(operacao){
    case '+':
      return numero1+" + "+numero2+" = " + (numero1 + numero2);
    
    case '-':
    return numero1+" - "+numero2+" = " + (numero1 - numero2);

    case '*':
    return numero1+" * "+numero2+" = "+ (numero1*numero2);
    
    case '/':
    return numero1+"/"+numero2+" = " + (numero1/numero2);
  }
}

/*A ideia é criar um loop na parte no input de operação
* tentei fazer com regex, mas não deu muito resultado, vou melhor mais tarde
* tentar criar uma página com as operações, misturando JS,HTML e CSS.
*/
function questionamento(){
  let numero1, numero2;
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
  let operacao = "";
  while(true){
    operacao = prompt("Qual sera a operação do cálculo? (temos +, -, /, *)\nR:");
  if(!(operacao.match(/[(+|*|/)]/g) || operacao == '-')){
      alert("Essa operação não existe ou não está validada, tente novamente");
    }
    else{break;}
  }
  alert(operacoes(Number(numero1),Number(numero2),operacao))
}

questionamento();