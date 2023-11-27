/**
 * Agora, vamos analisar mais um tipo de caso que utiliza herança. 
 * Imagine que precisamos representar veículos de diferentes marcas e modelos. 
 * Para isso, devemos definir uma classe para cada veículo, porém, existem informações comuns a todos, 
 * como tipo do veículo, chassi, marca, modelo, ano, entre outros.
 */

/**
 * Classe mãe - possui possui todos os atributos e métodos comuns às classes filhas.
 */ 

class Veiculo{
    /**
     * Construtor constructor – recebe o tipo de veículo, o chassi, a marca, o modelo e o ano do veículo
     * @param {string} tipo 
     * @param {string} chassi 
     * @param {string} marca 
     * @param {string} modelo 
     * @param {number} ano 
     */
    constructor(tipo, chassi, marca, modelo, ano){
        this._tipo = tipo;
        this._chassi = chassi;
        this._marca = marca;
        this._modelo = modelo;
        this._ano = ano;
    }
}

/**
 * Classe filha herdeira da classe mãe Veiculo. 
 * Depois de ter seu nome definido, o nome da classe mãe é declarado entre parênteses.
 */
class Motocicleta extends Veiculo{
    /**
     * Além de herdar os dados da classe mãe, essa classe filha se estende para possuir mais dados. 
     * Nesse caso, contém a informação de cilindrada referente à motocicleta.
     * @param {string} tipo 
     * @param {string} chassi 
     * @param {string} marca 
     * @param {string} modelo 
     * @param {number} ano 
     * @param {number} cilindrada 
     */
    constructor(tipo, chassi, marca, modelo, ano, cilindrada){
        /**
         * Essa classe filha repassa seus dados, de tipo de veículo, 
         * chassi, marca, modelo e ano do veículo, para a classe mãe utilizando a função .super().
         */
        super(tipo, chassi, marca, modelo, ano);
        this._cilindrada = cilindrada;
    }
}