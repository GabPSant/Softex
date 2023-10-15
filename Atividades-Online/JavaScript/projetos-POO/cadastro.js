/*
    Problema:

    Vamos criar um cadastro de pessoa com os seguintes dados: nome, salário, idade e se possui diploma. Antes de começar a 
    codificação, identifiquem os tipos de cada variável. Em seguida, desenvolvam o código utilizando exemplos para cada 
    variável que respeitem os tipos identificados. Certifiquem-se de que os valores correspondam aos tipos de dados corretos.

*/

/*
    Variáveis

    nome: String;
    salario: Number;
    idade: Number;
    possuiDiploma: Boolean;

*/

const cadastrados = [];

function cadastrar(nome, salario, idade, possuiDiploma){
    if(typeof nome === 'string' && typeof salario === 'number' && typeof idade === 'number' && typeof possuiDiploma === 'boolean'){
        cadastrados.push({
            nome: nome,
            salario: salario,
            idade: idade,
            possuiDiploma: possuiDiploma
        });
    }
    return cadastrados;
}

cadastrar("Gabriel", 2000, 36, true);
cadastrar("Nicolas", 6347.68, 45, true);
cadastrar("Edmundo", 100023.56, 23, false);

console.log(cadastrados);