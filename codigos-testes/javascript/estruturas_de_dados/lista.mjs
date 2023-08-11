 export class Lista {
    constructor(){
        this.lista = [];
    }

    getLista(){
        return this.lista;
    }

    insertion(elemento, posicao = this.lista.length){
        if(posicao >= 0 && posicao <= this.lista.length){
            this.lista.splice(posicao, 0, elemento);
            return true;
        }
        return false;
    }

    deletion(elemento){
        const indice = this.lista.indexOf(elemento);
        if(indice !== -1){
            this.lista.splice(indice,1);
            return true;
        }
        return false
    }

    search(elemento){
        const indice = this.lista.indexOf(elemento);
        if(indice !== -1) return indice;
        return null;
    }

    update(posicao, novoElemento){
        if(posicao>=0 && posicao<=this.lista.length){
            this.lista[posicao] = novoElemento;
            return true;
        }
        return false;
    }

    size(){
        return this.lista.length;
    }

    isEmpty(){
        return this.size() === 0;
    }
}