class NodeDuplo{
    constructor(elemento){
        this.elemento = elemento;
        this.proximo = null;
        this.anterior = null;
    }
}
// Ainda em desenvolvimento
export class ListaDuplamenteLigada{
    constructor(){
        this.cabeca = null;
        this.cauda = this.cabeca;
    }

    addFirst(elemento){
        const novoElemento = new NodeDuplo();
        this.cabeca.anterior = novoElemento;
        novoElemento.proximo = this.cabeca;
    }

    addLast(elemento){
        const novoElemento = new NodeDuplo();
        if(this.cabeca === null) this.cabeca = novoElemento;
        else{
            let atual = this.cabeca
            while(atual.proximo !== null) atual = atual.proximo;
            atual.proximo = novoElemento;
            novoElemento.anterior = atual;
        }
    }
}