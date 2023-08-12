export class Node{
    constructor(elemento){
        this.elemento = elemento;
        this.proximo = null;
    }
}

export class ListaLigada{
    constructor(){
        this.cabeca = null;
    }

    addFirst(elemento){// Inserção de elemento no início
        const novoElemento = new Node(elemento);
        novoElemento.proximo = this.cabeca;
    }

    addLast(elemento){// Inserção de elemento no fim
        const novoElemento = new Node(elemento);
        if(this.cabeca === null) this.cabeca = novoElemento;
        else{
            let atual = this.cabeca;
            while(atual.proximo !== null){
                atual = atual.proximo;
            }
            atual.proximo = novoElemento;
        }
    }

    removeFirst(){// Remove o elemento no início da lista
        if(this.cabeca === null) return null;
        const removerNode = this.cabeca;
        this.cabeca = this.cabeca.proximo;
        removerNode.proximo = null;
        return removerNode.elemento;
    }

    removeLast(){// Remove o elemento no fim da lista
        if(this.cabeca === null) return  null;
        if(this.cabeca.proximo === null){
            const removerNode = this.cabeca;
            this.cabeca = null;
            return removerNode.elemento;
        }
        let atual = this.cabeca;
        let anterior = null;
        while(atual.proximo !== null){
            anterior = atual;
            atual = atual.proximo;
        }
        anterior.proximo = null;
        return atual.elemento;
    }

    search(elemento){// Busca um elemento específico na lista e retorna sua posição
        let atual = this.cabeca;
        while(atual !== null){
            if(atual.elemento === elemento) return atual;
            atual = atual.proximo;
        }
        return null;
    }

    size(){// Retorna o tamanho da lista
        let contador = 0;
        let atual = this.cabeca;
        while(atual !== null){
            contador++;
            atual = atual.proximo;
        }
        return contador;
    }

    printList(){// Retorna a lista encadeada
        let atual = this.cabeca;
        console.log("Lista Ligada:");
        while(atual !== null){
            console.log(atual);
            atual = atual.proximo;
        }
    }
}