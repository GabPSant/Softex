// Questão 22
//Conta a quantidade de divisores
function contador_de_divisores(inteiro){
    let divisoresQuantidade = 2;
    for(fator = 2; (fator*fator)<=inteiro; fator++){
        if(inteiro%fator == 0){
            if(fator*fator<inteiro){
                divisoresQuantidade += 2;
            }
            else{
                divisoresQuantidade += 1;
            }
        }
    }
    return divisoresQuantidade;
}

function encontrarDivisores(){
    let inteiro, divisoresQuantidade = 1;
    const divisores = [1];
    while(true){
        inteiro = Number(prompt("Digite um número inteiro qualquer"));
        try{
            if(Number.isNaN(inteiro)|| !Number.isInteger(inteiro)){ throw Error}
            break;
        }
        catch(error){
            alert("Deve ser um número inteiro, tente novamente");
        }
    }
    if(inteiro != 1){
        divisoresQuantidade = contador_de_divisores(inteiro);
        //Armazena os possíveis divisores
        for(i = 2; i<=inteiro; i++){
            if(inteiro%i == 0){divisores.push(i);}
        }
    }
    console.log(divisores);
    alert(`Quantidade de divisores: ${divisoresQuantidade}\nDivisores de ${inteiro}: ${String(divisores)}`);
}
// encontrarDivisores();

// Questão 23
let getMedia = (soma, divisor) => Number(soma / divisor).toFixed(3);

function mediaAltura(divisor = 5){
    let resposta, resultado = 0;
    alert(`Cálculo da media de ${divisor} alturas.`)
    for (i = 0; i < divisor; i++) {
        while (true) {
            resposta = Number(prompt(`Digite a altura ${i + 1} (em metros)`));
            try {
                if (Number.isNaN(resposta) || resposta < 0 || resposta>2.73) { throw Error; }
                break;
            }
            catch (error) { alert("Esse valor não é aceito, digite uma altura realística!"); }
        }
        resultado += resposta;
    }
    console.log(`soma: ${resultado.toFixed(3)}`);
    const media = getMedia(resultado, divisor);
    alert(`A media das alturas é ${media}`);
}
//mediaAltura();

// Questão 24
function fizz_buzz_FizzBuzz(){
    for(i = 1; i<=100; i++){
        if(i%3 == 0 && i%5 == 0){
            console.log("FizzBuzz");
        }
        else if(i%3 == 0){
            console.log("Fizz");
        }
        else{
            console.log((i%5 == 0)?"Buzz":i);
        }
    }
}
//fizz_buzz_FizzBuzz();

// Questão 25
function soma_dos_digitos_pares(){
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
    numeros.forEach(x => {if(x%2 == 0){ soma += x}});
    alert(`Soma dos digitos pares de ${numero} é igual a ${soma}`);
}
// soma_dos_digitos_pares();

//Questão 26
function reversorDeInteiros(inteiro = 123){
    array = String(inteiro).split('');
    console.log(array);
    array.reverse();
    console.log(array);
    inteiro = '';
    for(elemento of array){
        inteiro += elemento;
    }
    console.log(Number(inteiro));
}
reversorDeInteiros(414);