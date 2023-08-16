// Questão 10
const imposto = (valor, aliquota) => (valor*(aliquota/100)).toFixed(3);

function calcularImpostoRenda(salarioBruto){
    salarioBruto = Number(salarioBruto);
    if(Number.isNaN(salarioBruto)) return "Esse valor não é válido";
    if(salarioBruto <= 1903.98) return "O imposto está insento!";
    if(salarioBruto >= 1903.99 && salarioBruto<=2826.65){
        return `Com alicota de 7,5%, seu imposto de renda é ${imposto(salarioBruto,7.5)}\n`;
    }
    if(salarioBruto >= 2826.66 && salarioBruto<=3751.05){
        return `Com alicota de 15%, seu imposto de renda é ${imposto(salarioBruto,15)}\n`;
    }
    if(salarioBruto >= 3751.06 && salarioBruto<=4664.68){
        return `Com alicota de 22,5%, seu imposto de renda é ${imposto(salarioBruto,22.5)}\n`;
    }
    else{
        return `Com alicota de 27,5%, seu imposto de renda é ${imposto(salarioBruto,27.5)}\n`;
    }
}
//console.log(calcularImpostoRenda(5000));

// Questão 11
function calcularMediaArredondada(listaNumeros){
    if(!Array.isArray(listaNumeros)){
        return "Deve ser colocado uma lista de números na função";
    }
    let mediaArredondada = 0
    for(const numero of listaNumeros){
        mediaArredondada += numero;
    }
    mediaArredondada = Math.round(mediaArredondada/listaNumeros.length);
    return `números: ${listaNumeros}\nmédia dos valores (arredondada): ${mediaArredondada}`;
}
//console.log(calcularMediaArredondada([78,96,35,657.3]));

// Questão 12
function contarDigitosParesImpares(inteiro = 1010){
    if(!Number.isInteger(Number(inteiro))) return "O parametro deve ser um valor inteiro";
    const pares = [], impares = [], digitos = String(inteiro).split('').map(Number);
    digitos.forEach(x => {
        (x%2 === 0)? pares.push(x): impares.push(x);
    })
    return `Inteiro: ${inteiro}\nQuantidade de digitos pares: ${pares.length}\nQuantidade de digitos impares: ${impares.length}`;
}
console.log(contarDigitosParesImpares());

// Questão 13
const alunosLista =[
    {nome: "Rodrigo", nota: 7.9},
    {nome: "Miguel", nota: 4.5},
    {nome: "Abraão", nota: 9.3}
]

function calcularMediaAluno(alunosLista){
    
}