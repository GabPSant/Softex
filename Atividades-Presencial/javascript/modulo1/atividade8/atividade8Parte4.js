// Questão 23
let pessoas = [];
for(i = 1; i<=15; i++){
    pessoas.push({
        nome: `Pessoa ${i}`,
        idade: Math.floor(Math.random()*20)+15 // Vai retornar um valor entre 15 e 35
    })
}
//console.log(pessoas);
function pessoaMaisVelha(listaPessoas){
    let maisVelho, Idadetemp = 0;
    for(const pessoa of listaPessoas){
        if(pessoa.idade > Idadetemp){
            Idadetemp = pessoa.idade;
            maisVelho = pessoa.nome;
        }
    }
    return `A pessoa mais velha do grupo é ${maisVelho}`;
}
//console.log(pessoaMaisVelha(pessoas));

// Questão 24
let carros = [];
for(i = 1; i<=20; i++){
    carros.push({
        marca: `Marca ${i}`,
        modelo: `Modelo ${Math.floor(Math.random()*10)+1}`,
        ano: Math.floor(Math.random()*30) + 1980
    });
}
//console.log(carros);
function soCarrosDoAno(carros, ano){
    let carrosDoAno = [];
    for(const carro of carros){
        if(carro.ano >= ano) carrosDoAno.push(carro);
    }
    return carrosDoAno;
}
//console.log(soCarrosDoAno(carros,2000));

// Questão 25
function inverterString(string){
    if(typeof(string) !== 'string') return "O parametro deve ser uma string";
    let stringReversa = '';
    for(i = string.length-1; i>=0; i--) stringReversa += string[i].toLowerCase();
    return stringReversa;
}
//console.log(inverterString("Hello"))