/**
 * Processo matemático de uma cálculadora
 * @param {string} simbolo 
 * @return {number}
 */
function processo(simbolo, numero1, numero2){
    switch(simbolo){
        case '+': return numero1+numero2;

        case '-': return numero1-numero2;

        case '*': return numero1*numero2;

        case '/': return numero1/numero2;

        default: return 0;
    }
}

/**
 * Função para armazenar os valores do cálculo
 * @param {string} simbolo 
 * @param {number} numero1 
 * @param {number} numero2 
 * @param {Function} callback 
 * @return {number}
 */
const armazenarValores = (simbolo, numero1, numero2, callback) =>{
    return callback(simbolo, numero1, numero2)
}

// Função para demonstar dos resultados
const mostrarResultado = new Function(console.log("Resultado: "+armazenarValores('*', 5, 9, processo)));
mostrarResultado();