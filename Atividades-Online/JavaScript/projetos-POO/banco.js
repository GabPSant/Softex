class Banco{
    /**
     * Valores que representam uma conta bancaria
     * @param {number} conta 
     * @param {number} saldo 
     * @param {string} tipoConta 
     * @param {string} agencia 
     */
    constructor(conta, saldo, tipoConta, agencia){
        this.conta = conta;
        this.saldo = saldo;
        this.tipoConta = tipoConta;
        this.agencia = agencia;
    }

    /** Metodo para retornar o salario da conta
     * @return {number}
     */
    buscarSaldo(){
        return this.saldo;
    }

    /**
     * Método para adicionar o valor ao saldo atual
     * @param {number} valor
     */
    deposito(valor){
        this.saldo += valor;
    }

    /**
     * Método para retira o valor do saldo atual
     * @param {number} valor 
     */
    saque(valor){
        this.saldo -= valor;
    }

    /**
     * Método que retorna o número da conta existente
     * @returns {number}
     */
    numeroConta(){
        return this.conta;
    }
}

// Teste
const bancoTeste = new Banco(25431, 500, "conta depósito","NuBank");

console.log("Saldo atual: "+ bancoTeste.buscarSaldo());// Saldo atual: 500
console.log("Conta: " + bancoTeste.numeroConta());// Conta: 25431

bancoTeste.deposito(250);
console.log("Saldo atual (depois de depositar 250): " + bancoTeste.buscarSaldo())// Saldo atual: 750

bancoTeste.saque(600);
console.log("Saldo atual (depois de sacar 600): " + bancoTeste.buscarSaldo())// Saldo atual: 150