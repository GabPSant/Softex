export class Pilha {
    constructor(){
        this.pilha = [];
    }

    getPilha(){
        return this.pilha;
    }

    push(elemento){// Método empilhar, serve para adicionar um elemento na pilha
        this.pilha.push(elemento);
    }

    pop(){// Método desempilhar, serve para remover o elemento no topo/fim da pilha
        if(this.isEmpty()) return null;
        return this.pilha.pop();
    }

    top(){// Método topo, serve para checar o elemento no topo/fim da pilha
        if(this.isEmpty()) return null;
        return this.pilha[this.pilha.length-1];
    }

    size(){// Método tamanho, serve para checar quantos elementos tem na pilha
        return this.pilha.length;
    }

    isEmpty(){// Método para verificar se a pilha está vazia
        return this.size() === 0;
    }
}