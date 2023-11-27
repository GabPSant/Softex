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

// Teste da classe Carro
const lamborghini = new Carro("Lamborghini","5,2 | V10","amarelo");
console.log(
    lamborghini.getCor(), '\n',
    lamborghini.getModelo(), '\n',
    lamborghini.getMotor()
);

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

// Teste da classe Livro
const witcher = new Livro("O ultimo desejo", "Andrzej Sapkowski", 318);
console.log(
    witcher.finalizeiLivro(), "\n",
    witcher.getPaginaAtual(), "\n",
    witcher.proximaPagina(), "\n",
    witcher.getPaginaAtual()
);

// Objetos abstratos

class Musica{
    intensidade;
    genero;
    instrumento;

    /**
     * @param {string} intensidade Representa a força da música em decibéis
     */
    setIntensidade(intensidade){
        this.intensidade = intensidade;
    }
    getIntensidade(){ return this.intensidade;}

    /**
     * @param {string} genero Representa o gênero músical
     */
    setGenero(genero){
        this.genero = genero;
    }
    getGenero(){ return this.genero;}

    /**
     * @param {number} instrumento Representa o instrumento usado para tocar a música
     */
    setInstrumento(instrumento){
        this.instrumento = instrumento;
    }
    getInstrumento(){ return this.instrumento;}
}

// Teste da classe Musica
const clair_de_lune = new Musica();
clair_de_lune.setGenero("Impressionismo");
clair_de_lune.setInstrumento("piano");
clair_de_lune.setIntensidade(500);

console.log(
    clair_de_lune.getGenero(), '\n',
    clair_de_lune.getInstrumento(), '\n',
    clair_de_lune.getIntensidade()
);

class Sentimento{

    /**
     * 
     * @param {string} tipo Tipo de sentimento
     * @param {number} intensidade intensidade do sentimento
     * @param {string} efeito consequência do efeito
     */
    constructor(tipo, intensidade, efeito){
        this.tipo = tipo;
        this.intensidade = intensidade;
        this.efeito = efeito;
    }

    getTipo(){
        return this.tipo;
    }

    getIntensidade(){
        return this.intensidade;
    }

    getEfeito(){
        return this.efeito;
    }
}

//Teste da classe Sentimento
const amor = new Sentimento("amor fraternal", 800, "é sempre bom ter uma família que te ame");
console.log(
    amor.getEfeito(), '\n',
    amor.getIntensidade(), '\n',
    amor.getTipo()
);