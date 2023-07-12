const { read } = require('fs');

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

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
  var valor1, valor2, operacao;
  readline.question("Qual sera o primeiro valor?\n", valor =>{
    valor1 = valor;
    readline.close
  })
  readline.question("Qual sera o segundo valor?\n", valor =>{
    valor2 = valor;
    readline.close
  })
  /*
  readline.question("Qual sera a operação?\nR: ", operacao =>{

  })
  */
}

questionamento()