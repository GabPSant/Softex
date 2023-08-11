import {Fila} from "./fila.mjs"
import {Lista} from './lista.mjs';
import {Pilha} from './pilha.mjs';

// Teste para a classe Fila
function filas(){
    const fila = new Fila();
    console.log(`Filas:\n\nFila vazia? (antes de emfileirar): ${fila.isEmpty()}`);
    fila.enqueue(10);
    fila.enqueue(25);
    fila.enqueue(87);
    console.log(`Fila vazia? (depois de emfileirar): ${fila.isEmpty()}`);
    console.log("Fila inicial: ",fila.getFila());
    console.log(`Tamanho inicial da fila: ${fila.size()}`);
    console.log(`Elemento retirado da fila: ${fila.dequeue()}`);
    console.log(`Elemento no início da fila: ${fila.front()}`);
    console.log(`Elemento no final da fila: ${fila.rear()}`);
    console.log(`Tamanho final da fila: ${fila.size()}`);
    console.log("Fila final: ",fila.getFila());
}
filas();

// Teste para a classe Lista
function listas(){
    const lista = new Lista();
    console.log(`\nListas:\n\nLista vazia? (antes de adicionar): ${lista.isEmpty()}`);
    lista.insertion(10);
    lista.insertion(25);
    lista.insertion(87);
    console.log(`Lista vazia? (depois de adicionar): ${lista.isEmpty()}`);
    console.log("Lista inicial: ", lista.getLista());
    console.log(`Tamanho inicial da lista: ${lista.size()}`);
    console.log(`É possível adicionar o elemento 30 na posicao 2? R: ${(lista.insertion(30,2))?"Sim, foi adicionado":"Não, a posicao está fora da lista"}`);
    console.log(`É possível adicionar o elemento 70 na posicao 94? R: ${(lista.insertion(70,94))?"Sim, foi adicionado":"Não, a posicao está fora da lista"}`);
    console.log(`É possível remover o elemento 30? R: ${(lista.deletion(30,2))?"Sim, foi deletado":"Não, o elemento não existe na lista"}`);
    console.log(`É possível remover o elemento 70? R:: ${(lista.deletion(70,94))?"Sim, foi deletado":"Não, o elemento não existe na lista"}`);
    console.log(`Retorne a posição do elemento 25: ${lista.search(25)}º posição`);
    console.log(`É possível alterar o elemento na posição 1 para 22? R: ${(lista.update(1,22))?"Sim, foi alterado":"Não, a posição não existe na lista"}`);
    console.log("Lista final", lista.getLista());
    console.log(`Tamanho final da lista: ${lista.size()}`);
}
listas();

// Teste para a classe Pilha
function pilhas(){
    const pilha = new Pilha();
    console.log(`\nPilhas:\n\nPilha vazia? (antes de empilhar): ${pilha.isEmpty()}`);
    pilha.push(10);
    pilha.push(25);
    pilha.push(87);
    console.log(`Pilha vazia? (depois de empilhar): ${pilha.isEmpty()}`);
    console.log("Pilha inicial: ",pilha.getPilha());
    console.log(`Tamanho inicial da pilha: ${pilha.size()}`);
    console.log(`Elemento retirado da pilha: ${pilha.pop()}`);
    console.log(`Elemento no topo da pilha: ${pilha.top()}`);
    console.log(`Tamanho final da pilha: ${pilha.size()}`);
    console.log("Pilha final: ",pilha.getPilha());
}
pilhas();