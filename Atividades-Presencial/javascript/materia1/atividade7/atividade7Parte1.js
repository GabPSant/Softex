// Questão 3
function questao3() {
    let i = 0;
    while (i < 10) {
        console.log("Testando uma frase!");
        i++;
    }
}
//questao3();

// Questão 4
function questao4() {
    let i = 465484133;
    while (i > 10) {
        console.log(i.toFixed(3));
        i /= 35;
    }
}
//questao4();

// Questão 5
function questao5() {
    let i = 0;
    do {
        console.log(i);
        i++
    } while (i < 5)
}
//questao5();

// Questão 6
function numerosCrescentes() {
    let i = 1;
    while (i <= 10) {
        console.log(i);
        i++;
    }
}
//numerosCrescentes();

// Questão 7
function numerosDecrescentes() {
    let i = 10;
    while (i > 0) {
        console.log(i);
        i--;
    }
}
//numerosDecrescentes();

// Questão 8
function somaResultante() {
    let i = 1, soma = 0;
    while (i <= 100) {
        soma += i
        i++
    }
    console.log(`A soma dos valores de 1 a 100 resulta em: ${soma}`);
}
//somaResultante();

// Questão 9
function produtoResultante() {
    let i = 1, produto = 1;
    while (i <= 5) {
        produto *= i;
        i++;
    }
    console.log(`O produto dos valores de 1 a 5 resulta em: ${produto}`);
}
//produtoResultante();

// Questão 10
function tabuadaNove() {
    let i = 0;
    console.log("Tabuada do 9:\n");
    while (i <= 10) {
        console.log(`9 x ${i} = ${9 * i}`);
        i++;
    }
}
//tabuadaNove();

// Questão 11
function menor_e_maior() {
    let menor, maior, numeros = [], resposta;
    alert("Avaliação de valores (retorna o menor e maior valores digitados)");
    while (true) {
        resposta = Number(prompt("Digite um número inteiro.\nSe quiser terminar o programa digite 0"));
        try {
            if (Number.isNaN(resposta) || !Number.isInteger(resposta)) throw Error;
            if (resposta === 0) break;
        }
        catch (error) { alert("Esse valor não é válido, digite um número inteiro") }
        if (!Number.isNaN(resposta) && Number.isInteger(resposta)) numeros.push(resposta);
    }
    if (numeros.length == 0) alert("Não teve nenhum número digitado");
    else {
        console.log(numeros);
        maior = menor = numeros[0];
        for (i = 0; i < numeros.length; i++) {
            if (numeros[i] > maior) maior = numeros[i];
            if (numeros[i] < menor) menor = numeros[i];
        }
        alert(`Maior número: ${maior}\nMenor número: ${menor}`);
    }
}
//menor_e_maior();