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
    nome?: "João"
    idade: 35;
    endereco: {
        rua: "Avenida sem número",
    };
}

type chavesUsuario = keyof Usuario;//Contem todas as chaves do type/interface Usuario (funciona pra ambos)

function pegarPropriedade(usuario:Usuario, propriedade:chavesUsuario){
    return usuario[propriedade];
}

console.log(pegarPropriedade(usuario, "idade")); //Retorna '34'
console.log(pegarPropriedade(usuario, "nome")); //Retorna 'undefined'

const video = {
    titulo: "Aprendendo TypeScript",
    duracao: 1000,
}

type Video = typeof video; //Converte o objeto vídeo para um type
type chavesVideo = keyof typeof video;

//Utility Types/Generics - Permite converter uma função javascript em um formato

//  ReturnType - retorna o tipo
type pegarPropriedadeRetornarTipo = ReturnType<typeof pegarPropriedade>;
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