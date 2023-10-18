// Questão 23
let pessoas:{nome:string, idade:number}[] = [];
for(let i:number = 1; i<=15; i++){
    pessoas.push({
        nome: `Pessoa ${i}`,
        idade: Math.floor(Math.random()*20)+15 // Vai retornar um valor entre 15 e 35
    })
}
//console.log(pessoas);
function pessoaMaisVelha(listaPessoas:{nome:string, idade:number}[]){
    let maisVelho:string = "", Idadetemp:number = 0;
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
let carros:{marca:string, modelo:string, ano:number}[] = [];
for(let i:number = 1; i<=20; i++){
    carros.push({
        marca: `Marca ${i}`,
        modelo: `Modelo ${Math.floor(Math.random()*10)+1}`,
        ano: Math.floor(Math.random()*30) + 1980
    });
}
//console.log(carros);
function soCarrosDoAno(carros:{marca:string, modelo:string, ano:number}[], ano:number){
    let carrosDoAno:{marca:string, modelo:string, ano:number}[] = [];
    for(const carro of carros){
        if(carro.ano >= ano) carrosDoAno.push(carro);
    }
    return carrosDoAno;
}
//console.log(soCarrosDoAno(carros,2000));

// Questão 25
function inverterString(string:string){
    if(typeof(string) !== 'string') return "O parametro deve ser uma string";
    let stringReversa = '';
    for(let i:number = string.length-1; i>=0; i--) stringReversa += string[i].toLowerCase();
    return stringReversa;
}
//console.log(inverterString("Hello"))