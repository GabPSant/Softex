// Questão 18
function numerosParesImpares(){
    let numeros = [], pares = [], impares = [], resposta;
    alert("Avaliação de valores (vai retornar todos os números pares e impares digitados)");
    while (true) {
        resposta = Number(prompt("Digite um número inteiro.\nSe quiser terminar o programa digite 0"));
        try {
            if (Number.isNaN(resposta) || !Number.isInteger(resposta)) throw Error;
            if (resposta == 0) break;
        }
        catch (error) { alert("Esse valor não é válido, digite um número inteiro") }
        if (!Number.isNaN(resposta) && Number.isInteger(resposta)) numeros.push(resposta);
    }
    if (numeros.length == 0) alert("Não teve nenhum número digitado");
    else {
        for(const numero of numeros){
            (numero%2 === 0)? pares.push(numero):impares.push(numero);
        }
        console.log(numeros, pares, impares);
        alert(`Números pares: ${pares}\nNúmeros impares: ${impares}`);
    }
}
//numerosParesImpares();

// Questão 19
function numerosOrganizados(){
    let numeros = [], divisiveis = [[],[],[]], resposta;
    alert("Avaliação de valores (vai retornar os números divisíveis por 2, 3 e 5)");
    while (true) {
        resposta = Number(prompt("Digite um número inteiro.\nSe quiser terminar o programa digite 0"));
        try {
            if (Number.isNaN(resposta) || !Number.isInteger(resposta)) throw Error;
            if (resposta == 0) break;
        }
        catch (error) { alert("Esse valor não é válido, digite um número inteiro") }
        if (!Number.isNaN(resposta) && Number.isInteger(resposta)) numeros.push(resposta);
    }
    if (numeros.length == 0) alert("Não teve nenhum número digitado");
    else {
        for(const numero of numeros){
            if(numero%2 === 0) divisiveis[0].push(numero);
            if(numero%3 === 0) divisiveis[1].push(numero);
            if(numero%5 === 0) divisiveis[2].push(numero);
        }
        console.log(numeros, divisiveis[0], divisiveis[1], divisiveis[2]);
        alert(`Números divisíveis por 2: ${divisiveis[0]}\n`+
        `Números divisíveis por 3: ${divisiveis[1]}\nNúmeros divisíveis por 5: ${divisiveis[2]}`);
    }
}
//numerosOrganizados();

// Questão 20
let getMedia = (soma,divisor) => (soma/divisor).toFixed(2);
function media_dos_multiplos_de_3(){
    let divisiveis3 = [], soma = 0, resposta;
    alert("Avaliação de valores (vai retornar os números divisíveis 3 e sua media)");
    while (true) {
        resposta = Number(prompt("Digite um número inteiro.\nSe quiser terminar o programa digite 0"));
        try {
            if (Number.isNaN(resposta) || !Number.isInteger(resposta)) throw Error;
            if (resposta == 0) break;
        }
        catch (error) { alert("Esse valor não é válido, digite um número inteiro") }
        if ((!Number.isNaN(resposta) && Number.isInteger(resposta)) && resposta%3 === 0){
            divisiveis3.push(resposta);
            soma += resposta;
        }
    }
    if (divisiveis3.length == 0) alert("Não teve nenhum número digitado");
    else {
        alert(`Números divisíveis por 3 digitados: ${divisiveis3}\n` + 
        `Media dos dos números divisíveis: ${getMedia(soma,divisiveis3.length)}`);
    }
}
//media_dos_multiplos_de_3();

// Questão 21
function numeros_com_tres_digitos(){
    let numerosCentesimais = [], contador = 0, resposta;
    alert("Avaliação de valores (vai retornar os números com mais de três dígitos)");
    while (true) {
        resposta = Number(prompt("Digite um número inteiro.\nSe quiser terminar o programa digite 0"));
        try {
            if (Number.isNaN(resposta) || !Number.isInteger(resposta)) throw Error;
            if (resposta == 0) break;
        }
        catch (error) { alert("Esse valor não é válido, digite um número inteiro") }
        if ((!Number.isNaN(resposta) && Number.isInteger(resposta)) && String(resposta).length > 3){
            numerosCentesimais.push(resposta);
            contador++;
        }
    }
    if (numerosCentesimais.length == 0) alert("Não teve nenhum número digitado");
    else {
        alert(`Números com mais de três dígitos: ${numerosCentesimais}\nQuantidade: ${contador} números`);
    }
}
//numeros_com_tres_digitos();