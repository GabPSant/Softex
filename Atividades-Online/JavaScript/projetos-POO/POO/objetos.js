//Objetos materiais

class Carro{
    /**@type {string} Representa o modelo do carro */
    modelo;
    /**@type {string} Representa o motor no carro */
    motor;
    /**@type {string} Representa a cor usada pelo carro */
    cor;

    /**
     * 
     * @param {string} modelo 
     * @param {string} motor 
     * @param {string} cor 
     */
    constructor(modelo, motor, cor){
        this.modelo = modelo;
        this.motor = motor;
        this.cor = cor;
    }
    
    getModelo(){ return this.modelo;}
    setModelo(modelo){this.modelo = modelo;}

    getMotor(){ return this.motor;}
    setModelo(motor){this.motor = motor;}

    getCor(){ return this.cor;}
    setCor(cor){this.cor = cor;}
}

class Livro{
    paginaAtual = 1;

    /**
     * @param {string} nome 
     * @param {string} autor 
     * @param {number} quantidadePaginas 
     */
    constructor(nome, autor, quantidadePaginas){
        this.nome = nome;
        this.autor = autor;
        this.quantidadePaginas = quantidadePaginas;
    }

    getPaginaAtual(){ return this.paginaAtual;}

    proximaPagina(){
        const teste = this.paginaAtual !== this.quantidadePaginas;
        if(teste) this.paginaAtual++;
        console.log(`${teste ? "Passei para a":"Terminei na"} página: ${this.paginaAtual}`);
    }

    /** @returns {boolean} Se o leitor chegou na ultima página do livro*/
    finalizeiLivro(){
        if(this.paginaAtual === this.quantidadePaginas) return true;

        return false;
    }
}

//Objetos abstratos

class Musica{
    /**@type {number} Representa a força da música em decibéis*/
    intensidade;
    /**@type {string} Representa o gênero músical*/
    genero;
    /**@type {string} Representa o instrumento usado para tocar a música*/
    instrumento;


    setIntensidade(intensidade){
        this.intensidade = intensidade;
    }
    getIntensidade(){ return this.intensidade;}

    setGenero(genero){
        this.genero = genero;
    }
    getGenero(){ return this.genero;}

    setInstrumento(instrumento){
        this.instrumento = instrumento;
    }
    getInstrumento(){ return this.instrumento;}
}

class Filosofia{

}


// Testes
