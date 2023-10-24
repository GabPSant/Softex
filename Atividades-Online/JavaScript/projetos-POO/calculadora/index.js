// Valores a serem armazenados
/**@type {number | undefined} Variável que armazena o primeiro valor*/
let numero1 = undefined;
/**@type {number} Variável que armazena o segundo valor*/
let numero2 = 0;

/** Função que recebe o simbolo e valores de uma operação matemática e retorna seu resultado
 * @param {string} simbolo Simbolo da operação
 * @param {number} numero1 Primeiro valor
 * @param {number} numero2 Segundo valor
 * @return {number} Retorna o resultado da operação relacionada ao simbolo
 */

function operacaoResultado(simbolo, numero1, numero2){
    switch(simbolo){
        case "+": return numero1+numero2;

        case "-": return numero1-numero2;

        case "*": return numero1*numero2;

        case "/": return numero1/numero2;

        default: return 0;
    }
}

/**
 * Função de armazenamento dos valores
 * @param {number} numero
 */
function armazenarValor(numero){
    while(true){
        numero = Number(prompt(`Digite o ${numero1 === undefined? "primeiro":"segundo"} valor e pressione ENTER`));

        if(!Number.isNaN(numero)) break;
        alert("O valor digitado não é um número, por favor pressione ENTER para tentar novamente");
    }
    console.log(`${numero1 === undefined? "Primeiro":"Segundo"} valor: ${numero}`);
    (numero1 === undefined)? numero1 = numero: numero2 = numero;
}


/**
 * Processo de cálculadora usando os comandos alert e prompt
 */
function calculadora(){
    let simbolo = "";
    while(true){
        /**@type  {string}*/
        simbolo = prompt("Qual sera o tipo de operação (digite o simbolo e pressione ENTER):\n"
        + "1. Soma (simbolo: + )\n2. Subtração (simbolo: - )\n 3. Multiplicação (simbolo: * )\n 4. Divisão(simbolo: / )");

        if(/^[+|*|/]{1}$/.test(simbolo) || simbolo === "-") break;
        alert("O simbolo digitado não é válido, por favor pressione ENTER para tentar novamente");
    }
    console.log(`Operação: ${simbolo}`);

    armazenarValor(numero1);
    armazenarValor(numero2);

    /**@type {number} */
    const resultado = operacaoResultado(simbolo, numero1, numero2);
    console.log(resultado);
    alert(`Resultado: ${resultado.toFixed(3)} (Operação: ${simbolo})`);
}

calculadora();