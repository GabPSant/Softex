//Ideia base de type

type Estudante = {
    nome: string,
    media: number,
    aprovado?: string,
}

const lista:Estudante[] = [
    {
        nome: "Rodrigo",
        media: 6.5,
    },
    {
        nome: "Sabrina",
        media: 8,
    },
    {
        nome: "Marcus",
        media: 4.5,
    },
    {
        nome: "Rafael",
        media: 8,
    }
]
/*
console.log("Alunos antes da avaliação:\n");
lista.forEach(x => console.log(`\n${x.nome}\n${x.media}\n${x.aprovado}\n`));
*/

function listaEstudantesAprovacao(lista:Estudante[]){
    lista.forEach(x=>{
        if(x.media >=7) x.aprovado = "Está aprovado";
        else x.aprovado = "Está reprovado";
    });
}

/*
listaEstudantesAprovacao(lista);
console.log("\nAlunos após a avaliação:\n");
lista.forEach(x => console.log(`\n${x.nome}\n${x.media}\n${x.aprovado}\n`));
*/

// Conceitos/Funcionalidades avançadas de TypeScript
type Endereco = {
    rua:string,
    numero?: number,
}

// 'type' precisa de um igual antes das chaves enquanto que 'interface' não precisa
interface Usuario{
    nome?: string, // Define que o nome pode ficar indefinido
    idade: number,
    endereco: Endereco,
}

//Com type não tem problema na concatenação/junção de objetos

const usuario:Usuario = {
    idade: 34,
    endereco: {
        rua: "Rua das Alamedas",
        numero: 123
    }
}

//Diferente de 'type', interfaces podem ser implementadas por classes
class User implements Usuario{
    nome?: "João";
    idade: 35 = 35;
    endereco!: {
        rua: "Avenida sem número";
    };
}

type chavesUsuario = keyof Usuario;//Contem todas as chaves do type/interface Usuario (funciona pra ambos)

function pegarPropriedadeUsuario(usuario:Usuario, propriedade:chavesUsuario){
    return usuario[propriedade];
}

console.log(pegarPropriedadeUsuario(usuario, "idade")); //Retorna '34'
console.log(pegarPropriedadeUsuario(usuario, "nome")); //Retorna 'undefined'

const video = {
    titulo: "Aprendendo TypeScript",
    duracao: 1000,
}

type Video = typeof video; //Converte o objeto vídeo para um type
type chavesVideo = keyof typeof video;

//Utility Types/Generics - Permite converter uma função javascript em um formato

//  ReturnType - retorna o tipo
type pegarPropriedadeRetornarTipo = ReturnType<typeof pegarPropriedadeUsuario>;
/* 
    O type criado pode armazenar os retornos possiveis da função 'pegarPropriedades',
    sendo eles: string | number | Endereco | undefined.

    Isso ocorre porque a função do TypeScript 'ReturnType<>' vai pegar os retornos possiveis da função
*/

//   Omit - retira uma informação do 'type' original
type UsuarioSemEndereco = Omit<Usuario, "endereco">;
// Esse type agora só contem as informações 'nome' e 'idade', a informação 'endereco' foi removida
type UsuarioSemNomeEIdade = Omit<Usuario, "nome" | "idade">;
// Esse type agora só contem a informação 'endereço', as informações 'nome' e 'idade foram removidas

//  Pick - só pega as informações que você deseja
type UsuarioNomeEIdade = Pick<Usuario, "nome" | "idade">;

//  Partial - Permite criar um tipo que define todas as informações como "?:"
//  , permitindo que possam ser indefinidas.
type UsuarioParcial = Partial<Usuario>;

//--------------------------------------
//  Formas de definir o tipo de uma variável

type DBConfig = {// Pense nisso como a conexão para um banco de dados
    nome?: string,
    url: string,
}

const conexao1 = {nome: "postgres", url: "postgres://user:password"} as DBConfig;
// 'as' - força uma tipagem, mesmo que conexao1 não contenha as informações de forma apropriada
//        ele ainda sera considerado DBConfig. Não a avaliação ao criar a conexao1 se ela contem 
//        os dados adequados.

const conexao2:DBConfig = {nome: "mysql", url: "mysql://user:password"};
// ':' - Ele faz a avaliação dos dados na variavel, mas não vai conter as informações contidas na variavel.
//       Com essa tipagem o TypeScript não pode inferir resultados da variavel

const conexao3 = {nome: "sqlite", url: "sqlite://user:password"} satisfies DBConfig;
// 'satisfies' - Ele faz a avaliação dos dados da variavel e permite inferencia das informações

/*Exemplos:
    const teste1 = conexao2.nome;
    const teste2 = conexao3.nome;

    - teste1 deveria ser sempre string, mas sua tipagem o define como string | undefined 
    - enquanto no teste2 o tipo sempre é string, pois o valor já pode ser inferido
*/

//  Generics - formato que permite criar funções que aceitam qualquer tipagem

function pegarPropriedadeGenerics<T>(tipo:T, chave:keyof T): T[keyof T]{
    return tipo[chave];
}

const videoT = {
    nome: "TypeScript",
    duracao: 1500,
}

type VideoT = typeof videoT;

console.log(pegarPropriedadeGenerics<VideoT>(videoT, "nome")); // TypeScript