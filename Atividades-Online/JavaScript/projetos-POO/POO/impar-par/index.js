/**
 * Função que defini se o usuário aposta Par ou Impar
 * @param {*} escolha 
 */
function escolherAposta(escolha){
    while(true){
        escolha = prompt("Impar ou Par?\n\n1 - Par\n2 - Impar\n\n");
        try{
            if(escolha === "1" || escolha === "2" || escolha.toUpperCase() === "PAR" || escolha.toUpperCase() === "IMPAR")
                break;

            throw Error;
        }
        catch(error){
            console.error(error);
        }
        finally{
            console.log("Essa resposta não é válida, tente novamente")
        }
    }
    return escolha;
}

/**
 * Função que defini a quantidade de dados usados pelo usuário
 * @param {*} dedos 
 */
function quantidadeDedos(dedos){
    while(true){
        dedos = prompt("Quantos dedos você aposta? (0 a 10)");
        try{
            if(parseInt(dedos) < 0 || parseInt(dedos)>10 || Number.isNaN(parseInt(dedos)))
                throw Error;

            break;
        }
        catch(error){
            console.error(error);
        }
        finally{
            console.log("Quantidade de dedos invalidada")
        }
    }
    return dedos;
}

/**
 * Função que retorna o resultado do jogo
 * @param {string} escolha 
 * @param {number} dedos 
 */
function resultado(escolha, dedos){
    dedos = parseInt(dedos);
    dedos += parseInt(Math.random()*10);
    const resultado = (escolha === "1" || String(escolha).toUpperCase() === "PAR")? true : false;
    const mensagem = 
    ((dedos%2 === 0 && resultado) || (dedos%2 !== 0 && !resultado))? "Você venceu! ":"Você perdeu! ";
    alert(
        `Resultados\n\nNº dedos: ${dedos} dedos\n` + mensagem
    );
}

/**
 * Função para iniciar o jogo do Impar ou Par
 */
function iniciarJogo(){
    alert("Iniciando o Jogo impar ou par? (Pressione ENTER)");
    let escolha = "", dedos = 0;
    //As variáveis precisam receber os valores retornados pelas funções para usarem na função 'resultado'
    escolha = escolherAposta(escolha);
    dedos = quantidadeDedos(dedos);

    console.log(escolha);
    resultado(escolha, dedos);
}

iniciarJogo();