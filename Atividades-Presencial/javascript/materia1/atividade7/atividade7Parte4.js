// Questão 22
let getMedia = (soma,divisor) => (soma/divisor).toFixed(2);
function mediaEspecifica(){
    let numeros = [], soma = 0, resposta;
    alert("Avaliação de valores (vai retornar os números entre 50 e 100 e sua media)");
    while (true) {
        resposta = Number(prompt("Digite um número inteiro.\nSe quiser terminar o programa digite 0"));
        try {
            if (Number.isNaN(resposta) || !Number.isInteger(resposta)) throw Error;
            if (resposta == 0) break;
        }
        catch (error) { alert("Esse valor não é válido, digite um número inteiro") }
        if ((!Number.isNaN(resposta) && Number.isInteger(resposta)) && (resposta>=50 && resposta<=100)){
            numeros.push(resposta);
            soma += resposta;
        }
    }
    if (numeros.length == 0) alert("Não teve nenhum número digitado");
    else {
        alert(`Números digitados (entre 50 e 100): ${numeros}\n` + 
        `Media dos dos números aceitáveis: ${getMedia(soma,numeros.length)}`);
    }
}
//mediaEspecifica();

// Questão 23
function menorNumeroPositivoImpar(){
    let menor = 0, resposta;
    const numeros = [];
    alert("Avaliação de valores (vai retornar o menor valor positivo impar)");
    while (true) {
        resposta = Number(prompt("Digite um número inteiro.\nSe quiser terminar o programa digite 0"));
        try {
            if (Number.isNaN(resposta) || !Number.isInteger(resposta)) throw Error;
            if (resposta == 0) break;
        }
        catch (error) { alert("Esse valor não é válido, digite um número inteiro") }
        if ((!Number.isNaN(resposta) && Number.isInteger(resposta))){
            numeros.push(resposta);
            if(resposta>0 && resposta%2 !== 0){
                if(menor === 0) menor = resposta;
                if(resposta<menor) menor = resposta;
            }
        }
    }
    if (numeros.length === 0) alert("Não teve nenhum número digitado");
    else if(menor === 0) alert("Nenhum número impar e positivo foi digitado");
    else {
        console.log(numeros);
        alert(`Menor número positivo impar digitado: ${menor}\n`);
    }
}
//menorNumeroPositivoImpar();

// Questão 24
function pares_e_contador_impar(){
    let numeros = [], pares = [], contadorImpares = 0, resposta;
    alert("Avaliação de valores (vai retornar todos os números pares e a quantidade de impares)");
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
        numeros.forEach(i => {
            (i%2 === 0)? pares.push(i): contadorImpares++;
        })
        console.log(numeros);
        alert(`Números pares digitados: ${pares}\nQuantidade de números impares: ${contadorImpares}`);
    }
}
//pares_e_contador_impar();