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
  alert("Operação matematica simples");
  let numero1 = prompt("Qual sera o primeiro valor?\nR:");
  let numero2 = prompt("Qual sera o segundo valor?\nR:");
  let operacao = "";
  while(true){
    operacao = prompt("Qual sera a operação do cálculo? (temos +, -, /, *)\nR:");
  if(!(operacao == "+"|| operacao == "-" || operacao == "*" || operacao == "/")){
      alert("Essa operação não existe ou não está validada, tente novamente");
    }
    else{break;}
  }
  alert(operacoes(numero1,numero2,operacao))
}

questionamento();