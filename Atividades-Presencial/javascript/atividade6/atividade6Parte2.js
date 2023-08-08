// Questão 16
let getMedia = (soma, divisor) => Number(soma / divisor).toFixed(3);

function media(divisor = 5) {
    let resposta, resultado = 0;
    alert(`Cálculo da media de ${divisor} notas.`)
    for (i = 0; i < divisor; i++) {
        while (true) {
            resposta = Number(prompt(`Digite a nota ${i + 1}`));
            try {
                if (Number.isNaN(resposta) || resposta < 0) { throw Error; }
                break;
            }
            catch (error) { alert("Esse valor não é aceito, digite um número positivo!"); }
        }
        resultado += resposta;
    }
    console.log(`soma: ${resultado}`);
    const media = getMedia(resultado, divisor);
    alert(`A media dos valores é ${media}`);
}
//media();

// Questão 17
function multiploDeTres() {
    for (i = 1; i <= 50; i++) {
        if (i % 3 == 0) { console.log(i); }
    }
}
//multiploDeTres();

// Questão 18
function maior_e_menor() {
    let resposta, maior, menor;
    const valores = [];
    alert("Análise de 10 valores");
    for (i = 0; i < 10; i++) {
        while (true) {
            resposta = Number(prompt(`Digite o valor ${i + 1}`));
            try {
                if (Number.isNaN(resposta)) { throw Error; }
                break;
            }
            catch (error) { alert("Esse valor não é aceito, digite um número!"); }
        }
        valores[i] = resposta;
    }
    maior = menor = valores[0];
    for (i = 1; i < 10; i++) {
        if (valores[i] > maior) {
            maior = valores[i];
        }
        else if (valores[i] < menor) {
            menor = valores[i];
        }
    }
    console.log(valores);
    alert(`Maior valor: ${maior}\nMenor valor: ${menor}`);
}
//maior_e_menor();

// Questão 19
function numerosImpares() {
    for (i = 1; i <= 100; i++) {
        if (i % 2 != 0) { console.log(i); }
    }
}
numerosImpares();

// Questão 20
function notasAlunos() {
    let resposta;
    const alunos = [], aprovados = [], reprovados = [];

    alert("Vamos checar os alunos que estão aprovados!")
    for (i = 0; i < 5; i++) {
        while (true) {
            resposta = Number(prompt(`Digite a nota do aluno ${i + 1} (entre 0 e 10)`));
            try {
                if (Number.isNaN(resposta) || resposta < 0 || resposta>10) { throw Error; }
                break;
            }
            catch (error) { alert("Esse valor não é aceito, digite um número positivo!"); }
        }
        alunos[i] = resposta;
    }
    alunos.forEach(i => {(i>=7)?aprovados.push(i):reprovados.push(i);});
    console.log(aprovados, "\n", reprovados);
    alert(`Alunos aprovados: ${aprovados.length} alunos\nAlunos reprovados: ${reprovados.length} alunos`);
}
// notasAlunos();

// Questão 21
function soma_dos_digitos(){
    let numero, soma = 0;
    while(true){
        numero = prompt("Digite um número inteiro qualquer");
        try{
            if(numero.match(/[(a-z)|(A-Z)]/g) || !Number.isInteger(Number(numero))){ throw Error}
            break;
        }
        catch(error){
            alert("Deve ser um número inteiro, tente novamente");
        }
    }
    const numeros = numero.split('').map(Number); //Separa a string em um array de inteiros
    console.log(numeros);
    numeros.forEach(x => {soma += x});
    alert(`Soma dos digitos de ${numero} é igual a ${soma}`);
}
soma_dos_digitos();