// Função para criar as operações matematicas
function operacoes(numero1, numero2, operacao){
  switch(operacao){
    case '+':
      return numero1+" + "+numero2+" = " + (numero1 + numero2);
      break;
    
    case '-':
    return numero1+" - "+numero2+" = " + (numero1 - numero2);
    break;

    case '*':
    return numero1+" * "+numero2+" = "+ (numero1*numero2);
    break;

    case '/':
    return numero1+"/"+numero2+" = " + (numero1/numero2);
    break;
  }
}

/*A ideia é criar um loop na parte no input de operação, ainda tenho que fazer
*
*/
function questionamento(){
  console.log("Operação matematica simples\nQual sera o primeiro valor?\nR:");
  let numero1 = prompt("Qual sera o primeiro valor?\nR:");
  let numero2 = prompt("Qual sera o segundo valor?\nR:");
  let operacao = "";
  while(true){
    operacao = prompt("Qual sera a operação do cálculo? (temos +, -, /, *)\nR:");
    if(!(operacao.match(/[+-!*]/))){
      console.log("Essa operação não existe ou não está validada, tente novamente");
    }
    else{break;}
  }
  console.log(operacoes(numero1,numero2,operacao))
}

questionamento();