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
        this.cabeca = novoElemento;
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

    addAt(elemento, posicao){// inserção de elemento em uma posição específica
        if(posicao<0 || posicao>=this.size()) console.log("Não tem essa posição na lista");
        else{
            const novoElemento = new Node(elemento)
            let atual, anterior;

            if(posicao === 0){
                novoElemento.proximo = this.cabeca;
                this.cabeca = novoNode;
            }
            else{
                atual = this.cabeca;
                
                for(i = 0; i<posicao; i++){
                    anterior = atual;
                    atual = atual.proximo;
                }
                novoElemento.proximo = atual;
                anterior.proximo = novoElemento;
            }
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

    removeFrom(posicao){// Remove o elemento em uma posição específica
        if(posicao<0 || posicao>=this.size()) console.log("Não tem essa posição na lista");
        else{
            let atual, anterior;
            atual = this.cabeca;
            anterior = atual

            if(posicao === 0) this.cabeca = atual.proximo;
            else{
                for(i = 0; i<posicao; i++){
                    anterior = atual
                    atual = atual.proximo;
                }

                anterior.proximo = atual.proximo;
            }
            return atual.elemento;
        }
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
    
    isEmpty = () => {return this.size() === 0}// Avalia se a lista está vázia

    printList(){// Retorna a lista encadeada
        let atual = this.cabeca;
        console.log("Lista Ligada:");
        while(atual !== null){
            console.log(atual);
            atual = atual.proximo;
        }
    }
}

const lista = new ListaLigada();
lista.addFirst({nome: "Maria", idade: 73});
lista.addFirst({nome: "Cristiane", idade: 43});
lista.addFirst({nome: "Rodrigo", idade: 25});
lista.addFirst({nome: "Mario", idade: 2});
console.log(lista);