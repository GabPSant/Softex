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
console.log(gerenciamento.tarefas[0]);