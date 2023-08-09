// Questão 12
let getMedia = (soma, divisor) => soma / divisor;

function media_dos_valores() {
    let soma = 0, numeros = [], resposta;
    alert("Avaliação de valores (retorna a  media dos valores digitados)");
    while (true) {
        resposta = Number(prompt("Digite um número inteiro.\nSe quiser terminar o programa digite -1"));
        try {
            if (Number.isNaN(resposta) || !Number.isInteger(resposta)) throw Error;
            if (resposta === -1) break;
        }
        catch (error) { alert("Esse valor não é válido, digite um número inteiro") }
        if (!Number.isNaN(resposta) && Number.isInteger(resposta)) numeros.push(resposta);
    }
    if (numeros.length == 0) alert("Não teve nenhum número digitado");
    else {
        console.log(numeros);
        for (i = 0; i < numeros.length; i++) soma += numeros[i];
        const media = getMedia(soma, numeros.length);
        alert(`Valores digitados ${numeros}\nMédia: ${media.toFixed(2)}`);
    }
}
//media_dos_valores();

// Questão 13
function digitos_ao_cubo(inteiro) {
    if (Number.isNaN(Number(inteiro)) || !Number.isInteger(Number(inteiro))) {
        console.log("Não são aceitos string ou números reais, só números inteiros\n");
    }
    else {
        let soma = 0, lista = String(inteiro).split('').map(Number), i = 0;
        console.log(`Lista: ${lista}`);
        lista = lista.map(i => Math.pow(i, 3));
        while (i < lista.length) {
            soma += lista[i];
            i++;
        }
        console.log(`Lista modifica: ${lista}\nSoma dos digitos modificados: ${soma}`);
    }
}
// digitos_ao_cubo(587);

// Questão 14
function numerosImpares() {
    let i = 1;
    while (i <= 100) {
        if (i % 2 != 0) console.log(i);
        i++;
    }
}
//numerosImpares();

// Questão 15
function multiploDeTres() {
    let i = 1;
    while (i <= 50) {
        if (i % 3 == 0) console.log(i);
        i++;
    }
}
//multiploDeTres();

// Questão 16
function notasAlunos() {
    let resposta, i = 0;
    const alunos = [], aprovados = [], reprovados = [];

    alert("Vamos checar os alunos que estão aprovados!")
    while (i < 5) {
        while (true) {
            resposta = Number(prompt(`Digite a nota do aluno ${i + 1} (entre 0 e 10)`));
            try {
                if (Number.isNaN(resposta) || resposta < 0 || resposta > 10) { throw Error; }
                break;
            }
            catch (error) { alert("Esse valor não é aceito, digite um número positivo!"); }
        }
        alunos[i] = resposta;
        i++;
    }
    alunos.forEach(i => { (i >= 7) ? aprovados.push(i) : reprovados.push(i); });
    console.log(aprovados, reprovados);
    alert(`Alunos aprovados: ${aprovados.length} alunos\nAlunos reprovados: ${reprovados.length} alunos`);
}
notasAlunos();

// Questão 17 - terminar/testar
function numeros_antes_do_impar() {
    let numeros = [], resposta;
    alert("Avaliação de valores (retorna o menor e maior valores digitados)");
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
    }
}