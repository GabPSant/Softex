import {Usuario, Tarefa, aleatorio} from "./gerenciamento";
import {format} from 'date-fns';
// Usuarios (4 usuários)

export const usuario1 = {
    id: 1,
    nome: "Rodrigo",
    email: "rodrigo@email.com"
} satisfies Usuario;

export const usuario2 = {
    id: 2,
    nome: "Gabriel",
    email: "gabriel@email.com"
} satisfies Usuario

export const usuario3 = {
    id: 3,
    nome: "Matheus",
    email: "matheus@email.com"
} satisfies Usuario

export const usuario4 = {
    id: 4,
    nome: "Vinicius",
    email: "vinicius@email.com"
} satisfies Usuario

// Tarefas (6 tarefas)

export const tarefa1 = {
    titulo: "Algoritmos e lógica de programação - Front end",
    descricao: "Lista de atividades para criação de algoritmos por descrição narrativa e fluxograma",
    concluida: false,
    responsavel: usuario3,
    dataCriacao: format(new Date(2023, aleatorio(11), aleatorio(31), aleatorio(23), aleatorio(59)), 'dd/MM/yyyy, HH:mm'),
    dataConclusao: format(new Date(2023, aleatorio(11), aleatorio(31), aleatorio(23), aleatorio(59)), 'dd/MM/yyyy, HH:mm')
} satisfies Tarefa

export const tarefa2 = {
    titulo: "Aula 03 - Tipos de dados e variáveis",
    descricao: "Lista de exercicios para variáveis (var, let, export const) em JavaScript",
    concluida: false,
    responsavel: usuario2,
    dataCriacao: format(new Date(2023, aleatorio(11), aleatorio(31), aleatorio(23), aleatorio(59)), 'dd/MM/yyyy, HH:mm'),
    dataConclusao: format(new Date(2023, aleatorio(11), aleatorio(31), aleatorio(23), aleatorio(59)), 'dd/MM/yyyy, HH:mm'),
} satisfies Tarefa

export const tarefa3 = {
    titulo: "Aula 04 - Entrada e manipulação de dados",
    descricao: "Lista de exercicios sobre input e output de dados",
    concluida: false,
    responsavel: usuario1,
    dataCriacao: format(new Date(2023, aleatorio(11), aleatorio(31), aleatorio(23), aleatorio(59)), 'dd/MM/yyyy, HH:mm'),
    dataConclusao: format(new Date(2023, aleatorio(11), aleatorio(31), aleatorio(23), aleatorio(59)), 'dd/MM/yyyy, HH:mm'),
} satisfies Tarefa

export const tarefa4 = {
    titulo: "Aula 05 - Condicionais e controle de fluxo",
    descricao: "Lista de atividades sobre controle de fluxo por condicionais (if, else if, else e switch)",
    concluida: false,
    responsavel: usuario4,
    dataCriacao: format(new Date(2023, aleatorio(11), aleatorio(31), aleatorio(23), aleatorio(59)), 'dd/MM/yyyy, HH:mm'),
    dataConclusao: format(new Date(2023, aleatorio(11), aleatorio(31), aleatorio(23), aleatorio(59)), 'dd/MM/yyyy, HH:mm'),
} satisfies Tarefa

export const tarefa5 = {
    titulo: "Aula 06 - Estrutura de repetição 'for'",
    descricao: "Lista de atividades sobre repetição de comandos, focando no comando for",
    concluida: false,
    responsavel: usuario2,
    dataCriacao: format(new Date(2023, aleatorio(11), aleatorio(31), aleatorio(23), aleatorio(59)), 'dd/MM/yyyy, HH:mm'),
    dataConclusao: format(new Date(2023, aleatorio(11), aleatorio(31), aleatorio(23), aleatorio(59)), 'dd/MM/yyyy, HH:mm'),
} satisfies Tarefa

export const tarefa6 = {
    titulo: "Aula 07 - Estrutura de repetição 'while'",
    descricao: "Lista de atividades sobre repetição de comandos, focando no comando for",
    concluida: false,
    responsavel: usuario1,
    dataCriacao: format(new Date(2023, aleatorio(11), aleatorio(31), aleatorio(23), aleatorio(59)), 'dd/MM/yyyy, HH:mm'),
    dataConclusao: format(new Date(2023, aleatorio(11), aleatorio(31), aleatorio(23), aleatorio(59)), 'dd/MM/yyyy, HH:mm'),
} satisfies Tarefa