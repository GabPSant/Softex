// Questão 8
function ordenarValores(numero1, numero2, numero3){
    try{
        if(Number.isNaN(Number(numero1)) || Number.isNaN(Number(numero2)) || Number.isNaN(Number(numero3))){
            throw Error(console.log("Pelo menos um dos valores recebidos não é um número\n"));
        }
    }
    catch(error){
        return 1;
    }

    const lista = [Number(numero1), Number(numero2), Number(numero3)];
    lista.sort(); // Ordena a lista de forma crescente
    console.log(lista);
    lista.forEach((elemento) => {console.log(elemento);});
}
// ordenarValores(56,43,19.8);

// Questão 9