// Função que faz o cálculo em relação a operação matemática
function calculo(numero1,numero2,operacao){
    switch(operacao){
        case 1: 
            return `Soma: ${(numero1+numero2)} (${numero1} + ${numero2})`;
            break;
        case 2: 
            return `Subtração: ${(numero1-numero2)} (${numero1} - ${numero2})`;
            break;
        case 3:
            return `Multiplicação: ${(numero1*numero2)} (${numero1} * ${numero2})`;
            break;
        case 4:
            return `Divisão: ${(numero1/numero2)} (${numero1}/${numero2})`;
            break;
        default:
            return `Essa operação não é valida`
    }
}
function questionario(){
    alert("Operação matemática")
    const numero1 = Number(prompt("Digite o primeiro valor da operação"));
    const numero2 = Number(prompt("Digite o segundo valor da operação"));
    const operacao = Number(prompt("Qual sera a operação? (digite um número)\n1 - Soma\n2 - Subtração\n3 - Multiplicação\n4 - Divisão"));
    alert(calculo(numero1,numero2,operacao));
}
questionario();