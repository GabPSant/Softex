const candidatos = {
    candidato_X: 889, candidato_Y: 849,
    candidato_Z: 515, branco: 0
};
const votos = [0,0,0,0]; // array para a contagem dos votos
// Função para avaliar e demonstrar o resultado da votação
function resultado(total){
    let vencedor;
    let maior = votos[0];
    for(i = 1; i<3; i++){
        if(maior < votos[i]){
            maior = votos[i];
        }
    }
    switch(maior){
        case votos[0]:
            vencedor = "candidatoX";
            break;
        case votos[1]:
            vencedor = "candidatoY";
            break;
        case votos[2]:
            vencedor = "candidatoZ"
    }
    if(maior == votos[0] && maior == votos[1] && maior == votos[2]){
        vencedor = "Inconclusivo";
    }
    alert(`Resultados da votação (total de votos: ${total})
    \nVencedor: ${vencedor}\nDistribuição dos votos:
    -- CandidatoX => ${votos[0]} votos
    -- CandidatoY => ${votos[1]} votos
    -- CandidatoZ => ${votos[2]} votos
    -- Em branco => ${votos[3]} votos`)
}
// Inicia o processo de votação
function votacao(){
    let resposta;
    let totalVotos = 0; // Variável que conta o total de votos
    alert("Processoa de votação");
    // Mantem o loop da votação enquanto o usuário não responder 'Sim' (1)
    while(true){
        // Avalia a votação do usuário e se ela é valida.
        while(true){
            resposta = prompt(`Qual candidato tera seu voto? (digite o número)\ncandidatoX: 889\ncandidatoY: 849\ncandidatoZ: 515\nbranco: 0`);
            try{
                resposta = parseInt(resposta);
                if(!(resposta ==candidatos.candidato_X || resposta == candidatos.candidato_Y || resposta ==candidatos.candidato_Z || resposta == candidatos.branco)){
                    throw Error(alert("Essa opção não existe, tente novamente"));
                }
                break;
            } catch(error){}
        }
        // Defini quem recebeu o voto
        switch(parseInt(resposta)){
            case candidatos.candidato_X:
                votos[0]++;
                alert("Um voto para o candidatoX");
                break;
            case candidatos.candidato_Y:
                votos[1]++;
                alert("Um voto para o candidatoY");
                break;
            case candidatos.candidato_Z:
                votos[2]++;
                alert("Um voto para o candidatoZ");
                break;
            case candidatos.branco:
                votos[3]++;
                alert("Um voto em branco");
            }
            totalVotos++;
        // Avalia a resposta do usuário sobre o termino da votação
        while(true){
            resposta = prompt(`Gostaria de terminar a votação? (digite o número)
            \n1 - Sim\n2 - Não`);
            try{
            resposta = parseInt(resposta)
            if(!(parseInt(resposta)>0 && parseInt(resposta)<3)){throw Error(alert("Essa opção não é valida, tente novamente"))}
            break;
            } catch(error){}
        }
        if(parseInt(resposta) == 1){
            alert("Terminando a votação")
            break;
        }
    }
    resultado(totalVotos)
}

votacao();