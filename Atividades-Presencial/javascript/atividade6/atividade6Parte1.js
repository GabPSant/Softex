// Questão 5 - pode usar o node
function questao5() {
    for (let i = 0; i < 10; i++) {
        console.log("Testando uma frase!");
    }
}
//questao5();

// Questão 6 - pode usar o node
function questao6() {
    for (let i = 0; i < 10; i++) {
        console.log(i);
    }
}
//questao6();

// Questão 7 - pode usar o node
function questao7() {
    for (i = 0; i < 10; i++) {
        if (i == 5) {
            break;
        }
        console.log(i);
    }
}
//questao7();

// Questão 8 - pode usar o node
function questao8() {
    for (i = 0; i < 10; i++) {
        if (i == 5) {
            continue;
        }
        console.log(i);
    }
}
//questao8();

// Questão 9 - pode usar o node
function questao9() {
    const nomes = ['João', 'Paulo', 'Pedro', 'Gustavo', 'Maria'];

    for (const nome of nomes) {
        console.log(nome)
    }
}
//questao9();

// Questão 10 - pode usar o node
function numerosCrescentes() {
    for (i = 1; i <= 10; i++) {
        console.log(i);
    }
}
//numerosCrescentes();

// Questão 11 - pode usar o node
function numerosDecrescentes() {
    for (i = 10; i > 0; i--) {
        console.log(i);
    }
}
//numerosDecrescentes();

// Questão 12 - pode usar o node
function somaResultante() {
    let resultante = 0;
    for (i = 1; i <= 100; i++) {
        resultante += i;
    }
    console.log(`Soma de 1 a 100: ${resultante}`);
}
//somaResultante();

// Questão 13 - pode usar o node
function valoresPares() {
    for (i = 1; i <= 50; i++) {
        if (i % 2 == 0) { console.log(i); }
    }
}
//valoresPares();

// Questão 14 - pode usar o node
function produtoResultante() {
    let resultante = 1;
    for (i = 1; i <= 5; i++) {
        resultante *= i;
    }
    console.log(`Produto de 1 a 5: ${resultante}`);
}
//produtoResultante();

// Questão 15 - pode usar o node
function tabuadaSete() {
    console.log("Tabuada do Sete:")
    for (i = 0; i <= 10; i++) {
        console.log(`7 x ${i} = ${7 * i}`);
    }
}
//tabuadaSete();