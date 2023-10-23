/*
Problema:
   Sistema de Gerenciamento de Tarefas. Neste sistema, você irá definir interfaces para
   tarefas e usuários, criar funções para adicionar, listar e atualizar tarefas, armazenar os dados em um array,
   usar estruturas de repetição para exibir informações e condicionais para gerenciar as tarefas.
*/

// Definição das interfaces: Usuário e Tarefa

export interface Usuario{
    id: number,
    nome: string,
    email: string
}

export interface Tarefa{
    id?: number,
    titulo: string,
    descricao: string,
    concluida: boolean,
    responsavel: Usuario,
    dataCriacao:string,
    dataConclusao: string
}

// Forma de armazenar os dados

export const usuarios:Usuario[] = []; // Representa o grupo total de usuários
export const tarefas:Tarefa[] = []; // Representa a quantidade de tarefas

export const data:Date = new Date();//Armazena a informação do horário

// Funções com parâmetros

export function adicionarUsuario(nome:string, email:string){
    usuarios.push({
        id: usuarios.length+1,
        nome: nome,
        email: email
    });
}

export function adicionarTarefa(titulo:string, descricao:string, user:Usuario){
    // Condicional para avaliar se o usuário está dentro da lista existente
    if(!usuarios.includes(user)) console.log("O usuário não existe na lista");
    else{
        tarefas.push({
            id:tarefas.length+1,
            titulo: titulo,
            descricao: descricao,
            concluida: false,
            responsavel: user,
            dataCriacao: `${data.getDay()}/${data.getMonth()}/${data.getFullYear()}, ${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`,
            dataConclusao: "Ainda não concluida"
        })
    }
}

// Estrutura de Repetição

export function listaTarefas(){
    console.log("Lista de Tarefas\n");
    tarefas.forEach(t =>{
        console.log(`ID: ${t.id}\n
        Título: ${t.titulo}
        Descrição: ${t.descricao}
        Concluida: ${t.concluida}
        Responsavel: ${t.responsavel.nome} (ID: ${t.responsavel.id})`);
    })
}

// Atualização de Tarefas

export function concluirTarefa(tarefa:Tarefa){
    if(!tarefas.includes(tarefa)) console.log("Essa tarefa não existe na lista");
    else{
        tarefas.forEach(t =>{
            if(t === tarefa){
                t.concluida = true;
                t.dataConclusao = `${data.getDay()}/${data.getMonth()}/${data.getFullYear()}, ${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`;
            }
        });
    }
}

// Testes do sistema no código 'gerenciamentoTestes.ts'