import * as gerenciamento from "./gerenciamento";
import * as lista from "./listaUsuariosTarefas";

/**
 * Pra ideia do teste vou adicionar 2 usuários e 3 tarefas da lista no sistema de gerenciamento
 * @function adicionarUsuario
 * @function adicionarTarefa
 */

gerenciamento.adicionarUsuario(lista.usuario1.nome, lista.usuario1.email);
gerenciamento.adicionarUsuario(lista.usuario2.nome, lista.usuario2.email);

gerenciamento.adicionarTarefa(lista.tarefa5.titulo, lista.tarefa5.descricao, gerenciamento.usuarios[1]);
gerenciamento.adicionarTarefa(lista.tarefa6.titulo, lista.tarefa5.descricao, gerenciamento.usuarios[0]);

console.log(gerenciamento.listaTarefas());// Demonstra a lista inicialmente
console.log(gerenciamento.tarefas[0]);//Retorna o usuário de id 1 

gerenciamento.concluirTarefa(gerenciamento.tarefas[1]);// Conclui a tarefa de id 2
console.log(gerenciamento.listaTarefas())// Demonstra que a tarefa é considerada concluida
console.log(gerenciamento.tarefas[1]);

gerenciamento.concluirTarefa(lista.tarefa4);//Retorna que a tarefa não existe na lista;
gerenciamento.adicionarTarefa(lista.tarefa2.titulo, lista.tarefa2.descricao, {
    id: lista.usuario3.id,
    nome: lista.usuario3.nome,
    email: lista.usuario3.email
}); // Vai retornar que o usuário mensionado não está na lista