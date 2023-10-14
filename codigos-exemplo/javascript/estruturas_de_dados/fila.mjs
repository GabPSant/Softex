export class Fila {
    constructor(){
        this.fila = [];
    }

    getFila(){
        return this.fila;
    }

    enqueue(elemento){// Metodo enfileirar, serve para adicionar um elemento no final da fila
        this.fila.push(elemento);
    }

    dequeue(){// Método desenfileirar, serve para remover o elemento inicial da fila
        if(this.isEmpty()) return null;
        return this.fila.shift();
    }

    front(){// Método frente, serve para checar o elemento na frente/início da fila
        if(this.isEmpty()) return null;
        return this.fila[0];
    }

    rear(){// Método fundo, serve para checar o elemento no fundo/fim da fila
        if(this.isEmpty()) return null;
        return this.fila[this.fila.length-1];
    }

    size(){// Método tamanho, serve para checar quantos elementos tem na pilha
        return this.fila.length;
    }

    isEmpty(){// Método para verificar se a pilha está vazia
        return this.size() === 0;
    }
}